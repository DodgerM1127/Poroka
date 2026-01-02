import fs from 'fs'
import path from 'path'
import { supabase } from '../../lib/supabase'

const dbFile = path.join(process.cwd(), 'data', 'rsvps.json')

export default async function handler(req, res) {
  const pass = req.headers['x-passcode'] || ''
  const ADMIN = process.env.ADMIN_PASSCODE || 'change-me'
  if (pass !== ADMIN) return res.status(401).json({ error: 'Unauthorized' })

  try {
    if (supabase) {
      const { data, error } = await supabase.from('rsvps').select('*').order('submitted_at', { ascending: false })
      if (error) throw error
      return res.status(200).json({ success: true, data })
    }

    // fallback local
    if (!fs.existsSync(dbFile)) return res.status(200).json({ success: true, data: [] })
    const raw = fs.readFileSync(dbFile, 'utf8')
    const arr = JSON.parse(raw || '[]')
    return res.status(200).json({ success: true, data: arr.reverse() })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Internal error' })
  }
}
