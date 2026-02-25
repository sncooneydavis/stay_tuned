# File Tree

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
│       │   ├── Header.jsx             # Fixed header: logo, phone, search bar, basket/menu icons
│       │   └── Hero.jsx               # Hero section: background image + animated store category buttons
│       ├── pages/
│       │   ├── Home.jsx               # Stub — renders "Home" div
│       │   ├── Shop.jsx               # Stub — renders "Shop" div
│       │   └── About.jsx              # Stub — renders "About Us" div
│       └── styles/
│           ├── tokens.css             # CSS custom properties: brand colors, fonts, spacing
│           ├── global.css             # CSS reset & base element styles (imports tokens.css)
│           ├── layout.css             # Mobile layout utilities (.page-container, .section, .block)
│           ├── Header.css             # Header component styles: fixed positioning, search bar, icons
│           └── Hero.css               # Hero styles: background image, slide-in button animation
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
