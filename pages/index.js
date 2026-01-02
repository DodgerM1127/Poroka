import Link from 'next/link'
import Countdown from '../components/Countdown'

export default function Home() {
  const target = '2026-08-29T14:00:00+01:00'
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-6">
      <header className="text-center">
        <h1 className="text-5xl font-bold">G&M — Gaja & Matej</h1>
        <p className="text-gray-600 mt-2">29 August 2026 — 14:00 (+01:00)</p>
      </header>

      <Countdown targetDate={target} />

      <div className="flex gap-4">
        <Link href="/rsvp"><a className="px-4 py-2 rounded bg-pink-600 text-white">RSVP</a></Link>
        <Link href="/admin"><a className="px-4 py-2 rounded border">Admin</a></Link>
      </div>

      <footer className="text-sm text-gray-500 mt-10">Site: gajamatej.com</footer>
    </div>
  )
}
