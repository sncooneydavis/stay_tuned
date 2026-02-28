# CLAUDE.md

## Do

- When selecting files to read in order to get context, use the File Tree section of this document.
- When you encounter ambiguity of user intent, ask clarifying questions before writing code.
- If two pieces of code look alike, duplicate them. Abstractions will be introduced during dedicated refactoring periods, not during feature work.
- When you make an implementation choice where a reasonable developer might have done it differently, add a brief comment explaining why you chose this approach.

## Do NOT

- Extract shared utilities, helper functions, or base components from similar-looking code.
- Add TypeScript, webpack, Redux, Zustand, or any state management library
- Build the event flier (`event_flier.png`) in HTML — it is a static image asset
- Install UI component libraries (Material UI, Chakra, shadcn, etc.)
- Add a root `package.json` or workspace tooling (Turborepo, Nx, Lerna)

## Project

Stay Tuned Records — mobile-first record store website with Shopify commerce integration and an admin CMS.

### Stack

- **Client** (`client/`): Vite + React + React Router
- **Server** (`server/`): Express.js + Prisma (SQLite) + Passport.js
- **Commerce**: Shopify Buy SDK (client-side) + Storefront API (server-side proxy for search)
- **Styling**: Tailwind CSS v4 installed via `@tailwindcss/vite`; currently using CSS custom properties and layout utility classes. Tailwind utilities available for use as components are built.

### File Tree

- Purpose: This tree allows Claude to select files to read in order to gather the appropriate, yet minimal context.
- Instructions for Claude when updating the File Tree:
  - If the purpose of the file is non-obvious, comment should include a minimal description. Only include the absolute minimum information needed for Claude to decide if that file contains relevant context for future prompts.
  - If the file calls another file, the comment should include: "(Calls: {file.name})"
  - If the file is a stub, mark it as such (STUB).

stay_tuned/
├── CLAUDE.md
├── ARCHITECTURE.md                    # Intended data flow for carousels, cart, and FAQ
├── TODO.md                            # Outstanding tasks for Shannon and Claude
├── README.md
├── .gitignore
│
├── client/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   ├── .env
│   ├── public/
│   │   ├── assets/
│   │   │   ├── event_flier.png
│   │   │   ├── hero_image.png
│   │   │   ├── stay_tuned_logo.png
│   │   │   └── icons/
│   │   └── filler/                    # Dev-only placeholder album art
│   └── src/
│       ├── main.jsx                   # React entry point. (Calls: App.jsx, global.css, layout.css)
│       ├── App.jsx                    # Root component. (Calls: Header.jsx, Home.jsx, Shop.jsx, About.jsx)
│       ├── shopify.js                 # STUB — Shopify Buy SDK client init.
│       ├── api.js                     # STUB — fetch helpers for Express backend.
│       ├── components/
│       │   ├── Header.jsx
│       │   ├── Hero.jsx               # Hero image with category link buttons linking to /shop. (Calls: react-router-dom)
│       │   ├── Carousel.jsx           # Horizontal scrolling product carousel with scroll-in animation. (Calls: CarouselItem.jsx)
│       │   ├── CarouselItem.jsx       # Album card: image, title, price, add-to-cart button.
│       │   ├── Event.jsx              # Displays the event_flier.png static image.
│       │   ├── Faq.jsx                # FAQ accordion: manages open state, close-on-click-outside, close-on-scroll. (Calls: FaqItem.jsx)
│       │   └── FaqItem.jsx            # FAQ row: question button + expand/collapse answer card.
│       ├── pages/
│       │   ├── Home.jsx               # (Calls: Hero.jsx, Event.jsx, Carousel.jsx, Faq.jsx)
│       │   ├── Shop.jsx               # STUB
│       │   └── About.jsx              # STUB
│       └── styles/
│           ├── tokens.css             # CSS custom properties: brand colors, fonts, spacing
│           ├── global.css             # CSS reset & base element styles. (Calls: tokens.css)
│           ├── layout.css             # Mobile layout utilities
│           ├── Header.css
│           ├── Hero.css
│           ├── Carousel.css
│           ├── CarouselItem.css
│           ├── Event.css
│           ├── Faq.css
│           └── FaqItem.css
│
├── server/                            # Express.js API
│   ├── package.json
│   ├── .env
│   ├── prisma/
│   │   ├── schema.prisma
│   │   ├── dev.db                     # SQLite database file (gitignored)
│   │   └── migrations/
│   │       ├── migration_lock.toml
│   │       └── 20260224204006_init/
│   │           └── migration.sql
│   └── src/
│       ├── index.js                   # STUB
│       ├── routes.js                  # STUB
│       └── auth.js                    # STUB
│
└── docs/
    ├── setup.md                       # Dependency rationale, env var docs, dev setup instructions
    ├── desktop_full_wireframe.png     # Desktop layout wireframe
    ├── mobile_full_wireframe.png      # Mobile layout wireframe
    ├── mobile_cart.png                # Mobile cart/basket wireframe
    └── mobile_menu.png                # Mobile navigation menu wireframe

No root package.json. Client and server are independent — install and run separately.

### Environment Variables

- Client: `client/.env` — prefix all with `VITE_` (e.g., `VITE_SHOPIFY_DOMAIN`, `VITE_API_URL`)
- Server: `server/.env` — no prefix (e.g., `SESSION_SECRET`, `ADMIN_USERNAME`, `DATABASE_URL`)

Do not hardcode env values. Do not commit `.env` files.

## Conventions

- **Components**: functional components only, no class components
- **File naming**: PascalCase for components (`ShopPreview.jsx`), camelCase for utilities/hooks (`useCart.js`)
- **Exports**: named exports for components, default export only for pages
- **Styling**: Tailwind utility classes inline — do not extract to `@apply` unless explicitly asked
- **Comments**: comment non-obvious logic, skip the obvious. No boilerplate JSDoc on every function
- **State**: React Context + Shopify Buy SDK state. No Redux/Zustand unless explicitly approved
