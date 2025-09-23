<!-- deploy: bump 2025-09-23T00:00Z to trigger redeploy -->

# Noah Laake — Sponsor Microsite (Next.js + Tailwind)

## 🚀 Quick start

1) Install deps
```bash
npm i
# or
pnpm i

2) Run locally
```bash
npm run dev
```

Deploy on Vercel
Push this repo to GitHub.
In Vercel → New Project → Import → Deploy.
Add your domain in Project Settings → Domains.

🖼️ Images
Place/replace images in /public/media (these are the paths the site uses):
hero_noah.jpg
action-1.jpg, action-2.jpg, action-3.jpg, action-4.jpg
behind-1.jpg, behind-2.jpg, behind-3.jpg
lifestyle-1.jpg
Social preview: og.jpg (in /public)
Optional: favicon.ico (in /public)
The gallery reads from /media/... (e.g., /media/action-1.jpg) which maps to files in /public/media.

## ✉️ Contact
Update the mailto link in `app/page.tsx` if needed.
