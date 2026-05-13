# Portfolio Deployment Guide
## Vite + React + Tailwind CSS + Framer Motion → GitHub Pages

---

## Prerequisites

Install these before starting:
- Node.js v18+ → https://nodejs.org
- Git → https://git-scm.com
- A GitHub account

---

## Step 1 — Create a GitHub Repository

1. Go to https://github.com and sign in.
2. Click the **+** icon → **New repository**.
3. Name it exactly: `portfolio`
4. Set it to **Public**.
5. Do NOT initialize with README, .gitignore, or license.
6. Click **Create repository**.
7. Copy your repository URL (format: `https://github.com/YOUR_USERNAME/portfolio.git`).

---

## Step 2 — Configure Your Username

Open `package.json` and `vite.config.js` and replace `Ankush703-web` with your actual GitHub username:

**package.json:**
```json
"homepage": "https://YOUR_USERNAME.github.io/portfolio"
```

**vite.config.js:**
```js
base: '/portfolio/',
```
(The base should match your repository name exactly.)

---

## Step 3 — Install Dependencies

Open a terminal in the project root folder (where `package.json` is) and run:

```bash
npm install
```

This installs: React, Vite, Tailwind CSS, Framer Motion, and gh-pages.

---

## Step 4 — Test Locally

Run the development server to verify everything works:

```bash
npm run dev
```

Open http://localhost:5173 in your browser. You should see the portfolio with the matrix rain background and terminal UI.

To stop: press `Ctrl + C`.

---

## Step 5 — Initialize Git and Push Source Code

In the project root, run these commands one by one:

```bash
git init
git add .
git commit -m "initial commit: portfolio source"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## Step 6 — Enable GitHub Pages (gh-pages branch method)

The `gh-pages` package is already installed. Run:

```bash
npm run deploy
```

This command:
1. Runs `npm run build` → creates the `dist/` folder with compiled files.
2. Publishes the `dist/` folder to a new branch called `gh-pages` on GitHub.

You will see output ending in: `Published`

---

## Step 7 — Configure GitHub Pages in Repository Settings

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/portfolio`
2. Click **Settings** → scroll to **Pages** in the left sidebar.
3. Under **Source**, select **Deploy from a branch**.
4. Under **Branch**, select `gh-pages` and folder `/root`.
5. Click **Save**.

GitHub will now build and publish your site. Wait 1–2 minutes.

---

## Step 8 — Access Your Live Portfolio

Your portfolio will be live at:
```
https://YOUR_USERNAME.github.io/portfolio/
```

GitHub sends an email when the deployment is complete. You can also monitor it under **Settings → Pages**.

---

## Updating the Portfolio in the Future

Whenever you make changes:

```bash
# 1. Make your edits to src/ files
# 2. Test locally
npm run dev

# 3. Commit source changes
git add .
git commit -m "update: describe what you changed"
git push origin main

# 4. Redeploy to GitHub Pages
npm run deploy
```

---

## Customization Reference

| What to change | File |
|---|---|
| Personal info, links | `src/lib/data.js` → `personal` object |
| Projects | `src/lib/data.js` → `projects` array |
| Skills | `src/lib/data.js` → `skills` object |
| Certifications | `src/lib/data.js` → `certifications` array |
| Experience | `src/lib/data.js` → `experience` array |
| Colors / theme | `tailwind.config.js` + `src/index.css` |
| Fonts | `index.html` Google Fonts link + `tailwind.config.js` |
| Matrix rain density | `src/components/MatrixRain.jsx` → fontSize, opacity |
| Typing speed | `src/hooks/useTypewriter.js` → speed param |
| GitHub base URL | `vite.config.js` → `base` field |

---

## Troubleshooting

**Blank page on GitHub Pages:**
Verify `base` in `vite.config.js` matches your repo name exactly, including case.
```js
base: '/portfolio/',  // must match repo name
```

**404 on page refresh:**
Add a `404.html` → copy `dist/index.html` to `dist/404.html` before deploying:
```bash
cp dist/index.html dist/404.html && npx gh-pages -d dist
```

**npm run deploy fails:**
Make sure you have push access to the repository and you're logged in:
```bash
git config --global user.email "naikankush067@gmail.com"
git config --global user.name "Ankush703-web"
```

**Fonts not loading:**
The Google Fonts link is in `index.html`. Ensure you have internet access during build/preview. Fonts load from CDN at runtime.

**gh-pages not found:**
```bash
npm install --save-dev gh-pages
```

---

## Project Structure

```
portfolio/
├── index.html               # Entry HTML, Google Fonts link
├── vite.config.js           # Vite config, base URL
├── tailwind.config.js       # Theme: colors, fonts, animations
├── postcss.config.js        # PostCSS for Tailwind
├── package.json             # Dependencies, deploy scripts
├── public/
│   └── favicon.svg          # Terminal-style favicon
└── src/
    ├── main.jsx             # React entry point
    ├── App.jsx              # Root component, layout
    ├── index.css            # Global styles, CRT effects
    ├── lib/
    │   └── data.js          # ALL portfolio content here
    ├── hooks/
    │   ├── useTypewriter.js # Typewriter animation hook
    │   └── useInView.js     # Intersection observer hook
    ├── components/
    │   ├── MatrixRain.jsx   # Canvas matrix rain background
    │   ├── Navbar.jsx       # Fixed top navigation
    │   ├── SectionHeader.jsx
    │   └── TerminalWindow.jsx
    └── sections/
        ├── Hero.jsx         # Boot terminal + intro
        ├── About.jsx        # Profile config view
        ├── Experience.jsx   # Timeline
        ├── Projects.jsx     # Filterable project cards
        ├── Skills.jsx       # Skill grid + progress bars
        ├── Certifications.jsx
        ├── Contact.jsx
        └── Footer.jsx
```
