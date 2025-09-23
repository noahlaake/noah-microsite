<!-- bump: 2025-09-23-01 to trigger redeploy -->
# Noah Laake — Sponsor Microsite (Next.js + Tailwind)
A one-page promo/microsite for sponsors: hero, results, media gallery, partner logos, and contact.
---
## 🚀 Quick Start (local)
### 1) Install dependencies
```bash
npm i
# or
pnpm i

2) Run locally
npm run dev

Deploy on Vercel
Push this repo to GitHub.
In Vercel → New Project → Import → Deploy.
Add your domain in Project Settings → Domains.

🖼️ Images

Place/replace images in /public/media (these are the paths the site uses):
hero_noah.jpg (in /public)
media/action-1.jpg … media/action-4.jpg
media/behind-1.jpg … media/behind-3.jpg
media/lifestyle-1.jpg
Social preview: og.jpg (in /public)
Optional: favicon.ico (in /public)

## ✉️ Contact
Update the mailto link in `app/page.tsx` if needed.
