# Purpose Source website prototype

A clickable prototype of a calmer, more document-like purposesource.org, for discussing the
menu, the page templates and the tone. **It is not the Purpose Source website.** Nothing here
is binding; made-up records carry a brass "Sample" label; legal texts are links to the live
site, never copies. The live site is https://purposesource.org.

It applies a study of the site that opensource.org runs: take its habits (governance, money and
records one click from the header; dated, versioned documents; a calm voice), not its look.
On 2026-10-29 its look was softened along six points (see **Design direction** below). Every
page has a **Why this page** button at the bottom right that names the study's
recommendations and the design-direction points the page shows.

## Open it

- **Double-click `index.html`.** Every link and file path is relative, so it works straight
  from the folder.
- **Or run a small local server** in this folder and open http://localhost:8000/ :

  ```sh
  python -m http.server 8000
  ```

- **Or open the published copy** (GitHub Pages), if you were sent its address.

No build step, no framework, no package to install, nothing loaded from other websites.

## How the files are organised

```
index.html, license.html, …   one file per page (41 pages)
404.html                      the not-found page (the host serves it for missing addresses)
assets/site.css               the only stylesheet; design tokens at the top, motion at the end
assets/layout.js              the header menu and the footer, defined once; theme switch;
                              copy icons; the "Why this page" panel; accordions that open
                              when a link points at them; sections rising into view
assets/registry.js            search, filters and sorting on registry.html only
assets/fonts/                 Source Serif 4 and Inter (woff2) and their OFL licences
assets/brand/                 the Purpose Source mark (light and dark) and the favicon
robots.txt, .nojekyll         keep crawlers out; tell GitHub Pages to serve files as they are
```

The drawings are inline `<svg>` in the pages that show them (no image files), so they can use
the colour tokens and follow light and dark mode.

**File names follow the real site's addresses**, with slashes turned into dashes:
`/for/companies/check` is `for-companies-check.html`, `/trust/money` is `trust-money.html`,
`/` is `index.html`. Typing a real-site address after the prototype's address lands on the
not-found page, which suggests the matching file.

`learn.html` ("All pages") lists every page, grouped like the menu. Pages marked "Short" there
are brief stand-ins.

## Where to change things

- **Colours, type sizes, spacing, widths:** the top of `assets/site.css`. Each colour is one line
  with its light and dark value side by side: `light-dark(#3d6a47, #9fc5a7)`. The drawings'
  colours are the `--ill-*` tokens; the paper grain is `--grain`.
- **Motion:** section 8 of `assets/site.css` (page transitions, the rise into view, menus and
  accordions) and `wireReveal` in `assets/layout.js`. Everything there is switched off for
  visitors who ask for reduced motion.
- **The menu:** `MENU` near the top of `assets/layout.js`. Six items; each has a purpose line,
  two columns of links and one featured link. A plain file name is a prototype page; an address
  starting with `LIVE` opens the live site and gets a small arrow.
- **The footer:** `FOOTER` in the same file.
- **The "Improve this page" link** at the end of each page: on a GitHub Pages project site
  (`owner.github.io/repo/`) it finds the page's file in the repository by itself. On any other
  address it shows only once `SOURCE` in `assets/layout.js` names the repository, for example
  `https://github.com/owner/repo/blob/HEAD/`.
- **A page's text:** the page's own HTML file. The header and footer are drawn by the script, so
  a page holds only its title block, its content and its "Why this page" notes.
- **An accordion:** `<details class="more"><summary>…</summary><div>…</div></details>`; several
  in a row go in `<div class="acc-group">`. A short faint note at the right of the title is
  `<span class="acc-note">`. Give the `<details>` an `id` if a link should open it.
- **A sage band behind a section:** add `band` to its `class` (`<section class="sec band">`).

### Adding a page

1. Copy a page close to what you need (a short one: `waivers.html`; a long one: `trust-money.html`).
2. Change `<title>`, the `meta description`, `data-section` on `<body>` (one of `licence`,
   `adopt`, `companies`, `registry`, `money`, `about`; it underlines the menu item), the
   breadcrumb, the H1, the summary and the metadata line.
3. Replace the content inside `<div class="content">`.
4. Update the notes in `<aside class="why">` at the end.
5. Link it from `MENU` or `FOOTER` in `assets/layout.js`, and from `learn.html`.

The `<noscript>` blocks in each page are the fallback when JavaScript is off: a short list of
the six sections and the legal links. They rarely need changing.

## Design direction (2026-10-29)

The operator asked for a calmer, warmer prototype, in six points. How each one is applied:

1. **Air out the space**: generous room between blocks of text, images and sections, so the
   page rests and feels less loaded. Sections are 72 px apart with 40 px from their hairline to
   the heading (48 and 28 px on phones); side margins are 40 px from 1100 px wide (20 px on
   phones); text keeps a reading column of 600 px, about 70 characters of the serif; paragraphs
   are 20 px apart; the title block, the menu panels and the footer got more room too. Calm,
   not empty: no giant hero and no spacer bands.
2. **Friendly typography, at most two families**: Source Serif 4, a classic warm serif, for
   headings and running text; Inter only for small interface text (the menu, buttons, labels,
   metadata lines, breadcrumbs, captions, tables and the footer). JetBrains Mono is gone, with
   its font file and licence; identifiers and hashes are set in Inter with tabular figures, a
   slashed zero and a little letter-spacing (the class `ident`).
3. **Humanise the images**: no photographs (we have none of our own, and stock photos of
   strangers would not be us). Instead, hand-drawn-style drawings in the manner of the live
   site's home drawing (a soft wash, the green line, leaf and clay fills, faces as plain
   circles): a maintainer at a laptop, a small office, two hands holding a seedling, an open
   book for the licence, a ledger book, people at work together. They replace the numbered
   step boxes of "How the money flows" on the home page and sit beside the title blocks of the
   main pages; "The path of a fee" and the five steps of adoption lost their boxed numbers for
   soft dots on a dotted path. A faint paper grain, drawn by the browser from an SVG noise (no
   image file), lies on the sage bands. Every drawing is decoration: hidden from screen
   readers, coloured by the `--ill-*` tokens so it follows light and dark mode, never needed to
   understand a page.
4. **Keep the visual structure clean**: the home page shows only the essentials (what it is,
   three doors, who pays, how the money flows in plain words, the latest news); the counters,
   the five records anyone can open and the comparison table are one click away under "Look
   closer". On the main pages the technical detail moved into native `<details>` accordions:
   the licence's identifier and SHA-256, its files and identifiers, changes and list of
   sections ("For the record"), the four-year clock's worked example; how the Pass shares a
   fee; the purchasing email's text; the sample pull request's file list and licence check;
   the ledger's sample month and its six rules. Nothing was removed, and a link that points at
   an accordion (the menu's "Files and identifiers") opens it.
5. **Soften the colour palette**: away from hard code-like contrasts. Light mode keeps white
   surfaces (cream was declined earlier) with deep warm grey text (`#2f2d29` instead of
   near-black), a softer, slightly warmer green (`#3d6a47`), very light sage tints for
   alternating sections (`#f3f6f0`), softer hairlines and 8 to 12 px corners (pills only for
   chips and small controls). Dark mode: a deep slate-green ground (`#222c28`) instead of
   near-black, warm off-white text (`#ebe6da`) and a muted green (`#9fc5a7`). Every text pair
   meets WCAG AA; the measurements are below.
6. **Fluid micro-interactions**: pages of the site cross-fade instead of jumping (CSS
   cross-document view transitions: the header stays put and the title block rises in, in
   browsers that support them); links to a part of a page scroll smoothly; sections below the
   first screen fade and rise a little as you reach them; menus, panels and accordions open
   with a short fade or slide; hovers and presses take 150 to 250 ms. All of it is off when the
   visitor asks for reduced motion. Only the script ever hides a section, and only until it is
   reached, so with JavaScript off, or when printing, every section is simply there.

### Contrast, measured

WCAG 2.x contrast of every text and control pair the stylesheet uses (text needs 4.5:1, focus
rings and control borders 3:1). Hairlines and the drawings are decorative.

| Text or line | on | Light | Dark | Needs | Used for |
|---|---|---|---|---|---|
| `ink` | `bg` | 13.74:1 (#2f2d29 on #ffffff) | 11.56:1 (#ebe6da on #222c28) | 4.5:1 | body text, headings |
| `ink` | `tint` | 12.60:1 (#2f2d29 on #f3f6f0) | 10.79:1 (#ebe6da on #27312d) | 4.5:1 | text on sage bands and door cards |
| `ink` | `surface-subtle` | 12.60:1 (#2f2d29 on #f3f6f0) | 9.95:1 (#ebe6da on #2b3732) | 4.5:1 | table heads, document header |
| `ink` | `accent-soft` | 12.17:1 (#2f2d29 on #ecf3ec) | 8.86:1 (#ebe6da on #2e4036) | 4.5:1 | notice text |
| `ink-muted` | `bg` | 7.21:1 (#5a574f on #ffffff) | 7.68:1 (#c2bdb0 on #222c28) | 4.5:1 | summaries, notes, breadcrumb |
| `ink-muted` | `tint` | 6.61:1 (#5a574f on #f3f6f0) | 7.16:1 (#c2bdb0 on #27312d) | 4.5:1 | notes on sage bands, door labels |
| `ink-muted` | `surface-subtle` | 6.61:1 (#5a574f on #f3f6f0) | 6.61:1 (#c2bdb0 on #2b3732) | 4.5:1 | document header, framed heads |
| `ink-faint` | `bg` | 5.63:1 (#6b675e on #ffffff) | 5.71:1 (#a7a397 on #222c28) | 4.5:1 | metadata lines, captions, dates |
| `ink-faint` | `tint` | 5.17:1 (#6b675e on #f3f6f0) | 5.33:1 (#a7a397 on #27312d) | 4.5:1 | captions on sage bands |
| `ink-faint` | `surface-subtle` | 5.17:1 (#6b675e on #f3f6f0) | 4.91:1 (#a7a397 on #2b3732) | 4.5:1 | captions on table heads |
| `accent` | `bg` | 6.27:1 (#3d6a47 on #ffffff) | 7.55:1 (#9fc5a7 on #222c28) | 4.5:1 | links |
| `accent` | `tint` | 5.74:1 (#3d6a47 on #f3f6f0) | 7.05:1 (#9fc5a7 on #27312d) | 4.5:1 | links on sage bands and cards |
| `accent` | `accent-soft` | 5.55:1 (#3d6a47 on #ecf3ec) | 5.79:1 (#9fc5a7 on #2e4036) | 4.5:1 | links in notices, "Registered" chip, step numbers |
| `accent` | `surface-subtle` | 5.74:1 (#3d6a47 on #f3f6f0) | 6.50:1 (#9fc5a7 on #2b3732) | 4.5:1 | "Identifier and SHA-256" in the document header |
| `ink-muted` | `accent-soft` | 6.39:1 (#5a574f on #ecf3ec) | 5.89:1 (#c2bdb0 on #2e4036) | 4.5:1 | door labels when a door is hovered |
| `accent-hover` | `bg` | 7.94:1 (#2f5a3b on #ffffff) | 8.92:1 (#b5d3bc on #222c28) | 4.5:1 | links on hover |
| `accent-ink` | `accent` | 6.27:1 (#ffffff on #3d6a47) | 8.16:1 (#1c2622 on #9fc5a7) | 4.5:1 | the button, pressed theme switch, current filter |
| `accent-ink` | `accent-hover` | 7.94:1 (#ffffff on #2f5a3b) | 9.64:1 (#1c2622 on #b5d3bc) | 4.5:1 | the button on hover |
| `seal` | `seal-soft` | 5.60:1 (#7a5a17 on #f7f0df) | 8.12:1 (#dcc08a on #2f2a1f) | 4.5:1 | prototype banner, "Sample" chips, "Why this page" |
| `seal` | `bg` | 6.36:1 (#7a5a17 on #ffffff) | 8.19:1 (#dcc08a on #222c28) | 4.5:1 | placeholders, Verify seal |
| `bg` | `seal` | 6.36:1 (#ffffff on #7a5a17) | 8.19:1 (#222c28 on #dcc08a) | 4.5:1 | "Why this page" when open |
| `warn` | `bg` | 7.26:1 (#7a4d06 on #ffffff) | 7.64:1 (#e0b769 on #222c28) | 4.5:1 | status |
| `bad` | `bg` | 9.14:1 (#8a1f1f on #ffffff) | 6.50:1 (#e79a9a on #222c28) | 4.5:1 | status |
| `focus` | `bg` | 8.38:1 (#0f4f8a on #ffffff) | 7.63:1 (#8ec2f0 on #222c28) | 3:1 | focus ring |
| `control-border` | `bg` | 3.79:1 (#878378 on #ffffff) | 4.11:1 (#808c84 on #222c28) | 3:1 | inputs, chips, outline buttons |
| `control-border` | `tint` | 3.47:1 (#878378 on #f3f6f0) | 3.84:1 (#808c84 on #27312d) | 3:1 | controls on sage bands |
| `control-border` | `surface-subtle` | 3.47:1 (#878378 on #f3f6f0) | 3.54:1 (#808c84 on #2b3732) | 3:1 | disabled input on the subtle ground |

## The rules this prototype keeps

From the study, the real site's rules and the design direction; please keep them when you
change things.

**Look**

- White surfaces with sage tints for alternating sections; one soft green for links and the
  one button; brass only for verification and "Sample" labels.
- No coloured bar along the top of a card; no empty bands or spacer blocks: a sage band always
  holds a section.
- Links with a small icon instead of big buttons; at most one button per screen.
- Copy icons instead of "Copy" buttons.
- No label that repeats what is already shown.
- Two type families: Source Serif 4 for headings and running text, Inter for interface text.
  One H1 size on every page except the home page.
- A 64 px header; the title block stays compact.
- Technical detail one click away in an accordion; never removed.
- Drawings, never photographs; they decorate and never carry information.
- Motion stays gentle, never starts by itself, and is off with reduced motion.

**Words**

- British English (licence, organisation). The product's name keeps its spelling: Purpose
  Source License.
- The title says what the page is; the first sentence is the answer.
- "We" explains, "the Association" binds, "you" is the reader.
- Every fact has its date or status. Where nothing exists yet, show "—" and the event that will
  create it. Never invent a number, a price, a date, a person or a status; never round up.
- The pledge appears only in its one wording, whole (see `trust-money.html`).
- Purpose Source is source-available. Never describe it with the predecessor model's name; that
  name appears only to say what Purpose Source is not, and each page that uses it says so in a
  `copy-lint:allow` comment at the top of its body.
- People appear by role, never by name. No testimonials, logos, sponsor tiers, donate button or
  newsletter form.

**Working**

- Text files use LF line endings.
- No external scripts, fonts, images or trackers; no forms that send anything.
- Keyboard: every control reachable with Tab, visible focus, Esc closes menus and panels.
- Check a change at 1280 px and at 375 px wide, in light and dark, and once with reduced motion
  and once with JavaScript off. Nothing may scroll sideways on a phone.

## Proposing a change

1. Make a branch: `git checkout -b short-name-of-the-change`.
2. Change the files, open the pages, check them at both widths and in both themes.
3. Commit and push the branch, then open a pull request that says what changed and why, with a
   screenshot or two.
4. Small fixes can go straight into the pull request; anything that changes a rule above, the
   menu or the tokens, say so in the description so it can be discussed.

## Good to know

- Search engines are kept out by the `noindex, nofollow` tag on every page. `robots.txt` helps
  only when the site sits at the root of a domain.
- The theme switch at the bottom of every page remembers your choice in your browser only
  (local storage); nothing else is stored.
- Licences: the fonts are under the SIL Open Font License (texts in `assets/fonts`). The
  Purpose Source name and mark follow the brand rules on the live site
  (https://purposesource.org/brand). No licence has been chosen for this prototype's own code
  and text yet; the live website uses Apache-2.0 for code and CC BY-ND 4.0 for narrative pages.
