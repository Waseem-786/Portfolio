# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Next.js dev server on http://localhost:3000
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run `next lint`

No test runner is configured.

## Architecture

This is a personal portfolio site built with **Next.js 15 (Pages Router, not App Router)**, React 19, Tailwind CSS 3, and framer-motion. JavaScript only (no TypeScript), with `@/*` aliased to `./src/*` via [jsconfig.json](jsconfig.json).

### Routing

Routes follow Pages Router conventions in [src/pages/](src/pages/):
- Top-level pages: `index.js`, `about.js`, `projects.js`, `contact.js`, `certificates.js`
- Per-project detail pages live in [src/pages/projects/](src/pages/projects/) (e.g. `LMS.js` → `/projects/LMS`). Links from `projects.js` must match these filenames exactly — note one entry (`/projects/chat-networking`) currently has no corresponding file.
- API routes live in [src/pages/api/](src/pages/api/).

### Page composition pattern

There is **no shared `Layout` component**. Every page individually imports and renders `<MetaHead/>`, `<Navbar/>`, page content, and `<Footer/>`. When adding a new page, follow this same pattern rather than introducing a layout wrapper unless explicitly refactoring.

### Dark mode

Dark mode is managed by a React Context in [src/context/DarkModeContext.js](src/context/DarkModeContext.js), wired in [src/pages/_app.js](src/pages/_app.js). It persists to `localStorage` under the key `theme` and toggles the `dark` class on `document.documentElement`.

Important: components do **not** rely on Tailwind's `dark:` variant. They read the `darkMode` boolean from `useDarkMode()` and apply conditional class strings (e.g. `${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`). New UI should follow the same conditional-class convention to stay consistent with the existing pages.

### Contact form / API

[src/pages/api/sendEmail.js](src/pages/api/sendEmail.js) is the only API route. It uses `nodemailer` with Gmail SMTP and requires two env vars:
- `EMAIL` — sending Gmail address
- `EMAIL_PASSWORD` — Gmail **App Password** (not the account password)

The recipient address is hard-coded in the handler. The contact form in [src/pages/contact.js](src/pages/contact.js) POSTs JSON `{name, email, message}` to `/api/sendEmail`.

### Unused dependencies

`mongodb` and `mongoose` are listed in [package.json](package.json) but are not imported anywhere in `src/`. Don't assume a database layer exists — there isn't one yet.

### Static assets

Images and icons are served from [public/](public/) and referenced via `next/image` (e.g. `/Waseem_Shahzad-removebg.png`, `/Icon_png/hex.png`, `/Icon/hex.ico`).
