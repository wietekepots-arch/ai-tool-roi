# AI Tooling ROI — Business Case

Interactive business case for justifying AI developer tooling costs, based on hourly rate rather than salary.

## Stack

- React 18 + Vite 5
- No UI library — pure CSS custom properties
- Deployed via GitHub Actions → GitHub Pages

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
# output goes to /dist
```

## Deploy to GitHub Pages

Deployment is fully automated via `.github/workflows/deploy.yml`.

Every push to `main` triggers:
1. `npm ci` — clean install
2. `npm run build` — Vite builds to `/dist`
3. `/dist` is uploaded and deployed to GitHub Pages

### One-time setup (do this once)

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under *Source*, select **GitHub Actions**
4. That's it — the next push to `main` will deploy automatically

### Important: update `base` in vite.config.js

```js
// vite.config.js
base: '/your-repo-name/',   // must match your GitHub repo name exactly
```

If you're using a custom domain, set `base: '/'` instead.

Your site will be live at:
```
https://<your-github-username>.github.io/<your-repo-name>/
```
