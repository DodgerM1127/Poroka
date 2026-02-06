import { useState } from 'react'

export default function Admin() {
  const [pass, setPass] = useState('')
  const [data, setData] = useState(null)
  const [error, setError] = useState('')

  async function load(e) {
    e.preventDefault()
    setError('')
    try {
      const res = await fetch('/api/admin', { headers: { 'x-passcode': pass } })
      const json = await res.json()
      if (!res.ok) throw new Error(json?.error || 'Unauthorized')
      setData(json.data)
    } catch (err) {
      setError(err.message)
    }
  }

  function exportCSV() {
    if (!data) return
    const headers = ['Name', 'Attending', 'Message', 'Submitted']
    const rows = data.map(r => [r.name, r.attending ? 'Da' : 'Ne', r.message || '', r.submitted_at])
    const csv = [headers.join(','), ...rows.map(row => row.map(v => '"' + String(v).replace(/"/g, '""') + '"').join(','))].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'rsvps.csv'
    a.click()
  }

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-2xl font-semibold">Admin</h2>
      {!data && (
        <form onSubmit={load} className="mt-6">
          <label className="block">Passcode</label>
          <input value={pass} onChange={e => setPass(e.target.value)} className="mt-2 rounded border px-3 py-2" />
          <div className="mt-4">
            <button className="px-4 py-2 rounded bg-pink-600 text-white">Unlock</button>
          </div>
          {error && <div className="text-red-600 mt-2">{error}</div>}
        </form>
      )}

      {data && (
        <div className="mt-6">
          <div className="mb-4 flex gap-2">
            <button className="px-3 py-2 rounded bg-gray-200" onClick={() => setData(null)}>Logout</button>
            <button className="px-3 py-2 rounded bg-green-500 text-white" onClick={exportCSV}>Export CSV</button>
          </div>
          <table className="w-full border">
            <thead className="bg-gray-100"><tr><th className="p-2">Name</th><th className="p-2">Attending</th><th className="p-2">Message</th><th className="p-2">Submitted</th></tr></thead>
            <tbody>
              {data.map((r, i) => (
                <tr key={i} className="border-t"><td className="p-2">{r.name}</td><td className="p-2">{r.attending ? 'Da' : 'Ne'}</td><td className="p-2">{r.message || '-'}</td><td className="p-2">{r.submitted_at}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
