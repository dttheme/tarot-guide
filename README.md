# Tarot Guide

Tarot Guide is a small single-page React app (Vite) that displays a Tarot card gallery. It bundles local JSON card data and serves static card images from `public/cards/`. The app is intentionally minimal and data-first — card content and notes live in JSON and the UI simply renders them.

Quick features

- Browse Tarot cards (major & minor arcana) as image tiles and flip a card to read upright/reversed meanings and a description.
- Simple filter/search driven by `src/function.js`.
- Static assets served from `public/cards/` and referenced using Vite-compatible URLs.

Run locally

1. Install dependencies:

```bash
npm install
```

2. Run dev server (Vite with HMR):

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

Other scripts

- `npm run lint` — run ESLint against the codebase.
- `npm run deploy` — runs `gh-pages -d dist`. Note: `gh-pages` is not currently listed as a dependency; add it to `devDependencies` before using this script.

Key files & where to look

- `src/main.jsx` — app bootstrap.
- `src/App.jsx` — main layout and app state (filters, cardRow grid sizing).
- `src/function.js` — search/filter helpers (currently equality-based: `value`, `value_int`, `suit`, `type`).
- `src/card_data.json`, `src/card_notes.json` — canonical card data and short notes (edit these to change card meta/content).
- `src/components/Card.jsx` — card rendering and image URL helper. Images are resolved with:
  `const path = `${import.meta.env.BASE_URL}cards/${name}.jpg`; new URL(path, import.meta.url).href` — keep this to ensure Vite serves assets correctly.
- `public/cards/` — JPEG images named by `name_short` (e.g. `ar00.jpg`, `wa10.jpg`).

How to add a new card

1. Add the image to `public/cards/` named with the card's `name_short` (e.g. `ar22.jpg`).
2. Add the card object to `src/card_data.json` with the same `name_short` and required fields (`name`, `value`, `value_int`, `meaning_up`, `meaning_rev`, `desc`, `type`, `suit` for minors).
3. Rebuild or restart dev server (JSON is bundled by Vite):

```bash
npm run dev
```

Development notes & conventions

- Components use functional React + PropTypes.
- Keep changes minimal and local. When changing the card schema, update all consumers (`Card.jsx`, `function.js`, and any components using card props).
- Search is intentionally simple; if you change `src/function.js`, verify `App.jsx` still expects an array of card objects.
- CSS is plain and component-scoped via the `src/App.css` file for layout and presentation.

CI / Linting

- There's a GitHub workflow in `.github/workflows/vite.js.yml` (may run build/preview). Check it before modifying CI behavior.
- Lint with:

```bash
npm run lint
```
