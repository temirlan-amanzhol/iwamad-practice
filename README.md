# iwamad-practice

Profile card for the IWaMAD course, built with React + TypeScript + Vite.
Week 04 added pages (React Router), shared likes state (Context) and the first test (Vitest).
Week 05 adds a small design system from the SIS 2 Figma design: tokens in `src/styles/tokens.css`,
UI components `Button`, `Card`, `Tag` in `src/components/ui/`, and handoff notes in `design/HANDOFF.md`.
Week 06 adds a Register page (`/register`): a controlled form, the pure function
`validateRegistration` in `src/lib/` with eight tests, and an accessible `TextField` in `src/components/ui/`.
Week 07 adds Events: a typed array in `src/data/events.ts`, `EventCard`s in a responsive grid (`/events`),
a page per event (`/events/:eventId`) with a sign-up form, and the pure function `validateSignup` with six tests.

## Scripts

```bash
npm install
npm run dev      # local dev server
npm test         # Vitest + React Testing Library
npm run lint     # ESLint
npm run build    # type check + production build into docs/ (+ docs/404.html)
```

## Branches

- `week-01` … `week-07` — work for each week.
- GitHub Pages is published from `week-07`, folder `/docs`.

Live site: https://temirlan-amanzhol.github.io/iwamad-practice/
