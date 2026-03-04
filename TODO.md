# TODOs

## Shannon + Claude

- Deployment target and configuration not yet finalized.
- Schema exists in server/prisma/schema.prisma with an initial migration, but models haven't been finalized/reviewed. Confirm these are correct before building server endpoints.
  Intended Prisma models:

  - **FaqEntry** — question, answer, sortOrder, timestamps
  - **StaffPick** — shopifyProductId, customNote, sortOrder, timestamps
  - **BannerConfig** — textContent, text styling, background color, image URLs (1–3), isActive flag, timestamps
  - **NewsletterSubscriber** — email (unique), subscribedAt
- Design the API proxy pattern. Intended flow: client → Express server → Shopify Storefront API (for search/autocomplete). Needs decision on endpoint structure, caching, and error handling.

## Claude

- Create ESLint and Prettier configuration files. Both are installed as devDependencies in client and server but have no config files yet.

## Shannon
