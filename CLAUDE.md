# CLAUDE.md

## Do

- When selecting files to read in order to get context, use the File Tree section of this document.
- If two pieces of code look alike, duplicate them. Abstractions will be introduced during dedicated refactoring periods, not during feature work.
- flag potential refactoring opportunities in comments but do not act on them
- When you make an implementation choice where a reasonable developer might have done it differently, add a brief comment in the file explaining why you chose this approach.

## Do NOT

- Extract shared utilities, helper functions, or base components from similar-looking code.
- Add TypeScript to the client (`client/`), or add webpack, Redux, Zustand, or any state management library
- Build the event flier (`event_flier.png`) in HTML — it is a static image asset
- Install UI component libraries (Material UI, Chakra, shadcn, etc.)
- Add a root `package.json` or workspace tooling (Turborepo, Nx, Lerna)
- Add SSR, ISR, or any server-side rendering framework (Next.js, Remix, React Router v7 framework mode) to the client

## Project

Stay Tuned Records — mobile-first record store website with Shopify commerce integration and an admin CMS.

### Stack

- **Client** (`client/`): Vite + React + React Router
- **Server** (`server/`): Express.js + TypeScript + Prisma (SQLite) + Passport.js
- **Commerce**: Shopify Buy SDK (client-side) + Storefront API (server-side proxy for search)
- **Styling**: Custom CSS with CSS custom properties (tokens), BEM-style class naming, and per-component `.css` files. Tailwind CSS v4 is installed via `@tailwindcss/vite` but not yet used — utilities are available but no component uses them.

### Rendering Strategy

- **Approach**: SSG shell + client-side Shopify SDK. Static pages are pre-rendered at build time; live product data loads client-side via the Shopify Buy SDK.
- **Static pages** (pre-render at build time): Home, About, FAQ — content does not change between deploys.
- **Dynamic page** (client-side data fetching): Shop — product catalog, pricing, and availability are always fetched live from Shopify.
- **Do NOT** introduce SSR, ISR, or a Node.js rendering server for the client. The Express server is an API only.

### File Tree

- Purpose: This tree allows Claude to select files to read in order to gather the appropriate, yet minimal context.
- Instructions for Claude when updating the File Tree:
  - If the purpose of the file is non-obvious and Claude will need to know its purpose to decide if the file contains relevant context for future prompts: write a short description, including only the absolute minimum information necessary.
  - If the file calls another file, the comment should include: "(Calls: {file.name})"
  - If the file is a stub, mark it as such (STUB).

stay_tuned/
├── CLAUDE.md
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
│   │   │   ├── stay_tuned_logo.png
│   │   │   ├── wood-texture.svg
│   │   │   ├── icons/                   # DO NOT LIST
│   │   │   └── images/                  # DO NOT LIST
│   │   └── filler/                    # Dev-only placeholder album art
│   └── src/
│       ├── main.jsx                   # React entry point. (Calls: App.jsx, global.css, layout.css, react-router-dom)
│       ├── App.jsx                    # Root component; manages menu and cart open/close state. (Calls: Header.jsx, Menu.jsx, CartDropdown.jsx, Home.jsx, Shop.jsx, About.jsx, react-router-dom)
│       ├── shopify.js                 # STUB — Shopify Buy SDK client init.
│       ├── api.js                     # STUB — fetch helpers for Express backend.
│       ├── components/
│       │   ├── Header.jsx             # Accepts onMenuClick and onCartClick props. (Calls: Header.css)
│       │   ├── Menu.jsx               # Slide-down nav overlay: Home, Shop, FAQ, Our Story. Highlights active route. (Calls: react-router-dom, Menu.css)
│       │   ├── Hero.jsx               # Hero image with category link buttons linking to /shop. (Calls: react-router-dom, Hero.css)
│       │   ├── Carousel.jsx           # Horizontal scrolling product carousel with scroll-in animation. (Calls: CarouselItem.jsx, Carousel.css)
│       │   ├── CarouselItem.jsx       # Album card: image, title, price, add-to-cart button. (Calls: CarouselItem.css)
│       │   ├── Event.jsx              # Displays the event_flier.png static image. (Calls: Event.css)
│       │   ├── Faq.jsx                # FAQ accordion: manages open state, close-on-click-outside, close-on-scroll. (Calls: FaqItem.jsx, Faq.css)
│       │   ├── FaqItem.jsx            # FAQ row: question button + expand/collapse answer card. (Calls: FaqItem.css)
│       │   ├── Newsletter.jsx         # Email signup: validates email pattern, shows green submit arrow on valid input. (Calls: Newsletter.css)
│       │   ├── Footer.jsx            # Store info: hours, social links, address (Google Maps), email. (Calls: Footer.css)
│       │   ├── ShopFilter.jsx        # Filter dropdown: green button with funnel icon + active label; click opens sliding menu of filter options. (Calls: ShopFilter.css)
│       │   ├── ShopSorter.jsx        # Sort dropdown: green button with sort icon + active label; click opens sliding menu of sort options. (Calls: ShopSorter.css)
│       │   ├── ShopPagination.jsx   # Page nav: Back/Page X of Y/Next buttons; click page indicator to type a page number. (Calls: ShopPagination.css)
│       │   ├── CartItem.jsx         # Cart row: 110x110 album image, artist/album/price text, quantity counter (beige 120x40 box). (Calls: CartItem.css)
│       │   ├── CartPrice.jsx        # Cart price summary: subtotal/tax/shipping/total grid + Checkout button. (Calls: CartPrice.css)
│       │   └── CartDropdown.jsx     # Slide-down cart panel: beige icon, scrollable item-list, sticky price block; empty state links to /shop. (Calls: CartItem.jsx, CartPrice.jsx, react-router-dom, CartDropdown.css)
│       ├── pages/
│       │   ├── Home.jsx               # (Calls: Hero.jsx, Event.jsx, Carousel.jsx, Faq.jsx, Newsletter.jsx, Footer.jsx)
│       │   ├── Shop.jsx               # Product grid page: title, filter/sort controls, 2-col CarouselItem grid, pagination. (Calls: CarouselItem.jsx, ShopFilter.jsx, ShopSorter.jsx, ShopPagination.jsx, Footer.jsx, Shop.css)
│       │   └── About.jsx              # Scrapbook-style "Our Story" page with flexbox sections. (Calls: Footer.jsx, About.css, layout.css)
│       └── styles/
│           ├── tokens.css             # CSS custom properties: brand colors, fonts, spacing
│           ├── global.css             # CSS reset & base element styles. (Calls: tokens.css)
│           ├── layout.css             # Mobile layout utilities
│           ├── Header.css
│           ├── Menu.css
│           ├── Hero.css
│           ├── Carousel.css
│           ├── CarouselItem.css
│           ├── Event.css
│           ├── Faq.css
│           ├── FaqItem.css
│           ├── Newsletter.css
│           ├── Footer.css
│           ├── About.css              # Scrapbook layout: flexbox sections with one relative/absolute overlay for "Hey there!" text
│           ├── Shop.css
│           ├── ShopFilter.css
│           ├── ShopSorter.css
│           ├── ShopPagination.css
│           ├── CartItem.css
│           ├── CartPrice.css
│           └── CartDropdown.css
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

## Conventions

- **Exports**: named exports for components, default export only for pages
- **Styling**: Custom CSS in per-component `.css` files using BEM-style class names and CSS custom properties from `tokens.css`. Tailwind is installed but unused; if Tailwind classes are introduced, keep them inline and do not extract to `@apply`
- **Responsiveness**: use `clamp()` with `dvw`/`dvh` units for fluid sizing. No media queries in the codebase — don't introduce them.
- **Animations**: use `grid-template-rows: 0fr → 1fr` transition for expand/collapse (not `max-height`). Use `IntersectionObserver` for scroll-triggered animations; add an animated class when the element enters the viewport, disconnect the observer after first trigger.
- **Icons**: inline SVGs with `fill="currentColor"` — preferred over `<img>` so color is controllable via CSS. Decorative SVGs get `aria-hidden="true"`.
- **Buttons**: always set `type="button"` on buttons that are not form submits, to prevent accidental form submission.
- **Static data**: define as `UPPER_CASE` constants at the top of the file that uses them (not in a separate file).
- **Import order**: React hooks → React Router → third-party → local components → CSS (always last).
- **Scroll root**: the page scroll container is `.body-container` (a div in `App.jsx`), not `window`. `IntersectionObserver` instances and scroll event listeners that need to track page scroll should target this element, not `window`.
- **Click-outside**: use a `useRef` on the container + `mousedown` listener on `document`, added/removed based on open state.
- **State**: React Context + Shopify Buy SDK state
- **Languages**: JavaScript for the client (`client/`); TypeScript for the server (`server/`) and CMS
