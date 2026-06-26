This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
cd farm-experience
npm install
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Geist.

---

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel (recommended)

Option A — Connect repository (recommended):

1. Push the project to GitHub (or another Git provider).
2. Go to https://vercel.com/new and import the repository.
3. Vercel will auto-detect Next.js and deploy the app.

Option B — Vercel CLI:

```bash
npm i -g vercel
vercel login
vercel --prod
```

Notes and tips:
- `next.config.ts` includes a `turbopack.root` setting to avoid the Turbopack workspace-root warning if you deploy from a monorepo.
- If you want a hero video instead of a static image, add `public/hero.mp4` and I can wire it in with `autoplay muted loop playsInline` and a `poster` fallback.
- For performance, consider optimizing large images and using modern codecs for video (H.264 baseline or AV1/VP9 where supported).

## Manual deploy (Git + CLI quick commands)

```bash
# initialize git, create a repo, push
git init
git add .
git commit -m "Initial farm-experience premium landing"
# create repo on GitHub (you can use GitHub CLI) and push
# gh repo create YOUR_REPO_NAME --private --source=. --remote=origin
git push -u origin main

# then deploy
vercel --prod
```

---

If you'd like, I can:
- Wire an autoplay hero video you upload (I can transcode it to web-friendly formats),
- Add an audio flourish for signature moments (muted by default with control), or
- Create a GitHub repo and connect + deploy via Vercel (you'll need to authenticate the CLI or allow me to run commands if you grant it).

Tell me which of the above you'd like me to do next.
