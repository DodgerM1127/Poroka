# Gaja & Matej — Wedding Site (G&M)

Starter Next.js + Tailwind project for the Gaja & Matej wedding site.

## Features
- Home page with countdown to 29 August 2026 14:00 (+01:00)
- RSVP form that stores responses (Supabase recommended)
- After successful RSVP the site shows a popup listing confirmed guests
- Simple passcode-protected admin UI to view/export RSVPs

## Setup (local)
1. Install dependencies: `npm install`
2. Copy `.env.local.example` to `.env.local` and set values:
   - `SUPABASE_URL` `SUPABASE_KEY` (optional; without Supabase RSVPs are stored in `data/rsvps.json`)
   - `ADMIN_PASSCODE` (required for admin UI)
3. Run dev server: `npm run dev`

## Quick local test
- Start the dev server: `npm run dev` (Open http://localhost:3000)
- Submit an RSVP via the UI at `/rsvp` and confirm that a popup appears with confirmed guest names.
- The fallback storage writes to `data/rsvps.json` (dev only). You can inspect it to see saved entries.

Quick curl test (after starting dev server):

curl -X POST http://localhost:3000/api/rsvp \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Guest","email":"test@example.com","attending":"yes","party_size":2}'

You should receive a JSON response with a `confirmed` array of guest names.

## Push to GitHub & deploy
- Create a GitHub repo for this project and push the code (see `PUSH.md` for commands).
- Import the repo into Vercel and set the environment variables (`SUPABASE_URL`, `SUPABASE_KEY`, `ADMIN_PASSCODE`).
- Set the domain `gajamatej.com` in Vercel settings and follow DNS instructions.

## Deploy
- Recommended: Deploy to Vercel (connect your GitHub repo, set env vars in Vercel dashboard)
- Domain: `gajamatej.com` (configure DNS to point to Vercel)

## Notes
- This is a minimal starter. For production, use Supabase (or Postgres), secure admin auth, and add spam protection.
