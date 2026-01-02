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

## Deploy
- Recommended: Deploy to Vercel (connect your GitHub repo, set env vars in Vercel dashboard)
- Domain: `gajamatej.com` (configure DNS to point to Vercel)

## Notes
- This is a minimal starter. For production, use Supabase (or Postgres), secure admin auth, and add spam protection.
