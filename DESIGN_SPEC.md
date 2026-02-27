# Style Foundation

## Pages

- Home (Contents of this Doc)
- Shop
- About Us

## Colors

Defined as CSS custom properties in `src/styles/tokens.css`:

| Token              | Variable           | Value     |
| ------------------ | ------------------ | --------- |
| Orange             | `--color-orange`   | `#E49128` |
| Beige              | `--color-beige`    | `#F0E6D8` |
| Green              | `--color-green`    | `#015A4E` |
| Brown              | `--color-brown`    | `#524128` |
| Red                | `--color-red`      | `#D85E00` |
| White              | `--color-white`    | `#FFFFFF` |

## Typography

Defined as CSS custom properties in `src/styles/tokens.css`. Base styles applied in `src/styles/global.css`.

All text centered vertically within text boxes unless otherwise indicated.

| Token            | Variable           | Value                      |
| ---------------- | ------------------ | -------------------------- |
| Heading font     | `--font-heading`   | `'Righteous', cursive`     |
| Body font        | `--font-body`      | `'Inter', sans-serif`      |
| Heading size     | `--heading-size`   | `28px`                     |
| Body size        | `--body-size`      | `18px`                     |
| Text color       | `--text-color`     | `var(--color-brown)`       |

**Global base styles** (`global.css`):
- `body` — margin 0, font-family `var(--font-body)`, font-size `var(--body-size)`, color `var(--text-color)`
- `h1`–`h6` — font-family `var(--font-heading)`, font-size `var(--heading-size)`, color `var(--text-color)`
- All elements — `box-sizing: border-box`
- `html` — `scroll-behavior: smooth`
- `button`, `input`, `select`, `textarea` — reset (no border/background, inherit font & color)

## Spacing

Defined as CSS custom properties in `src/styles/tokens.css`:

| Token            | Variable           | Value                              |
| ---------------- | ------------------ | ---------------------------------- |
| Page padding     | `--page-padding`   | `12px 12px 24px 12px`             |
| Block border     | `--block-border`   | `12px solid var(--color-beige)`    |
| Block radius     | `--block-radius`   | `10px`                             |
| Card radius      | `--card-radius`    | `15px`                             |
| Gap (small)      | `--gap-sm`         | `6px`                              |
| Gap (medium)     | `--gap-md`         | `12px`                             |
| Gap (large)      | `--gap-lg`         | `24px`                             |

## Layout

Layout utility classes defined in `src/styles/layout.css`.

### Media Query: Mobile

**Structure**: Header (fixed) + body-container (scrollable remainder).

- **Header** — `position: fixed; top: 0`; always anchored to the top of the viewport. Body-container must account for header height with `padding-top` or equivalent offset.
- **`.body-container`** — fills remaining viewport height below the header (`height: calc(100vh - [header height])`); vertical scroll-snap container (`scroll-snap-type: y mandatory; overflow-y: scroll`).
- **`.section`** — `scroll-snap-align: start; height: 100%`; each section fills the full body-container height. Three sections on Home:
  - **Section 1** — Hero + Event: each component takes 50% of the section height.
  - **Section 2** — Just In + Staff Picks: each component takes 50% of the section height.
  - **Section 3** — FAQ + Newsletter + Footer: section fills 100% of body-container; individual components are `fit-content` and stack vertically.
- **`.block`** — `border: var(--block-border)`, `border-radius: var(--block-radius)`; blocks stack vertically within sections.

### Media Query: Desktop/Tablet

--> do later

## Style Files

| File                     | Purpose                                                          |
| ------------------------ | ---------------------------------------------------------------- |
| `src/styles/tokens.css`  | CSS custom properties (colors, typography, spacing)              |
| `src/styles/global.css`  | Reset & base styles (imports tokens.css)                         |
| `src/styles/layout.css`  | Mobile layout utilities (`.page-container`, `.section`, `.block`) |
| `src/styles/Header.css`  | Header component styles (fixed positioning, search bar, icons)   |

Import chain: `main.jsx` imports `global.css` (which imports `tokens.css`) and `layout.css`. Component CSS imported per-component (e.g. `Header.jsx` imports `Header.css`).
