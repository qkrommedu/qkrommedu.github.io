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
