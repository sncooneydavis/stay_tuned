# Environment

## Client Dependencies

**Core:** `react`, `react-dom`, `react-router-dom` — SPA framework with client-side routing for Home, Shop, About Us, and admin pages.

**Build:** `vite`, `@vitejs/plugin-react` — dev server and bundler. No webpack needed.

**Styling:** `tailwindcss`, `@tailwindcss/vite` — Tailwind v4 uses a Vite plugin directly instead of PostCSS config. Custom theme (colors, fonts, spacing from the design spec) gets defined in `index.css` via `@theme`.

**Fonts:** Google Fonts loaded via `<link>` in `index.html` — Righteous for headings, Inter for body. No npm package needed.

**Commerce:** `shopify-buy` — the Shopify Buy SDK. This handles creating a checkout client, fetching products/collections, managing a cart in memory, and redirecting to Shopify's hosted checkout. The cart state persists across page loads via the SDK's built-in `localStorage` checkout ID.

**Animations:** `framer-motion` — for the scroll-triggered slide-in animations on the hero buttons and shop preview cards, the slide-from-right drawer transitions on basket/menu, and the FAQ accordion expand/collapse.

**Dev:** `eslint`, `prettier` — code quality.

## Server Dependencies

**Core:** `express`, `cors`, `dotenv` — API server.

**Auth:** `passport`, `passport-local`, `express-session` — single admin account using local strategy. Session stored server-side. Credentials come from environment variables.

**Database:** `prisma`, `@prisma/client` — ORM for SQLite. Models needed:

- **FaqEntry** — question, answer, sort order (for the accordion)
- **StaffPick** — Shopify product ID reference, optional custom note, sort order
- **BannerConfig** — text content, text styling (color/size per segment), background color, image URLs (1–3), active/inactive flag
- **NewsletterSubscriber** — email, subscribed date (even if you forward to Klaviyo, having a local record is good practice)

**Newsletter:** TODO: later

**Dev:** `nodemon` — auto-restart on file changes during development.

## Environment Variables

**Client** (`.env` in `client/`, prefixed with `VITE_` so Vite exposes them to the browser):

- `VITE_SHOPIFY_DOMAIN` — the store's `.myshopify.com` domain
- `VITE_SHOPIFY_STOREFRONT_TOKEN` — Storefront API access token (this is a public token, safe for the client)
- `VITE_API_URL` — your Express backend URL (e.g., `http://localhost:3000` in dev, the Railway/Render URL in production)

**Server** (`.env` in `server/`):

- `ADMIN_USERNAME` / `ADMIN_PASSWORD` — for Passport local auth
- `SESSION_SECRET` — for express-session
- `DATABASE_URL` — Prisma connection string (`file:./dev.db` for SQLite)
- `CLIENT_URL` — for CORS allowlist
- `SHOPIFY_STOREFRONT_TOKEN` — if the server needs to proxy Shopify requests (for search autocomplete)
