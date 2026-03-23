# AI Tooling ROI — Business Case

Interactive business case for justifying AI developer tooling costs, based on hourly rate rather than salary.

This repo is configured to deploy to GitHub Pages at:

```text
https://<your-github-username>.github.io/ai-tool-roi/
```

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
2. Make sure the GitHub repository name is `ai-tool-roi`
3. Go to **Settings → Pages**
4. Under _Source_, select **GitHub Actions**
5. That's it — the next push to `main` will deploy automatically

### Vite base path

```js
// vite.config.js
const repoName = "ai-tool-roi";
base: `/${repoName}/`;
```

If you publish under a different repo name, update `repoName` in `vite.config.js`.

If you're using a custom domain, set `base: '/'` instead.

Your site will be live at:

```
https://<your-github-username>.github.io/ai-tool-roi/
```

## Publish from this machine

```bash
git remote add origin https://github.com/<your-github-username>/ai-tool-roi.git
git push -u origin main
```

Then enable **Settings → Pages → GitHub Actions** if it is not already enabled.
