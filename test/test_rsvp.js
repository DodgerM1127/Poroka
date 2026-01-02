// Usage: node test/test_rsvp.js
// Ensure the dev server is running at http://localhost:3000

import fetch from 'node-fetch'

async function run() {
  const url = 'http://localhost:3000/api/rsvp'
  const body = { name: 'Test Guest', email: 'test@example.com', attending: 'yes', party_size: 2, message: 'Excited!' }
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
  const json = await res.json()
  console.log('Status:', res.status)
  console.log(json)
}

run().catch(err => { console.error(err); process.exit(1) })
