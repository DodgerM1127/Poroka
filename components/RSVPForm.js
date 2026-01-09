import { useState } from 'react'

export default function RSVPForm({ onSuccess }) {
  const [form, setForm] = useState({ name: '', email: '', attending: 'yes', party_size: 1, message: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  async function submit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/rsvp', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Unknown error')
      // pass the submitted name so the popup can show only the submitter
      onSuccess && onSuccess(data, form.name)
      setForm({ name: '', email: '', attending: 'yes', party_size: 1, message: '' })
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
        <label className="block text-sm font-medium">Name</label>
        <input name="name" value={form.name} onChange={handle} className="mt-1 block w-full rounded border px-3 py-2" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input name="email" type="email" value={form.email} onChange={handle} className="mt-1 block w-full rounded border px-3 py-2" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Attending</label>
        <select name="attending" value={form.attending} onChange={handle} className="mt-1 block w-full rounded border px-3 py-2">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Number of guests</label>
        <input name="party_size" type="number" min="1" value={form.party_size} onChange={handle} className="mt-1 block w-full rounded border px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Message / Song request</label>
        <textarea name="message" value={form.message} onChange={handle} className="mt-1 block w-full rounded border px-3 py-2" />
      </div>
      <div>
        <button className="rounded bg-pink-600 text-white px-4 py-2" disabled={loading}>{loading ? 'Sending...' : 'Send RSVP'}</button>
      </div>
    </form>
  )
}
