# Architecture

## Carousels ("Just In" & "Staff Picks")

- CMS Admin Panel → store owner curates both "Just In" and "Staff Picks" lists, selecting products and ordering them → selections stored in SQLite via Prisma (product IDs + display order + which list they belong to)

- Express Backend → exposes endpoints like GET /api/shop-preview/just-in and GET /api/shop-preview/staff-picks → on request, pulls curated IDs from the database, fetches full product details from Shopify server-side, returns hydrated album card data (image URL, title, artist, price, Shopify product/variant ID for cart operations) → responses cached, cache invalidated when the store owner updates a list

- React Frontend → fetches hydrated carousel data from your backend (single request per carousel)

## Cart and Checkout

- Use Shopify Buy SDK client-side strictly for cart operations (add to cart, checkout)

## FAQ

- The store owner creates/edits/reorders FAQ entries through the CMS, those get stored in SQLite via Prisma (question text, answer text, display order), and the frontend fetches them from something like GET /api/faq.
