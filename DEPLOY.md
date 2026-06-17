# GoDaddy DNS setup for fondamenta.media

The site is deployed on **GitHub Pages** and ready. The only remaining step is updating DNS at GoDaddy so the domain points to GitHub instead of the "Launching Soon" page.

**Repository:** https://github.com/juliafondamenta/fondamenta-website  
**GitHub Pages:** https://juliafondamenta.github.io/fondamenta-website/

## Steps in GoDaddy (5 minutes)

1. Log in at [godaddy.com](https://www.godaddy.com)
2. Go to **My Products** → **Domains** → **fondamenta.media** → **DNS** (or **Manage DNS**)
3. **Delete or edit** the existing **A records** for `@` that point to:
   - `13.248.243.5`
   - `76.223.105.230`
4. **Add four new A records** for `@`:

   | Type | Name | Value           | TTL  |
   |------|------|-----------------|------|
   | A    | @    | 185.199.108.153 | 600  |
   | A    | @    | 185.199.109.153 | 600  |
   | A    | @    | 185.199.110.153 | 600  |
   | A    | @    | 185.199.111.153 | 600  |

5. **Edit the www record** — set it to:

   | Type  | Name | Value                      | TTL  |
   |-------|------|----------------------------|------|
   | CNAME | www  | juliafondamenta.github.io  | 600  |

   If www currently points to `fondamenta.media`, replace that with the CNAME above.

6. **Save** all changes.

## After DNS propagates (usually 10–30 minutes)

1. Visit https://fondamenta.media — your landing page should appear
2. In GitHub: **Settings → Pages → Custom domain** — confirm DNS check passes
3. Enable **Enforce HTTPS** once the checkbox becomes available

## Verify DNS from terminal

```bash
dig fondamenta.media +short A
dig www.fondamenta.media +short CNAME
```

You should see the four `185.199.108–111.153` addresses and `juliafondamenta.github.io` for www.

## Updating the site later

Any changes pushed to the `main` branch deploy automatically:

```bash
cd ~/Desktop/fondamenta-website
git add .
git commit -m "Your update message"
git push
```

Changes go live within 1–2 minutes.
