# Fondamenta Consulting — Website

A single-page landing site for [fondamenta.media](https://www.fondamenta.media).

## Preview locally

Open `index.html` in your browser, or run a local server:

```bash
cd ~/Desktop/fondamenta-website
python3 -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080).

## Contact form

The contact form uses [FormSubmit](https://formsubmit.co) to deliver submissions to `julia@fondamenta.media`.

**First-time setup:** After the first test submission, FormSubmit will send a confirmation email to `julia@fondamenta.media`. Click the activation link to enable the form.

Submissions work on localhost and once deployed to fondamenta.media.

## Deploy to GoDaddy

Since you own **fondamenta.media** via GoDaddy, you can host this as a static site:

### Option A — GoDaddy Web Hosting (cPanel)

1. Log in to your GoDaddy account → **My Products** → **Web Hosting** → **Manage**
2. Open **cPanel** → **File Manager**
3. Navigate to `public_html` (or the folder assigned to fondamenta.media)
4. Upload all files from this folder:
   - `index.html`
   - `css/style.css`
   - `js/main.js`
   - `assets/` (logo, favicon)
5. Ensure `index.html` is in the root of `public_html`
6. Visit https://www.fondamenta.media to confirm

### Option B — Netlify / Vercel (free, recommended)

1. Create a free account at [netlify.com](https://netlify.com) or [vercel.com](https://vercel.com)
2. Drag the `fondamenta-website` folder into the deploy area, or connect a Git repo
3. In GoDaddy DNS settings for fondamenta.media:
   - Add a **CNAME** record: `www` → your Netlify/Vercel URL
   - Add an **A** record for the root domain (Netlify/Vercel provide the IP addresses)
4. Enable HTTPS (automatic on both platforms)

## DNS checklist (GoDaddy)

| Type  | Name | Value                    |
|-------|------|--------------------------|
| A     | @    | Your host's IP address   |
| CNAME | www  | Your host URL            |

Allow up to 48 hours for DNS changes to propagate (usually much faster).

## File structure

```
fondamenta-website/
├── index.html          Main page
├── css/style.css       Brand styles
├── js/main.js          Navigation + form handling
├── assets/
│   ├── logo-fondamenta.png
│   ├── logo-fondamenta.svg
│   └── favicon.svg
└── README.md
```

## Brand reference

- **Primary colour:** #022b29 (Deep Canal)
- **Accent:** #b8976a (Gold)
- **Background:** #faf9f7 (Cream)
- **Fonts:** Cormorant Garamond + Jost (Google Fonts)
