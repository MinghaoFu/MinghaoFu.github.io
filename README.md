# Spotify-Style Personal Website

A single-page personal / academic website that presents research the way a music app presents an artist: **you are the artist, research themes are albums, papers are tracks.**

**Live demo — [minghaofu.com](https://minghaofu.com)**

![Light and dark preview of the site](docs/preview.png)

No build step, no dependencies, no framework. Plain HTML, CSS and ES modules, deployed free on GitHub Pages. Nearly all of your content lives in a single file, `js/data.js`.

---

## Features

- **Zero tooling** — no npm, bundler, or generator. Edit a file, push, done.
- **Content in one place** — name, bio, papers, blogs, education and experience are all data in `js/data.js`.
- **Light / dark theme** — defaults by the visitor's local clock (light 07:00–19:00, dark otherwise), applied before first paint so there is no flash; the manual toggle is remembered.
- **Albums & tracks** — group papers into research themes; each paper row carries link buttons (project page, arXiv, code, dataset). A local `.zip` used as the code link becomes a direct download.
- **Auto-linked co-authors** — map a co-author to their homepage once, and every mention of that name links automatically.
- **Blog posts** — standalone pages under `blogs/<slug>/` that reuse the same shell, styling, and theme.
- **Client-side routing** — `#/`, `#/album/<id>`, `#/blogs`, `#/search?q=`.
- **SEO out of the box** — canonical URL, Open Graph and Twitter cards, JSON-LD (`Person` + `WebSite`), `sitemap.xml`, `robots.txt`, and a no-JavaScript fallback so crawlers and text browsers still see your name, summary and links.
- **Responsive** — works down to phone widths.

---

## Quick start

1. **Fork this repo** and rename it to `<your-username>.github.io`.
2. **Edit `js/data.js`** — this is where your name, bio, papers, albums and blog list live.
3. **Replace the assets** — `images/profile.png`, `images/hero-blueprint.png`, `images/papers/*`, `cv.pdf`.
4. **Enable Pages** — repository *Settings → Pages → Deploy from a branch*, branch `main`, folder `/ (root)`.
5. **Set your domain** — edit `CNAME` to your own domain, or delete it to use `<your-username>.github.io`.

To preview locally (an `http://` origin is required — ES modules will not load from `file://`):

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

---

## Before you publish a fork

These files contain values tied to the original site. Change them, or your fork will report to someone else's accounts.

| File | Change | Why it matters |
| --- | --- | --- |
| `CNAME` | your domain, or delete the file | GitHub Pages will otherwise try to serve on a domain you do not own |
| `index.html` | `google-site-verification`, `<title>`, `description`, `canonical`, `og:*`, `twitter:*`, JSON-LD block | these identify the original author to search engines and social previews |
| `js/app.js` | `READER_NAMESPACE` | the visitor counter uses a public namespace — if you keep it, your page views mix with the original site's |
| `sitemap.xml`, `robots.txt` | your domain | so search engines crawl your URLs, not the original ones |
| `images/`, `cv.pdf`, `files/` | your own assets | the repo ships the original author's photo, CV and paper figures |

---

## Project structure

```
index.html          app shell, <head> SEO tags, pre-paint theme script, no-JS fallback
style-spotify.css   all styling; CSS custom properties drive the light/dark themes
js/
  data.js           ← your content lives here
  app.js            hash router, render functions, theme + player logic
blogs/<slug>/       standalone blog posts that reuse the shell
tc-wm/              example of a standalone project page
images/             profile photo, hero banner, paper thumbnails, institution logos
files/              downloadable attachments (supplementary material, etc.)
docs/preview.png    the screenshot used in this README
```

---

## Customizing

### Content — `js/data.js`

The file exports one object or array per section:

| Export | What it drives |
| --- | --- |
| `me` | name, role, profile photo, hero banner, tagline, bio paragraphs, contact, social links |
| `albums` | research themes; each album is a group of papers with a cover and blurb |
| `papers` | one entry per paper: title, authors, venue, thumbnail, `albumId`, and `links` |
| `authorLinks` | co-author name → homepage; matching names are linked automatically wherever they appear |
| `blogs` | blog index entries pointing at `blogs/<slug>/index.html` |
| `news`, `education`, `experience`, `service` | the homepage sections below About |

A paper's `links` accepts `project`, `arxiv`, `code` and `dataset`. If `code` points at a local file such as `files/supplement.zip`, the button downloads it instead of opening a new tab.

### Theme

Every color is a CSS custom property defined under `:root` (dark) and `:root[data-theme="light"]` in `style-spotify.css` — change the palette in one place. The starting theme is chosen by an inline script in `index.html` (local clock), and the visitor's manual choice is stored in `localStorage` under `mf-theme-v1`.

### Adding a blog post

1. Copy an existing folder in `blogs/` to `blogs/<your-slug>/`.
2. Edit its `index.html` — it already links the shared stylesheet and inherits the theme.
3. Add an entry to the `blogs` array in `js/data.js`.

### Adding a project page

Drop a self-contained folder at the repo root (see `tc-wm/` for an example) and point a paper's `links.project` at it.

### Cache busting

`index.html` loads the stylesheet and script with a `?v=YYYYMMDD` query. Bump it whenever you change CSS or JS so returning visitors do not get a stale cached copy.

---

## Notes

- Requires a modern browser (ES modules).
- The design is inspired by Spotify's interface. This project is not affiliated with, endorsed by, or sponsored by Spotify.

## License

The **code** — HTML, CSS, JavaScript and the layout/theme system — is released under the [MIT License](LICENSE). Fork it, adapt it, and build your own site on it.

The **content** is not covered by that license. Text, biography, photographs, CV, publications, paper figures and blog posts remain © Minghao Fu, all rights reserved. Replace them with your own before publishing a fork.
