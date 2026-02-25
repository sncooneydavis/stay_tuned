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

- `.page-container` — applies `var(--page-padding)`, `padding-top: 12px`, vertical scroll-snap (`scroll-snap-type: y mandatory`)
- `.section` — `scroll-snap-align: start`, `min-height: fit-content`; sections stack vertically within `.page-container`
- `.block` — `border: var(--block-border)`, `border-radius: var(--block-radius)`; blocks stack vertically within sections
- Header block fixed at top (implemented per-component, not in layout.css)

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

## Header

### layout

- fixed at top
- padding: `24px 24px 12px 24px`
- height: `160px`
- space between logo and search bar: `var(--gap-md)` (12px)

### components

- search
  - on focus: "search our catalog" placeholder text disappears
  - on text input (TODO_LATER):
    - auto suggestions box drops down (animated) and is populated from catalog via Shopify API
    - when any suggestion is clicked on, "shop" page is opened for that product
  - "search our catalog" text
    - italic
    - text weight: light
    - opacity: 50%
  - user inputted text
    - normal (not italic)
    - text weight: light
- utilities
  - centered vertically in space between search bar and top of container
  - basket_green.svg (TODO_LATER: add functionality)
    - on click:
      - icon turns 50% lighter in color
      - open basket
        - transition: basket card slides down from top of page
        - see ./docs/mobile_cart.png
    - on second click (anywhere not on the basket dropdown):
      - icon returns to normal color
      - close basket
        - transition: slide up off of page
  - menu_green.svg
    - on click:
      - icon turns 50% lighter in color
      - open menu
        - transition: menu card slides down from top of page
        - see ./docs/mobile_cart.png
    - on second click (anywhere not on the menu dropdown):
      - icon returns to normal color
      - close menu
        - transition: slide up off of page
  - phone number text
    - on click:
      - text turns 50% lighter in color, pause 1 seconds, returns to normal color
      - call number
    - text weight: medium

## Home Page

### Section 1

height: 50dvh minus header height
hero and event flier cards each get half that space

#### Hero

- store buttons
  - total gap between each button: 24px
  - align left
  - text color: custom_green
  - border_radius: 10px on right; 0px on left
  - color: custom_beige
  - buttons 24px larger than the text they contain
  - 2 second transition on page_load:
    - buttons appear
    - buttons move from 50% to the left of their final position to their final position

#### Event Flier

- height: 50% of the remaining space of the viewport
- this is an image (event_flier.png) that will be uploaded to the `assets` folder -- do not attempt to create this component in HTML

### Section 2

#### Shop Preview

- 2 second transition when user scrolls to the Shop Preview section for the first time:
  - content of shop cards appears
  - content of shop cards moves from 50% to the left of its final position to its final position
- shop cards ("just in" and "staff picks")
  - card background color is white and has no border
  - each has a height of 50% of the remaining space of the viewport (minus header and padding)
  - padding: 24px 0px 24px 24px
  - border radius: 15px
- on horizontal scroll: other album cards populate the shop card (carousel effect)
- Card title ("just in" and "staff picks") + "view all -->" text together form a button
  - when clicked, Shop page opens with the relevant category selected (HUMAN_TODO: design shop page)
- "add to cart" buttons - when clicked:
  - that album is added to the user's cart
  - small custom_green counter added on top of the basket icon in the header  
- line under card title
  - color: custom_brown
  - weight: 5px
  - left point: rounded
  - right point: no effect
- album cards
  - gap between album cards: 36px
  - gap between album card content (image, text, button): 12px
  - "add to cart" buttons
    - font: Righteous, 18pt
    - font_color: white
    - width: 100% album card width
  - album images: 25dvw (square aspect ratio)

### Section 3

#### FAQ

- padding: 24px
- font_color: white
- plus signs
  - font_size: 34
  - font_weight: extra light
- lines
  - weight: 0.7px
- each section of text and plus sign forms a button that when clicked, results in:
  - all previously open cards closing (minus sign reverts to plus sign)
  - plus sign of selected card becoming minus sign
  - hidden card appearing with the question's answer

#### Newsletter

- padding: 24px
- "stay tuned to our newsletter" text
  - font_size: 24pt
  - font_color: white
- "email" text
  - font_style: light italic
- when text box clicked, 'email' text disappears for user to enter text
- when email provided (must end in '@' + text + '.com/.org/.edu/etc.') - arrow icon appears
  - when arrow icon clicked:
    - email is sent to server
    - user text disappears
    - "You're signed up!" text appears (light italic)

#### Footer

- "Hours", "Follow us", "Email" text - bold
- Day and time text - 16pt
- Day and location text - semi-bold
- when clicked, facebook and instagram icons open Stay Tuned social media
- when clicked, location icon/address opens Stay Tuned in google maps
- when clicked email icon opens default email provider with <staytunedrecordsfl@gmail.com> as recipient
