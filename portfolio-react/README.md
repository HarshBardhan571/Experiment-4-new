# portfolio-react

This project was created as Experiment 3 and extended for Experiment 4.

Experiment 4 changes (added):
- Global context with `useContext` (`src/context/AppContext.jsx`)
- State management via `useReducer` (`src/reducer/appReducer.js`) with actions: `ADD_FAVORITE`, `REMOVE_FAVORITE`, `CLEAR_FAVORITES`, `TOGGLE_THEME`.
- Performance optimization using `useMemo` on the new `Analytics` page.
- New page: `Analytics` demonstrating reducer + memo + context (`/analytics`).
- Theme toggle and favorites counter in the navbar.

Folder structure (recommended)
```
src/
├── components/    # Navbar, Footer, Card, ThemeToggle, FilterBar
├── context/       # AppContext.jsx (useContext + useReducer)
├── reducer/       # appReducer.js
├── pages/         # Home, Projects, Contact, Analytics
├── App.jsx
├── main.jsx
└── index.css      # imports styles.css
```

Notes
- `.gitignore` added (do not include `node_modules` in zip uploads).
- `FilterBar` component added at `src/components/FilterBar.jsx` as an example of `useMemo` + `useContext` usage.

Screenshots in `/screenshots` show the updated UI.

Run locally:
```bash
cd portfolio-react
npm install
npm run dev
```

Deploy to Vercel: format your deployment name like `{uid}-4-{your-name}.vercel.app` when you link the project.
