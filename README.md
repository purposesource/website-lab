# Purpose Source website prototype

A clickable prototype of a calmer, more document-like purposesource.org, for discussing the
menu, the page templates and the tone. **It is not the Purpose Source website.** Nothing here
is binding; made-up records carry a brass "Sample" label; legal texts are links to the live
site, never copies. The live site is https://purposesource.org.

It applies a study of the site that opensource.org runs: take its habits (governance, money and
records one click from the header; dated, versioned documents; a calm voice), not its look.
Every page has a **Why this page** button at the bottom right that names the study's
recommendations the page shows.

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
assets/site.css               the only stylesheet; design tokens at the top
assets/layout.js              the header menu and the footer, defined once; theme switch;
                              copy icons; the "Why this page" panel
assets/registry.js            search, filters and sorting on registry.html only
assets/fonts/                 Inter, Source Serif 4, JetBrains Mono (woff2) and their OFL licences
assets/brand/                 the Purpose Source mark (light and dark) and the favicon
robots.txt, .nojekyll         keep crawlers out; tell GitHub Pages to serve files as they are
```

**File names follow the real site's addresses**, with slashes turned into dashes:
`/for/companies/check` is `for-companies-check.html`, `/trust/money` is `trust-money.html`,
`/` is `index.html`. Typing a real-site address after the prototype's address lands on the
not-found page, which suggests the matching file.

`learn.html` ("All pages") lists every page, grouped like the menu. Pages marked "Short" there
are brief stand-ins.

## Where to change things

- **Colours, type sizes, spacing, widths:** the top of `assets/site.css`. Each colour is one line
  with its light and dark value side by side: `light-dark(#1d5c3c, #8fcaa6)`.
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

## The rules this prototype keeps

From the study and from the real site's rules; please keep them when you change things.

**Look**

- White surfaces, one green for links and the one button; brass only for verification and
  "Sample" labels.
- No coloured bar along the top of a card; no empty bands or spacer blocks.
- Links with a small icon instead of big buttons; at most one button per screen.
- Copy icons instead of "Copy" buttons.
- No label that repeats what is already shown.
- Serif (Source Serif 4) for H1 and H2 only; one H1 size on every page except the home page.
- A 64 px header; the title block stays compact.

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
- Check a change at 1280 px and at 375 px wide, in light and dark. Nothing may scroll sideways
  on a phone.

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
