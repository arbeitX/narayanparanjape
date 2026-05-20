# Mr. Narayan Paranjape — Financial Advisor Portfolio

A mobile-first portfolio and advisory website for Mr. Narayan Paranjape, retired Class 1 Government Officer (FDCM) and Advisor at Tirumalla Tirupati Multistate Co-operative Credit Society Ltd., Ballarpur Branch.

## Run & Operate

- `pnpm --filter @workspace/portfolio run dev` — run the portfolio website (port auto-assigned)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, TailwindCSS, shadcn/ui, framer-motion, wouter
- API: Express 5 (health check only — site is static)
- No database needed (static content site)

## Where things live

- `artifacts/portfolio/src/App.tsx` — main app and all page sections
- `artifacts/portfolio/src/index.css` — theme tokens and Google Fonts

## Product

A trust-building, local-friendly portfolio website for Mr. Narayan Paranjape:
- Hero section with CTA buttons (Invest Now + WhatsApp)
- About section highlighting 30+ years government service
- FD Investment Plans table (10% – 12.5% p.a.)
- Benefits, Success Stories, Referral Program, Contact sections
- English / Marathi language toggle
- Mobile-first, fully responsive

## User preferences

- Mobile-first design, compatible with low-end Android phones
- Bilingual: English and Marathi toggle
- WhatsApp as primary contact CTA
- No emojis in UI

## Architecture decisions

- Static single-page app — no backend data needed, all content hardcoded
- Bilingual support via React state context (no i18n library overhead)
- Presentation-first artifact — no OpenAPI/codegen needed
