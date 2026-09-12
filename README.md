# Connect Therapy, PLLC Website

A free static website for www.connecttherapyonline.com. No paid web builder is required.

## Open in Visual Studio Code
1. Unzip this project.
2. In VS Code choose File > Open Folder and select `connect-therapy-website`.
3. Open `index.html` in a browser, or install the VS Code Live Server extension and choose **Open with Live Server**.

## Important before publishing
### Add the Telehealth Portal URL
Open `portal.html`. Find the button containing `Portal Link Coming Soon` and replace it with:
`<a class="button" href="YOUR-SECURE-PORTAL-URL" target="_blank" rel="noopener">Enter Secure Telehealth Portal</a>`

Only use the URL supplied by your HIPAA-compliant telehealth/EHR provider.

### Logo image
`assets/connect-therapy-logo.jpg` has a plain white background, so it will show a white box over the hero photo on the home page. For best results, ask your logo designer for a version with a transparent background saved as `assets/connect-therapy-logo.png`, then update the one `<img>` reference in `index.html` (in the `.logo-card` section) to point at it.

## Hosting this site for free
This is a static site (plain HTML/CSS/JS), so it doesn't need a paid web builder — any of these free static hosts will work:
- **GitHub Pages** (used in the walkthrough below)
- Cloudflare Pages
- Netlify
- Vercel

## Connecting your GoDaddy domain (step by step)

These steps assume you host the site on GitHub Pages, which is free and works well with a GoDaddy-registered domain. The DNS steps at the bottom apply the same way if you choose Netlify/Vercel/Cloudflare Pages instead — only the target address changes (that host's setup page will give you the exact value).

### 1. Put the site on GitHub Pages
1. Create a free account at github.com if you don't have one.
2. Create a new repository (e.g. `connect-therapy-website`) and upload all the files in this folder (`index.html`, `portal.html`, `styles.css`, `script.js`, and the `assets` folder) to it — either by dragging them into the GitHub web interface or pushing with git.
3. In the repository, go to **Settings > Pages**.
4. Under "Build and deployment," set the source to **Deploy from a branch**, choose the `main` branch and the `/ (root)` folder, then save.
5. GitHub will give you a temporary address like `https://yourusername.github.io/connect-therapy-website`. Confirm the site loads there before moving on.

### 2. Tell GitHub about your custom domain
1. Still in **Settings > Pages**, under "Custom domain," enter `www.connecttherapyonline.com` and save.
2. This automatically creates a `CNAME` file in your repository containing that domain — leave it there.
3. Check **Enforce HTTPS** once it becomes available (it can take a few minutes to a few hours after DNS is set up below).

### 3. Add DNS records in GoDaddy
Log in to godaddy.com, go to **My Products > DNS** (or **Manage DNS**) for `connecttherapyonline.com`, and add these records:

**For the `www` version (recommended as the primary address):**
- Type: `CNAME`
- Name: `www`
- Value: `yourusername.github.io` (your GitHub username, no `https://`)
- TTL: default is fine

**For the bare/apex domain (`connecttherapyonline.com` without `www`), so it also works:**
Add four `A` records, all with Name `@`, pointing at GitHub Pages' IP addresses:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Remove any existing `A` or `CNAME` records on `@` or `www` left over from GoDaddy's default parking page first, so they don't conflict.

### 4. Set the canonical domain
Since the README recommends `www` as canonical, add a **Forwarding** rule in GoDaddy (under the domain's settings) so `connecttherapyonline.com` forwards to `https://www.connecttherapyonline.com` — this avoids duplicate-content issues and keeps one consistent address in front of clients.

### 5. Wait for DNS and verify
- DNS changes can take anywhere from a few minutes to 24–48 hours to fully propagate.
- Once it resolves, go back to **Settings > Pages** on GitHub and confirm the domain shows as verified with no warnings, then turn on **Enforce HTTPS**.
- Visit `https://www.connecttherapyonline.com` to confirm the live site loads over HTTPS with the padlock icon.

## Domain
Primary domain: www.connecttherapyonline.com
Recommended: redirect connecttherapyonline.com to www.connecttherapyonline.com (or vice versa) so only one is canonical.

## Contact email
Website email: drbruzzeselmhc@gmail.com

## Privacy / clinical note
Do not collect protected health information through an ordinary static contact form or regular email. Use your HIPAA-compliant EHR/portal for clinical communication, intake paperwork, and protected information.

## Files
- `index.html` — full public website
- `portal.html` — dedicated telehealth portal landing page
- `styles.css` — colors/layout/mobile styling
- `script.js` — mobile navigation/current year
- `assets/connect-therapy-logo.jpg` — practice logo (full, with wordmark)
- `assets/ct-mark.jpg` — circular "CT" monogram used in the header/footer
- `assets/coastal-water.jpg` — hero/contact background photo
