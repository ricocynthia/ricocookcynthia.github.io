# Cynthia Rico Cook — Portfolio

React + Vite portfolio. Deployed to GitHub Pages via GitHub Actions.

## Local Development

```bash
npm install
npm run dev
```

## Deploy

Deploys automatically on push to `main` via GitHub Actions.

Make sure GitHub Pages is configured in your repo settings:
- Go to **Settings → Pages**
- Set **Source** to **GitHub Actions**

## Project Structure

```
src/
  components/     # One component + CSS file per section
  data/
    index.js      # All content lives here — edit this to update the site
  styles/
    global.css    # CSS variables and base styles
  App.jsx
  main.jsx
```

## Updating Content

All resume content (experience, projects, skills) is in `src/data/index.js`.
You never need to touch JSX to update your resume.
