import fs from 'fs'
import path from 'path'
import { supabase } from '../../lib/supabase'

const dataPath = path.join(process.cwd(), 'data')
const dbFile = path.join(dataPath, 'rsvps.json')

function ensureDataDir() {
  if (!fs.existsSync(dataPath)) fs.mkdirSync(dataPath)
  if (!fs.existsSync(dbFile)) fs.writeFileSync(dbFile, '[]')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { name, email, attending, party_size, message } = req.body || {}
  if (!name || !email) return res.status(400).json({ error: 'Name and email are required' })

  // log the received payload for debugging
  console.log('RSVP payload:', req.body)
  const entry = { name, email, attending: attending === 'yes', party_size: Number(party_size) || 1, message: message || '', submitted_at: new Date().toISOString() }

  try {
    if (supabase) {
      const { error } = await supabase.from('rsvps').insert([entry])
      if (error) throw error

      // Notify guest and admins (async, non-blocking)
      ;(async () => {
        try {
          const { sendConfirmation, sendAdminNotification } = await import('../../lib/email')
          const adminEmails = (process.env.ADMIN_EMAILS || process.env.EMAIL_FROM || '').split(',').map(s => s.trim()).filter(Boolean)
          await sendConfirmation(entry.email, entry.name, entry)
          if (adminEmails.length) await sendAdminNotification(adminEmails, entry)
        } catch (e) {
          console.error('Email send failed (supabase):', e)
        }
      })()

      const { data: confirmed } = await supabase.from('rsvps').select('name').eq('attending', true)
      const names = (confirmed || []).map(r => r.name)
      return res.status(200).json({ success: true, confirmed: names })
    }

    // fallback: try to write to local file (dev only); if that fails (serverless readonly fs), fall back to ephemeral confirmation
    try {
      ensureDataDir()
      const raw = fs.readFileSync(dbFile, 'utf8')
      const arr = JSON.parse(raw || '[]')
      arr.push(entry)
      fs.writeFileSync(dbFile, JSON.stringify(arr, null, 2))

      const names = arr.filter(a => a.attending).map(a => a.name)
      return res.status(200).json({ success: true, confirmed: names })
    } catch (writeErr) {
      // Likely running on a serverless platform where filesystem is read-only.
      console.error('RSVP write fallback failed:', writeErr)
      // Return success so the user sees confirmation; recommend persistent storage for production
      // try to notify emails even if we couldn't persist
      ;(async () => {
        try {
          const { sendConfirmation, sendAdminNotification } = await import('../../lib/email')
          const adminEmails = (process.env.ADMIN_EMAILS || process.env.EMAIL_FROM || '').split(',').map(s => s.trim()).filter(Boolean)
          await sendConfirmation(entry.email, entry.name, entry)
          if (adminEmails.length) await sendAdminNotification(adminEmails, entry)
        } catch (e) {
          console.error('Email send failed (fallback):', e)
        }
      })()

      return res.status(200).json({ success: true, confirmed: [entry.name], warning: 'Could not persist RSVP on server. Enable SUPABASE_URL and SUPABASE_KEY for persistent storage.' })
    }
  } catch (err) {
    console.error('Unexpected error in /api/rsvp:', err)
    // Include debug details when DEBUG_RSVP is true
    const debug = process.env.DEBUG_RSVP === 'true'
    const resp = { error: 'Internal error. Check server logs.' }
    if (debug) {
      resp.detail = String(err.message || err)
      resp.stack = err.stack
    }
    return res.status(500).json(resp)
  }
}
