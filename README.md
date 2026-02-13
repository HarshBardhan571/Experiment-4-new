# Experiment 3 — Full-stack Notes App (Demo)

This repository contains a small Next.js app used for Experiment 3. It demonstrates:

- A React frontend (Next.js) that loads sample data from an API route
- A server API route (`/api/notes`) that returns sample data from `data/notes.json`
- Client-side persistence using `localStorage` (notes persist in the browser)

What I implemented
- Responsive single-page notes app (add/delete notes)
- README with instructions to run locally, push to GitHub, and deploy to Vercel

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
git init
git add .
git commit -m "Initial commit - Experiment 3"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

2. Deploy to Vercel

- Sign in to Vercel and import the GitHub repository.
- Vercel auto-detects Next.js and will build & deploy the app.

Notes about persistence

Serverless functions cannot persist file changes at runtime. For this assignment the app persists notes in the browser via `localStorage`. The API route returns sample content from `data/notes.json`.

If you want full server persistence, connect to a simple database (Firebase, Supabase, or MongoDB Atlas) and update the API routes accordingly.
