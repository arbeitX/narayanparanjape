# Narayan Paranjape — Portfolio Website

A mobile-first portfolio and advisory website for Mr. Narayan Paranjape, retired Class 1 Government Officer (FDCM) and Advisor at Tirumalla Tirupati Multistate Co-operative Credit Society Ltd., Ballarpur Branch.

## Prerequisites

- Node.js 24
- [pnpm](https://pnpm.io/) (this repo requires pnpm — installs via npm/yarn are blocked)

Install pnpm if you don't have it:

```bash
npm install -g pnpm
```

## Build steps

1. Clone the repo and move into it:

   ```bash
   git clone <repo-url>
   cd narayanparanjape
   ```

2. Install dependencies (this also runs a workspace-wide typecheck build):

   ```bash
   pnpm install
   ```

3. Build the site (typechecks then builds all packages):

   ```bash
   pnpm run build
   ```

   The portfolio site's production build output is written to `artifacts/portfolio/dist`.

   To build just the portfolio package on its own:

   ```bash
   pnpm --filter @workspace/portfolio run build
   ```

## Running locally

Start the portfolio dev server (Vite, hot reload):

```bash
pnpm --filter @workspace/portfolio run dev
```

Preview a production build:

```bash
pnpm --filter @workspace/portfolio run serve
```

Run the API server (health check only — the site itself is static):

```bash
pnpm --filter @workspace/api-server run dev
```

## Other useful commands

```bash
pnpm run typecheck   # typecheck across all packages
```

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, TailwindCSS, shadcn/ui, framer-motion, wouter
- API: Express 5 (health check only)

## Where things live

- `artifacts/portfolio/src/App.tsx` — main app and all page sections
- `artifacts/portfolio/src/index.css` — theme tokens and Google Fonts
- `replit.md` — full product/architecture notes
