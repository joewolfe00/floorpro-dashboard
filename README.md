
# FloorPro Full Repo (App + Docs)

This repository contains:
- **React App (Vite + TS)** in the root
- **VitePress Docs** inside `docs/`

## Run locally
```bash
npm install
npm run dev          # app at http://localhost:5173
npm run docs:dev     # docs at http://localhost:5173 (or different port)
```

## Build
```bash
npm run build        # outputs app to dist/
npm run docs:build   # outputs docs to docs/.vitepress/dist
```

## Deploy on Vercel
Create **two Vercel projects** pointing to this same repo:

1) **App Project**
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `dist`

2) **Docs Project**
   - Install Command: `npm install`
   - Build Command: `npm run docs:build`
   - Output Directory: `docs/.vitepress/dist`

Each commit to `main` redeploys both projects.
