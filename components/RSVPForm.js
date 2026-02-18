import { useState } from 'react'

export default function RSVPForm({ onSuccess }) {
  const [form, setForm] = useState({ name: '', attending: 'yes', message: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  async function submit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const payload = { ...form, party_size: 1 }
      console.log('Submitting RSVP payload:', payload)
      const res = await fetch('/api/rsvp', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Unknown error')
      // pass the submitted name so the popup can show only the submitter
      onSuccess && onSuccess(data, form.name)
      setForm({ name: '', attending: 'yes', message: '' })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4 max-w-md">
      {error && <div className="text-red-600">{error}</div>}
      <div>
        <label className="block text-sm font-medium">Ime in Priimek</label>
        <input name="name" value={form.name} onChange={handle} className="mt-1 block w-full rounded border px-3 py-2" placeholder="Vnesite ime in priimek" required />
      </div>

      <div>
        <label className="block text-sm font-medium">Prideš?</label>
        <select name="attending" value={form.attending} onChange={handle} className="mt-1 block w-full rounded border px-3 py-2">
          <option value="yes">Da</option>
          <option value="maybe">Mogoče</option>
          <option value="no">Ne</option>
        </select>
      </div>
      <div>
        <div className="text-sm text-gray-600">Če prihaja več oseb, prosimo izpolnite obrazec posebej za vsakega gosta.</div>
      </div>
      <div>
        <label className="block text-sm font-medium">Napiši svojo najljubšo pesem oziroma glasbono željo</label>
        <textarea name="message" value={form.message} onChange={handle} className="mt-1 block w-full rounded border px-3 py-2" />
      </div>
      <div>
        <button className="rounded bg-pink-600 text-white px-4 py-2" disabled={loading}>{loading ? 'Pošiljam...' : 'Pošlji odgovor'}</button>
      </div>
    </form>
  )
}
