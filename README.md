# Shlok Shah — Portfolio

A simple, static portfolio site. No build step, no frameworks — just
HTML, CSS, and JS, ready to deploy on GitHub Pages.

## File structure

```
index.html   ← page structure (don't need to edit this)
style.css    ← design / colors / fonts (don't need to edit this)
script.js    ← reads data.js and builds the page (don't need to edit this)
data.js      ← ALL YOUR CONTENT LIVES HERE — this is the only file you edit
```

## How to add or edit your content

Open **`data.js`** in any text editor (even GitHub's web editor works fine).
Everything is grouped into three sections, each with comments explaining
what goes where:

1. **`about`** — your name, role, tagline, bio paragraphs, and links
   (email, GitHub, LinkedIn, etc).
2. **`projects`** — a list of project entries. To add a new project, copy
   an existing block (the part between `{` and `}`) and paste it as a new
   entry, then edit the text inside the quotes.
3. **`awards`** — same idea, for awards/achievements. This section is
   currently turned off. To turn it on later, open `data.js` and change:
   ```js
   showAwards: false,
   ```
   to:
   ```js
   showAwards: true,
   ```
   then add award entries the same way you add projects.

### Adding a project — example

```js
{
  title: "Weather Dashboard",
  status: "In progress",      // "In progress", "Completed", or "Paused"
  period: "2026",
  description: "A dashboard that pulls live weather data and charts trends.",
  tags: ["React", "API"],
  link: "https://github.com/yourname/weather-dashboard"  // or "" if none yet
},
```

Just remember the comma `,` at the end of each block if it's not the last one.

### Removing a project or award

Delete the whole block, from its opening `{` to its closing `}` (and the
comma after it).

### Hiding a link without deleting it

If you don't have a GitHub or LinkedIn URL yet, just leave its `url` as
an empty string `""` — it will automatically not show up on the page:

```js
{ label: "GitHub", url: "" },
```

## Previewing changes locally

Since this is a fully static site, you can just open `index.html` directly
in a browser to preview it. If your browser blocks local file scripts, run
a tiny local server from this folder instead:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `portfolio` or
   `yourusername.github.io` if you want it at the root of your GitHub
   Pages domain).
2. Push these files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```
3. On GitHub, go to your repo → **Settings** → **Pages**.
4. Under "Build and deployment", set **Source** to **Deploy from a
   branch**, choose the **main** branch and **/ (root)** folder, then
   save.
5. After a minute or two, your site will be live at:
   - `https://yourusername.github.io/your-repo-name/` (regular repo), or
   - `https://yourusername.github.io/` (if your repo is named
     `yourusername.github.io`)

From then on, any time you edit `data.js` and push to GitHub, the live
site updates automatically within a minute or two — no rebuild step
needed.

## Design notes

- Fonts: Source Serif 4 (headings) + Inter (body), loaded from Google
  Fonts via a `<link>` tag in `index.html`.
- Colors and spacing are defined as CSS variables at the top of
  `style.css` under `:root` — tweak those if you want to adjust the
  palette later.
- The site respects `prefers-reduced-motion` and has visible keyboard
  focus states built in.
