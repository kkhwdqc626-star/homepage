# Chrisna Lungala — Personal Website

An Apple-inspired personal website for composer Chrisna Lungala, featuring his work in film, TV, games, and advertising.

## Design

The site draws from Apple's design language:
- **Typography**: System font stack (-apple-system, SF Pro on Mac)
- **Layout**: Clean, minimal with generous white space
- **Navigation**: Translucent sticky nav with backdrop blur
- **Cards**: Rounded corners, subtle hover effects
- **Colors**: Apple's neutral palette (black, grays, blue links)

## Structure

- **Hero**: Introduction with photo and call-to-action
- **Work**: Grid of film/TV projects with overlays
- **About**: Bio and credentials
- **Contact**: Email and social links

## Audio (Demo Track)

The demo track uses M4A. For progress-bar seeking to work, the file must be in "faststart" format (metadata at the start). If seeking restarts playback, run:

```bash
./convert-audio-faststart.sh
```

Requires [ffmpeg](https://ffmpeg.org/) (`brew install ffmpeg` on macOS).

## Running Locally

Open `index.html` in a browser, or use a local server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Then visit http://localhost:8000

## Deployment

The site is static HTML/CSS/JS. Deploy to any static host:
- Netlify
- Vercel
- GitHub Pages
- Any web server

### GitHub Pages

This repo includes **`.nojekyll`** so GitHub does not run Jekyll (avoids surprises with static assets).

1. Create a new repository on GitHub (empty, no README if you are pushing an existing folder).
2. From this folder (`chrisna-website`), add the remote and push:

   ```bash
   git init
   git branch -M main
   git add .
   git commit -m "Initial site"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment → Source**: choose **Deploy from a branch**, branch **main**, folder **`/ (root)`**.
4. After a minute, the site will be at **`https://YOUR_USERNAME.github.io/YOUR_REPO/`** (unless you use a custom domain or a `username.github.io` repo).

**Project site URL:** Paths in this project are relative (`styles.css`, `images/…`), so they work under `github.io/repo-name/`. For a **user/org site** (`username.github.io`), put these files in that repository’s root and the site will load at `https://username.github.io/`.

**Custom domain (optional):** Add your domain in **Pages** settings and commit a `CNAME` file in the repo root with a single line: your hostname (e.g. `www.example.com`).

**Large files:** GitHub blocks files larger than **100 MB**. This project’s media are below that limit. If you add bigger video or audio assets, compress them, use [Git LFS](https://git-lfs.github.com/), or host media elsewhere and link to it.
