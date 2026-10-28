# Jean Damascene Cyifuzo — Portfolio

Personal portfolio built with [Next.js](https://nextjs.org) (App Router), [Tailwind CSS](https://tailwindcss.com) and [Framer Motion](https://www.framer.com/motion/).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

All text, links, skills, projects and experience live in [`src/data/portfolio.js`](src/data/portfolio.js). Project screenshots go in `public/images/projects/`.

- Set `profile.resumeUrl` (e.g. `"/cv.pdf"` with the file in `public/`) to show a **Download CV** button.
- The **Experience** section and its nav link appear automatically once `experiences` has entries.

## Contact form

The form posts to `src/app/api/send/route.js`, which sends mail through [Resend](https://resend.com). Fill in `RESEND_API_KEY` and `CONTACT_TO_EMAIL` at the top of that file; without them the form shows a friendly "temporarily unavailable" message. Set `profile.siteUrl` in `src/data/portfolio.js` to your deployed domain.

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start the dev server     |
| `npm run build` | Production build         |
| `npm run start` | Serve the production build |
| `npm run lint`  | Lint with ESLint         |
