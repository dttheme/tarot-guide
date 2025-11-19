Repository: tarot-guide — quick agent instructions

Be concise and prefer minimal, safe edits. This project is a small React + Vite single-page app that reads local JSON data and serves static card images from `public/cards/`.

Key files & entry points

- `src/main.jsx` — app bootstrap (React StrictMode -> `App`).
- `src/App.jsx` — top-level layout, state and filters. Controls `cardRow` grid sizing and calls search helpers.
- `src/function.js` — search logic used by `App` (filtering by `value`, `value_int`, `suit`, `type`). Keep changes here small and obvious; it's intentionally simple (no fuzzy search).
- `src/card_data.json`, `src/card_notes.json` — canonical data sources for cards and short notes. Edit these when adding or changing card metadata.
- `src/components/Card.jsx` — card rendering and the image URL helper. Note: images are referenced with
  `const path = `${import.meta.env.BASE_URL}cards/${name}.jpg`; new URL(path, import.meta.url).href` — keep this pattern to ensure Vite serves assets correctly.
- `public/cards/` — all JPEG card images. Filenames are `name_short`.jpg (e.g. `ar00.jpg`, `wa10.jpg`).
- `package.json` — dev scripts you can run: `npm run dev` (start Vite), `npm run build`, `npm run preview`, `npm run lint`.

Architecture & data flow (short)

- Single-page React app built with Vite. App state lives in `App.jsx` (React hooks). Filtering flow: `Header` -> updates `filter` state -> `useEffect` in `App` calls `searchNotes` and `searchCards` from `src/function.js` -> results passed into `Card` components.
- Static assets: card images live in `public/cards/` and are referenced at runtime via `import.meta.env.BASE_URL`. JSON card data is bundled (imported) from `src/` so changes to `card_data.json` require rebuilding.

Developer workflows & gotchas

- Start dev server: `npm run dev` (uses Vite HMR). Works in bash on Windows.
- Build: `npm run build` then `npm run preview` to locally serve `dist`.
- Deployment script: `npm run deploy` calls `gh-pages -d dist` — but `gh-pages` is not listed in package.json dependencies; verify or add it before relying on the script.
- Linting: `npm run lint` (ESLint config in project root: `eslint.config.js`).
- No automated tests are present. Keep changes small and manual-test in browser (flip cards, search, grid sizing).

Project conventions and patterns

- Functional React components with PropTypes (no TypeScript runtime checks). Follow existing style (ESM imports, default exports for components).
- Small single-responsibility components in `src/components/` (Card, Search, Header, Footer, NavButtons, ToggleTip). Use the same pattern when adding new components (PropTypes, simple CSS files).
- Data-first approach: canonical card content lives in JSON. If adding a new card, update both `card_data.json` and the corresponding image in `public/cards/`.
- Avoid changing image URL resolution: `Card.jsx` uses `import.meta.env.BASE_URL` + `new URL(..., import.meta.url).href` to create portable URLs that work in dev and production.

Examples to reference when editing

- Add a new card image: place `new.png` in `public/cards/` and reference via `name_short` in `card_data.json` (e.g. `"name_short": "ar22"`).
- Extend search: `src/function.js` currently checks equality for fields (value, value_int, suit, type). For fuzzy or substring search, update `searchCards` and confirm `App.jsx` still expects an array of card objects.
- Change grid columns: `App.jsx` computes grid template columns using `cardRow` state. Adjust styling in `App.css` or change how `cardRow` is passed from `Header`.

Integration points & external deps

- Vite dev server and build tool (`vite` in devDependencies).
- React 18 and react-dom. No other runtime libs.
- ESLint and plugins configured; keep code consistent with existing lint rules.
- CI: `.github/workflows/vite.js.yml` exists — CI may run build or preview; check the workflow if adding new build steps.

Safety & suggested approach for AI edits

- Prefer small, local changes (update JSON, tweak UI components). Manually run `npm run dev` to verify HMR reflects edits.
- When changing data formats (card schema), update all code consuming the data (`Card.jsx`, `function.js`, and any components using card props).
- Do not assume `gh-pages` exists — confirm or add dependency before editing `package.json` scripts.

If anything is unclear or you'd like a different level of detail (examples of PRs, automated checks, or a contributor checklist), tell me what to expand and I will iterate.
