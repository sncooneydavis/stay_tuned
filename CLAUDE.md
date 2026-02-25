# CLAUDE.md

## Do

- when design spec or instructions are ambiguous, ask clarifying questions before writing code.
- ask before scaffolding empty files or directories

## Do NOT

- Add TypeScript
- Add webpack
- Add Redux, Zustand, or any state management library
- Build the event flier (`event_flier.png`) in HTML — it is a static image asset
- Install UI component libraries (Material UI, Chakra, shadcn, etc.)
- Add a root `package.json` or workspace tooling (Turborepo, Nx, Lerna)
- Modify the design spec file

## Project

Stay Tuned Records — mobile-first record store website with Shopify commerce integration and an admin CMS.

## Repo Path

/Users/shannoncooney/Library/CloudStorage/OneDrive-Personal/repos/stay_tuned

## Current State

Project is in early skeleton stage:

- **Client**: App shell with React Router (Home, Shop, About routes). All three page components are stubs (empty divs). Design tokens, global reset, layout utilities in place. `shopify.js` and `api.js` are empty.
- **Server**: all source files (`index.js`, `routes.js`, `auth.js`) are empty.
- **Database**: Prisma schema defined with initial migration applied (4 tables created), but no server code uses it yet.
- **Docs**: setup guide, desktop/mobile wireframes, and cart/menu wireframe screenshots available.

## Stack

- **Client** (`client/`): Vite + React + React Router
- **Server** (`server/`): Express.js + Prisma (SQLite) + Passport.js
- **Commerce**: Shopify Buy SDK (client-side) + Storefront API (server-side proxy for search)
- **Styling**: Tailwind CSS v4 installed via `@tailwindcss/vite`; currently using CSS custom properties and layout utility classes. Tailwind utilities available for use as components are built.
  - **Fonts**: Righteous (headings), Inter (body) — loaded via Google Fonts CDN

<!-- #TODO_HUMAN_CLAUDE: Design the API proxy pattern. Intended flow: client → Express server → Shopify Storefront API (for search/autocomplete). Needs decision on endpoint structure, caching, and error handling. -->

## Project Structure

<!-- #TODO_HUMAN_CLAUDE: Consider adding a Claude Code hook that auto-regenerates this directory listing at the end of each prompt cycle. Rationale: if CC sees the file list up front, it can immediately skip irrelevant directories (e.g., /assets, /dist) when working on specific features. -->

```md
stay_tuned/
├── CLAUDE.md                          # Claude Code project instructions
├── DESIGN_SPEC.md                     # Visual design spec (colors, type, layout, components)
├── README.md                          # Project readme (empty placeholder)
├── .gitignore                         # Ignores node_modules, dist, .env, .db, .DS_Store
│
├── client/                            # Vite + React SPA
│   ├── package.json                   # Client deps: React 19, Vite, Tailwind v4, shopify-buy, framer-motion
│   ├── vite.config.js                 # Vite config with React + Tailwind CSS v4 plugins
│   ├── index.html                     # HTML shell — Google Fonts, React root div
│   ├── .env                           # Client env vars (VITE_SHOPIFY_DOMAIN, etc.)
│   ├── public/
│   │   ├── assets/
│   │   │   ├── stay_tuned_logo.png    # Store logo
│   │   │   ├── hero_image.png         # Homepage hero background
│   │   │   ├── event_flier.png        # Event flier (static image — do not rebuild in HTML)
│   │   │   └── icons/
│   │   └── filler/                    # Placeholder album cover images
│   └── src/
│       ├── main.jsx                   # React entry point — BrowserRouter, imports global/layout CSS
│       ├── App.jsx                    # Root component — Header + routes (Home, Shop, About)
│       ├── shopify.js                 # Empty — Shopify Buy SDK client init
│       ├── api.js                     # Empty — fetch helpers for Express backend
│       ├── components/
│       │   └── Header.jsx             # Fixed header: logo, phone, search bar, basket/menu icons
│       ├── pages/
│       │   ├── Home.jsx               # Stub — renders "Home" div
│       │   ├── Shop.jsx               # Stub — renders "Shop" div
│       │   └── About.jsx              # Stub — renders "About Us" div
│       └── styles/
│           ├── tokens.css             # CSS custom properties: brand colors, fonts, spacing
│           ├── global.css             # CSS reset & base element styles (imports tokens.css)
│           ├── layout.css             # Mobile layout utilities (.page-container, .section, .block)
│           └── Header.css             # Header component styles: fixed positioning, search bar, icons
│
├── server/                            # Express.js API
│   ├── package.json                   # Server deps: Express, Prisma, Passport, cors, dotenv, nodemon
│   ├── .env                           # Server env vars (SESSION_SECRET, ADMIN_USERNAME, etc.)
│   ├── prisma/
│   │   ├── schema.prisma              # Prisma schema: FaqEntry, StaffPick, BannerConfig, NewsletterSubscriber
│   │   ├── dev.db                     # SQLite database file (gitignored)
│   │   └── migrations/
│   │       ├── migration_lock.toml    # Prisma migration lock (sqlite)
│   │       └── 20260224204006_init/
│   │           └── migration.sql      # Initial migration — creates all 4 tables with indexes
│   └── src/
│       ├── index.js                   # Empty — Express app entry point
│       ├── routes.js                  # Empty — Express route definitions
│       └── auth.js                    # Empty — Passport.js auth configuration
│
└── docs/
    ├── setup.md                       # Dependency rationale, env var docs, dev setup instructions
    ├── desktop_full_wireframe.png     # Desktop layout wireframe
    ├── mobile_full_wireframe.png      # Mobile layout wireframe
    ├── mobile_cart.png                # Mobile cart/basket wireframe
    └── mobile_menu.png                # Mobile navigation menu wireframe
```

No root package.json. Client and server are independent — install and run separately.

## Data Model

<!-- #TODO_HUMAN_CLAUDE: Schema exists in server/prisma/schema.prisma with an initial migration, but models haven't been finalized/reviewed. Confirm these are correct before building server endpoints. -->

Intended Prisma models:

- **FaqEntry** — question, answer, sortOrder, timestamps
- **StaffPick** — shopifyProductId, customNote, sortOrder, timestamps
- **BannerConfig** — textContent, text styling, background color, image URLs (1–3), isActive flag, timestamps
- **NewsletterSubscriber** — email (unique), subscribedAt

## Dev Commands

```bash
# Client (port 5173)
cd client && npm install
npm run dev

# Server (port 3000)
cd server && npm install
npm run dev          # uses nodemon
```

<!-- #TODO_CLAUDE: Create ESLint and Prettier configuration files. Both are installed as devDependencies in client and server but have no config files yet. -->

## Environment Variables

- Client: `client/.env` — prefix all with `VITE_` (e.g., `VITE_SHOPIFY_DOMAIN`, `VITE_API_URL`)
- Server: `server/.env` — no prefix (e.g., `SESSION_SECRET`, `ADMIN_USERNAME`, `DATABASE_URL`)

Do not hardcode env values. Do not commit `.env` files.

## Design Spec

All visual details — colors, typography, spacing, sizing, animations, interaction behavior — live in `DESIGN_SPEC.md` at project root. **Always consult the design spec before making visual decisions.**

## Conventions

- **Components**: functional components only, no class components
- **File naming**: PascalCase for components (`ShopPreview.jsx`), camelCase for utilities/hooks (`useCart.js`)
- **Exports**: named exports for components, default export only for pages
- **Styling**: Tailwind utility classes inline — do not extract to `@apply` unless explicitly asked
- **Comments**: comment non-obvious logic, skip the obvious. No boilerplate JSDoc on every function
- **State**: React Context + Shopify Buy SDK state. No Redux/Zustand unless explicitly approved

## Deployment

<!-- #TODO_HUMAN_CLAUDE: Deployment target and configuration not yet finalized. -->

- **Client**: static build (`npm run build` → `dist/`)
- **Server**: Express app
