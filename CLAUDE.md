# CLAUDE.md

## Project

Stay Tuned Records — mobile-first record store website with Shopify commerce integration and an admin CMS.

## Repo Path

/Users/shannoncooney/OneDrive/repos/stay_tuned

## Stack

- **Client** (`client/`): Vite + React + React Router
- **Server** (`server/`): Express.js + Prisma (SQLite) + Passport.js
- **Commerce**: Shopify Buy SDK (client-side) + Storefront API (server-side proxy for search)
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- **Fonts**: Righteous (headings), Inter (body) — loaded via Google Fonts CDN

## Project Structure

```md
stay-tuned/
├── client/                     # Vite + React SPA
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   ├── public/
│   │   ├── filler/             # placeholder images
│   │   └── assets/
│   │       ├── logo.png
│   │       ├── event_flier.png
│   │       └── icons/          # SVGs
│   └── src/
│       ├── main.jsx            # Entry point — imports global.css + layout.css
│       ├── App.jsx
│       ├── components/
│       ├── pages/
│       ├── styles/
│       │    ├── tokens.css     # Design tokens (colors, typography, spacing)
│       │    ├── global.css     # Reset & base styles (imports tokens.css)
│       │    └── layout.css     # Mobile layout helpers (.page-container, .section, .block)
│       ├── shopify.js          # Shopify Buy SDK
│       └── api.js              # Fetch helpers for backend
├── server/                     # Express.js API
│   ├── package.json
│   ├── prisma/
│   │   └── schema.prisma
│   └── src/
│       ├── index.js
│       ├── routes.js
│       └── auth.js
├── docs/  
│   └── SETUP.md
├── CLAUDE.md
├── README.md
└── .gitignore
```

No root package.json. Client and server are independent — install and run separately.

## Dev Commands

```bash
# Client (port 5173)
cd client && npm install
npm run dev

# Server (port 3000)
cd server && npm install
npm run dev          # uses nodemon
```

## Environment Variables

- Client: `client/.env` — prefix all with `VITE_` (e.g., `VITE_SHOPIFY_DOMAIN`, `VITE_API_URL`)
- Server: `server/.env` — no prefix (e.g., `SESSION_SECRET`, `ADMIN_USERNAME`, `DATABASE_URL`)

Do not hardcode env values. Do not commit `.env` files.

## Design Spec

All visual details — colors, typography, spacing, sizing, animations, interaction behavior — live in `Design_Spec` at project root. **Always consult the design spec before making visual decisions.**

## Conventions

- **Components**: functional components only, no class components
- **File naming**: PascalCase for components (`ShopPreview.jsx`), camelCase for utilities/hooks (`useCart.js`)
- **Exports**: named exports for components, default export only for pages
- **Styling**: Tailwind utility classes inline — do not extract to `@apply` unless explicitly asked
- **Comments**: comment non-obvious logic, skip the obvious. No boilerplate JSDoc on every function
- **State**: React Context + Shopify Buy SDK state. No Redux/Zustand unless explicitly approved

## Do NOT

- Add TypeScript
- Add webpack
- Add Redux, Zustand, or any state management library
- Build the event flier (`event_flier.png`) in HTML — it is a static image asset
- Install UI component libraries (Material UI, Chakra, shadcn, etc.)
- Add a root `package.json` or workspace tooling (Turborepo, Nx, Lerna)
- Modify the design spec file

## Deployment

- **Client**: static build (`npm run build` → `dist/`) deployed to Vercel or Netlify
- **Server**: Express app deployed to Railway or Render