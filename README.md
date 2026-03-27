# Ultrafox Swing

Official website for Ultrafox — Melbourne's continental style gypsy swing band.

**Live site:** <https://djangointhehills.github.io/ultrafox/>

## Structure

A single-page static site with no build step. All content lives in `index.html` as scrollable sections linked from the sticky navigation.

| File | Purpose |
|------|---------|
| `index.html` | All page content (hero, about, listen, shows, photos, members, contact) |
| `assets/styles.css` | Stylesheet |
| `assets/site.js` | Mobile menu, scroll-spy navigation, photo lightbox |
| `assets/images/` | Band photos, artwork and favicon |
| `404.html` | Custom 404 page |

## Hosting

Served via [GitHub Pages](https://pages.github.com/) from the `main` branch root. HTTPS is enabled by default for `*.github.io` domains.

### Custom domain (optional)

1. Add a `CNAME` file at the repo root containing the domain (e.g. `ultrafoxswing.com`).
2. Configure DNS at your registrar per [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
3. Enable **Enforce HTTPS** in the repo's Pages settings once DNS propagates.

## Local preview

```bash
python3 -m http.server 8080
```

Then open <http://127.0.0.1:8080/>.

## License

All band photos, artwork and written content are copyright Ultrafox Swing. All rights reserved.
