Deploying to Vercel

1. Push this repository to GitHub.
2. Sign in to Vercel and import the repo.
3. Set the environment variables in Vercel settings (`SUPABASE_URL`, `SUPABASE_KEY`, `ADMIN_PASSCODE`).
4. Add your domain `gajamatej.com` in Vercel and follow the DNS steps.

Notes:
- If you use Supabase, create a `rsvps` table with columns matching the fields in the code (name text, email text, attending boolean, party_size integer, message text, submitted_at timestamptz).
- Keep the Admin passcode secret.
