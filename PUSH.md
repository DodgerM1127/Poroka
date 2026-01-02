Push to GitHub

1. Create an empty repository on GitHub (e.g., `gajamatej/gajamatej-site`).
2. In your local repo run:

   git remote add origin git@github.com:<your-username>/<repo>.git
   git branch -M main
   git push -u origin main

3. In GitHub, enable branch protection if desired and set up repository secrets if needed.

Alternatively, if you have the GitHub CLI (`gh`) installed:

   gh repo create <your-username>/<repo> --public --source=. --remote=origin --push

After pushing, import the repo into Vercel and follow the Deployment checklist in `.github/ISSUE_TEMPLATE/deployment.md`.
