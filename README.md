# Parsons Amateur Radio Club

Official website for the Parsons Amateur Radio Club (Parsons, Kansas)

**Live Site**: https://parsons-ham-club.github.io/parsonshamclub/

## About

The Parsons Amateur Radio Club serves ham radio operators in Southeast Kansas and surrounding areas. We offer:

- **Weekly Nets**: Local 2m and HF nets for practice and community
- **License Exams**: Regular testing sessions for new and upgrading hams
- **Learning Resources**: Digital modes, Morse code, propagation, and more
- **Community Service**: Emergency communications and public events
- **Social Activities**: Regular meetings and special operating events

Contact: ae0aq@yahoo.com | (620) 820-2066

## Technology Stack

**Hosting**: GitHub Pages (static site hosting)
**Original Design**: WebSite X5 Evolution 2019.3.17
**Contact Form**: Formspree (free tier - 50 submissions/month)
**External Services**:
- Google Calendar (event scheduling)
- YouTube (educational videos)
- TuneIn (podcast players)

## Site Structure

- **Homepage** (`index.html`): Club overview, photo gallery, slideshow
- **Events** (`events.html`): Calendar of upcoming activities
- **Learning** (`digital-communications.html`, `morse-code.html`, etc.): Educational resources
- **Local Nets** (`local-nets.html`): Net schedules and participation info
- **Exams** (`exams.html`): Testing session information
- **Podcasts** (`arrl-news.html`, `ham-nation.html`, etc.): Ham radio audio content
- **Community Service** (`community-service.html`): Public service events
- **Contact** (`contact.html`): Get in touch with the club
- **About Us** (`about-us.html`): Club history and officers

## Development

This site uses static HTML/CSS/JavaScript - no server-side code required.

**Local Testing**:
1. Clone the repository
2. Open any `.html` file in a web browser
3. Or use VS Code Live Server extension for hot reload

**Deployment**:
- GitHub Pages auto-deploys from the `main` branch
- Changes pushed to `main` are live within 1-2 minutes
- Use feature branches for development, merge to `main` when ready

## Maintenance

**Updating Content**:
- Edit HTML files directly in `/` (root directory)
- Images stored in `/images/`, `/gallery/`, `/pluginAppObj/`
- Styles in `/style/`, `/res/`, `/css/`

**Contact Form**:
- Managed via Formspree dashboard: https://formspree.io
- Submissions sent to ae0aq@yahoo.com
- Monthly quota: 50 submissions (free tier)

## Migration History

**October 2025**: Migrated from Raspberry Pi (PHP) to GitHub Pages (static)
- Removed 125 PHP files (~2MB)
- Replaced PHP contact form with Formspree
- Zero-cost hosting and maintenance
- 100% visual fidelity preserved

Full migration documentation: `specs/001-website-migration/`

## License

© Parsons Amateur Radio Club. All rights reserved.
