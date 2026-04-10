# British Bulldog NFT Website

## Overview

British Bulldog NFT landing page — a premium, dark-themed website for a 444-piece NFT collection on Ethereum. Built with React + Vite in a pnpm monorepo.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite + Tailwind CSS v4
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Animation**: Framer Motion
- **Fonts**: Cinzel (serif headings), Oswald (display), Inter (body)
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle for API), Vite (frontend)

## Project Structure

- `artifacts/bbulldog/` — Main website (React + Vite), served at `/`
- `artifacts/api-server/` — Express API server, served at `/api`
- `lib/` — Shared libraries (db, api-spec, api-client-react, api-zod)

## Key Features

- Dark navy blue (#0A1628) + blood red (#8B0000) + gold (#D4AF37) color scheme
- Sections: Hero, Brotherhood, Lore, Mint Details, Trait Rarity, Gallery, Mission, $BULLDOG Token, Roadmap, Whitepaper, Footer
- 7 NFT sneak peek images in animated gallery
- Downloadable whitepaper PDF
- Social links: X (Twitter), Discord
- Responsive with mobile navigation
- Scroll animations via Framer Motion

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

## Deployment

- Target domain: Britishbulldog.replit.app
- Frontend is static (Vite build), API server runs Node.js
