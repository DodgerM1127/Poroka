import fs from 'fs'
import path from 'path'
import { supabase } from '../../lib/supabase'

const dbFile = path.join(process.cwd(), 'data', 'rsvps.json')
const dbFilePovabljeni = path.join(process.cwd(), 'data', 'rsvps_povabljeni.json')

export default async function handler(req, res) {
  const pass = req.headers['x-passcode'] || ''
  const ADMIN = process.env.ADMIN_PASSCODE || 'change-me'
  if (pass !== ADMIN) return res.status(401).json({ error: 'Unauthorized' })

  try {
    if (supabase) {
      const { data: dataCerkev, error: errorCerkev } = await supabase.from('rsvps').select('*').order('submitted_at', { ascending: false })
      const { data: dataZabava, error: errorZabava } = await supabase.from('rsvps_povabljeni').select('*').order('submitted_at', { ascending: false })
      if (errorCerkev) throw errorCerkev
      if (errorZabava) throw errorZabava
      return res.status(200).json({ success: true, dataCerkev: dataCerkev || [], dataZabava: dataZabava || [] })
    }

    // fallback local
    let dataCerkev = []
    let dataZabava = []
    if (fs.existsSync(dbFile)) {
      const raw = fs.readFileSync(dbFile, 'utf8')
      dataCerkev = JSON.parse(raw || '[]').reverse()
    }
    if (fs.existsSync(dbFilePovabljeni)) {
      const raw = fs.readFileSync(dbFilePovabljeni, 'utf8')
      dataZabava = JSON.parse(raw || '[]').reverse()
    }
    return res.status(200).json({ success: true, dataCerkev, dataZabava })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Internal error' })
  }
}
