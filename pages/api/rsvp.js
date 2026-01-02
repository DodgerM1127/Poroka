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

  const entry = { name, email, attending: attending === 'yes', party_size: Number(party_size) || 1, message: message || '', submitted_at: new Date().toISOString() }

  try {
    if (supabase) {
      const { error } = await supabase.from('rsvps').insert([entry])
      if (error) throw error
      const { data: confirmed } = await supabase.from('rsvps').select('name').eq('attending', true)
      const names = (confirmed || []).map(r => r.name)
      return res.status(200).json({ success: true, confirmed: names })
    }

    // fallback: write to local file (dev only)
    ensureDataDir()
    const raw = fs.readFileSync(dbFile, 'utf8')
    const arr = JSON.parse(raw || '[]')
    arr.push(entry)
    fs.writeFileSync(dbFile, JSON.stringify(arr, null, 2))

    const names = arr.filter(a => a.attending).map(a => a.name)
    return res.status(200).json({ success: true, confirmed: names })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Internal error' })
  }
}
