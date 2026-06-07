# Linktree

A modern, neo-brutalist Linktree-style page built with **React + Vite** — a profile and a set of links out to the rest of my internet, with a small JavaScript feature that gives the page some life.

## The "little JS personality"

A `useTimeOfDay` hook reads the visitor's local clock and:

- swaps the greeting (`Good morning` / `Good afternoon` / `Good evening` / `Burning the midnight oil`),
- shifts the entire accent palette to match the time of day (warm orange mornings, teal afternoons, pink evenings, purple late nights),
- shows a live local clock that re-checks every 30 seconds, so the page can cross into a new period without a refresh.

The accent feeds CSS custom properties, so borders, hover shadows, and the animated background blobs all recolor together.

## Tech & structure

```
src/
  components/   Profile, Avatar, LinkList, LinkCard, Footer
  data/         profile.js   ← edit your name, bio, avatar, and links here
  hooks/        useTimeOfDay.js  ← the time-aware greeting + accent logic
  styles/       index.css
  App.jsx
  main.jsx
```

Everything you'd want to personalize lives in **`src/data/profile.js`** — no component code needs to change.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173/linktree/
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Make it yours

1. Edit `src/data/profile.js` — name, bio, location, initials, and your real links.
2. Add a profile photo to `public/` and set `avatar: "/your-photo.jpg"` (a bold monogram is used as a fallback).
3. Drop your `resume.pdf` into `public/` so the Résumé link resolves.

## Deploy to GitHub Pages

This repo is wired for GitHub Pages out of the box.

1. Create a public repo named **`linktree`** (the Vite `base` in `vite.config.js` expects this — change `base` / `homepage` if you use a different name).
2. Push your code, then run:

   ```bash
   npm run deploy
   ```

   This builds the site and publishes `/dist` to a `gh-pages` branch via the `gh-pages` package.

3. In **Settings → Pages**, set the source to the `gh-pages` branch. Your site will be live at
   `https://<your-username>.github.io/linktree/`.

> Using a different repo name or a custom domain? Update `base` in `vite.config.js` and `homepage` in `package.json` (or build with `BASE_PATH=/ npm run build`).
