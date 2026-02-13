# Experiment 3 — Full-stack Notes App (Demo)

This repository contains a small Next.js app used for Experiment 3. It demonstrates:

- A React frontend (Next.js) with a deployed Vercel URL
- A server API route (`/api/notes`) that returns sample data from `data/notes.json`
- Client-side persistence using `localStorage` (notes persist in the browser)

What I implemented

- Responsive single-page notes app (add/edit/delete notes)
- Search/filter, note timestamps, note count, and clear-all
- Colorful UI with gradient header, note badges, and toast notifications
- README with run, push, and deploy instructions

How to run locally

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm run dev
```

Open http://localhost:3000

Deploying

1. Create a new GitHub repository and push this project.

```bash
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

2. Deploy to Vercel

- Sign in to Vercel → Import Project → choose `HarshBardhan571/Experiment-3` → Deploy.
- Or use the Vercel CLI:

```bash
npm i -g vercel
vercel login
vercel --prod
```

Notes about persistence

Serverless functions (Vercel) cannot persist file changes at runtime. This app persists notes in the browser via `localStorage`. The API route returns sample content from `data/notes.json`.

If you need server persistence, I can add Supabase/Firebase integration and update the API routes — tell me which provider you prefer.
