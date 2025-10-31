# Migration Research & Decisions

**Feature**: Parsons Ham Radio Club Website Migration to GitHub Pages
**Date**: 2025-10-30
**Purpose**: Document research findings and migration strategy decisions

## 1. Formspree Integration for Contact Form

### Decision
Use **Formspree free tier** for contact form processing.

### Rationale
- **Free tier sufficient**: 50 submissions/month limit exceeds typical small club needs (est. 5-15/month)
- **No credit card required**: Free tier signup with email only
- **Simple integration**: Change form `action` attribute URL, no JavaScript required
- **Spam protection included**: Honeypot fields + reCAPTCHA automatic
- **Email delivery**: Direct to ae0aq@gmail.com (existing requirement)
- **File upload support**: Handles form attachments
- **Custom redirect**: Can configure success redirect to index.html

###Alternatives Considered
1. **Netlify Forms** - Rejected: Requires migrating entire site to Netlify (constitution requires GitHub Pages)
2. **Google Forms** - Rejected: Different UX (redirects to Google), doesn't maintain site styling
3. **FormKeep** - Rejected: No free tier (starts at $10/month, violates zero-cost principle)
4. **Custom serverless (AWS Lambda/Vercel)** - Rejected: Complexity too high for Bob to maintain

### Implementation Notes

**Setup Steps**:
1. Create Formspree account at formspree.io with ae0aq@gmail.com
2. Create new form, get Form ID (format: `xpznABCD`)
3. Note Form URL: `https://formspree.io/f/xpznABCD`

**HTML Modification** (contact.html line 231):
```html
<!-- BEFORE -->
<form id="imObjectForm_3_form" action="imemail/imEmailForm.php" method="post" enctype="multipart/form-data">

<!-- AFTER -->
<form id="imObjectForm_3_form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Field Name Mapping**:
- `imObjectForm_3_2` (email) → Formspree recognizes `type="email"` automatically
- `imObjectForm_3_3` (subject) → Keep `name="imObjectForm_3_3"`, Formspree passes through
- `imObjectForm_3_4` (message) → Keep `name="imObjectForm_3_4"`, Formspree passes through
- `imObjectForm_3_5` (file) → Formspree handles `type="file"` automatically

**Formspree Configuration** (via dashboard):
- Set recipient: ae0aq@gmail.com
- Set subject template: "Email from Parsons Ham Club Website"
- Set redirect URL: https://parsons-ham-club.github.io/parsonshamclub/index.html
- Enable reCAPTCHA: Yes (spam protection)

**Validation Plan**:
1. Submit test form with all fields populated
2. Verify email arrives at ae0aq@gmail.com with correct subject
3. Verify redirect to homepage works
4. Test with attachment (< 10MB file)
5. Test spam protection (honeypot field test)

**Limitations**:
- 50 submissions/month on free tier (club should monitor via Formspree dashboard)
- If exceeded, upgrade to paid plan ($10/month) or users see "quota exceeded" message

---

## 2. Visual Regression Testing Approach

### Decision
Use **manual side-by-side comparison** with structured checklist.

### Rationale
- **Zero cost**: No paid tools required (BackstopJS would require Node.js setup, complexity)
- **Simplicity**: Bob can verify changes visually without technical tools
- **Sufficient for 19 pages**: Manual check feasible for small site
- **Captures subjective issues**: Human eye catches layout/styling problems automated tools miss
- **Browser compatibility**: Test across Chrome, Firefox, Safari, Edge (what club members use)

### Alternatives Considered
1. **Percy (visual regression SaaS)** - Rejected: Paid service ($29/month), violates zero-cost principle
2. **BackstopJS (automated screenshots)** - Rejected: Requires Node.js setup, npm install, config complexity
3. **Puppeteer + custom scripts** - Rejected: Too complex for Bob to maintain
4. **No testing** - Rejected: Violates constitution principle I (NON-NEGOTIABLE visual fidelity)

### Implementation Notes

**Testing Checklist** (for each of 19 pages):
- [ ] Header slideshow displays (10 ham shack photos rotate)
- [ ] Navigation menu works (desktop + mobile hamburger)
- [ ] Main content layout matches original
- [ ] Images display correctly (no broken links)
- [ ] Footer displays (contact info, officers)
- [ ] Page-specific CSS applied (colors, fonts, spacing)
- [ ] Responsive design works (mobile/tablet/desktop)

**Browser Testing Matrix**:
| Browser | Desktop | Mobile | Notes |
|---------|---------|--------|-------|
| Chrome  | ✓       | ✓      | Primary test browser |
| Firefox | ✓       | ✓      | Secondary |
| Safari  | ✓       | ✓      | macOS/iOS users |
| Edge    | ✓       | -      | Windows users |

**Testing Workflow**:
1. Open original site (Raspberry Pi URL) in one browser tab
2. Open new site (GitHub Pages URL) in another tab
3. Navigate to same page in both tabs
4. Compare side-by-side (use split screen if possible)
5. Check all checklist items for that page
6. Document any discrepancies
7. Repeat for all 19 pages

**Acceptance Criteria**: Zero visual differences detected on all 19 pages across all tested browsers.

---

## 3. RSS Feed Static Alternative

### Decision
Keep **existing static XML file** (x5feed.xml) and update HTML references.

### Rationale
- **File already exists**: x5feed.xml present in repository with valid RSS 2.0 format
- **Minimal updates**: Feed contains one static entry (SOTA info from 2018) - low update frequency acceptable
- **Manual updates sufficient**: RSS format is simple XML, Bob can edit manually when needed
- **No automation required**: Club doesn't publish frequent news/blog posts requiring automated RSS generation
- **Constitution compliant**: Minimizes file changes (just update references from .php to .xml)

### Alternatives Considered
1. **Client-side RSS generation (JavaScript)** - Rejected: Overcomplexity for one static entry
2. **Remove RSS entirely** - Rejected: May break feed readers subscribed to club updates
3. **GitHub Actions automated RSS** - Rejected: Adds build complexity, violates no-build-tools principle

### Implementation Notes

**File Check**: Verify x5feed.xml exists and is valid RSS 2.0 format.
```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Summits on the Air</title>
    <link>http://localhost/</link>
    <item>
      <title>Summits on the Air</title>
      <pubDate>Sat, 17 Nov 2018 00:00:00 +0000</pubDate>
      <description>...</description>
    </item>
  </channel>
</rss>
```

**HTML Updates Needed** (all 19 HTML files, line 24 or 33):
```html
<!-- BEFORE -->
<link rel="alternate" type="application/rss+xml" title="Summits on the Air" href="x5feed.php" />

<!-- AFTER -->
<link rel="alternate" type="application/rss+xml" title="Summits on the Air" href="x5feed.xml" />
```

**Future Updates** (manual process for Bob):
1. Open x5feed.xml in VS Code
2. Edit `<title>`, `<pubDate>`, `<description>` fields as needed
3. Save, commit, push to GitHub
4. Feed readers will pick up changes on next poll

**Validation**: Subscribe to feed URL in RSS reader (Feedly, etc.) and verify it loads correctly.

---

## 4. Git Workflow for Non-Developer

### Decision
Use **VS Code Source Control panel** (GUI) with Git operations via buttons/menus.

### Rationale
- **No command line required**: Entire Git workflow executable through VS Code GUI
- **Visual feedback**: Source Control panel shows changed files, diff views, commit history
- **Simplified commits**: Write message in text box, click checkmark to commit
- **One-click push**: "Sync Changes" button handles push/pull in one action
- **Undo support**: GUI shows options to revert changes, discard files
- **Bob's preference**: He's comfortable with GUIs, not command line (constitution requirement)

### Alternatives Considered
1. **Command line Git** - Rejected: Intimidating for non-developers, easy to make mistakes
2. **GitHub Desktop app** - Rejected: Extra app to install/learn, VS Code already has Git integration
3. **GitKraken GUI** - Rejected: Paid tool ($4.95/month for Pro), violates zero-cost principle
4. **Direct GitHub web editor** - Rejected: Can't test changes locally before committing

### Implementation Notes

**VS Code Setup**:
1. Install VS Code from code.visualstudio.com
2. Install Git from git-scm.com (if not already installed)
3. Configure Git user:
   ```bash
   git config --global user.name "Bob Hoffman"
   git config --global user.email "ae0aq@gmail.com"
   ```
4. Clone repository in VS Code (Command Palette → Git: Clone → paste GitHub URL)

**Daily Workflow (Screenshots in quickstart.md)**:
1. **Make changes**: Edit any HTML/CSS/image files in VS Code
2. **View changes**: Click Source Control icon in left sidebar (see modified files list)
3. **Review diffs**: Click any file to see before/after comparison
4. **Stage changes**: Click + button next to files to stage for commit
5. **Write message**: Type commit message in text box (e.g., "Update club officers on contact page")
6. **Commit**: Click ✓ checkmark button above message box
7. **Push**: Click "Sync Changes" button (pushes to GitHub)
8. **Wait**: GitHub Pages rebuilds in 1-2 minutes
9. **Verify**: Check live site at https://parsons-ham-club.github.io/parsonshamclub/

**Common Pitfalls & Solutions**:
- **Push rejected** (remote has changes): Click "Pull" first, then "Push"
- **Uncommitted changes** (can't switch branches): Commit or stash changes first
- **Merge conflicts** (rare for solo developer): Use VS Code merge conflict resolver
- **Wrong commit message**: Can amend last commit (Git → Commit → Amend Previous Commit)

**Best Practices for Bob**:
- Commit frequently with descriptive messages
- Test changes locally with Live Server before pushing
- Pull before starting work session (if collaborating)
- Don't commit package.json, node_modules, .DS_Store (gitignore handles this)

---

## 5. Local Testing Setup

### Decision
Use **VS Code Live Server extension** for local preview.

### Rationale
- **One-click start**: Right-click HTML file → "Open with Live Server"
- **Auto-reload**: Browser refreshes automatically when files saved
- **Port 5500 default**: http://localhost:5500/index.html (simple URL)
- **No configuration**: Works out of box, no config files
- **VS Code integrated**: Bob already using VS Code for editing
- **Free**: Extension is free and open-source

### Alternatives Considered
1. **Python SimpleHTTPServer** - Rejected: Requires command line (`python -m http.server`), manual refresh
2. **Node.js http-server** - Rejected: Requires npm install, command line, extra complexity
3. **Brackets editor** - Rejected: Different editor, Bob already learning VS Code
4. **Direct file:// protocol** - Rejected: Doesn't work for external embeds (CORS issues)

### Implementation Notes

**Setup**:
1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X or Cmd+Shift+X)
3. Search "Live Server"
4. Install "Live Server" by Ritwick Dey (5-star rated, 30M+ downloads)

**Usage**:
1. Open project folder in VS Code (File → Open Folder → select parsonshamclub)
2. Navigate to any HTML file (e.g., index.html)
3. Right-click in editor
4. Select "Open with Live Server"
5. Browser opens automatically at http://localhost:5500/index.html

**Testing Workflow**:
1. Edit HTML/CSS file
2. Save (Ctrl+S or Cmd+S)
3. Browser auto-refreshes with changes
4. Verify changes look correct
5. Repeat until satisfied
6. Commit and push to GitHub

**Limitations**:
- Live Server only works for local testing (not for production)
- External embeds (YouTube, TuneIn, Google Calendar) may not load in localhost (CORS)
- Solution: Test those features on GitHub Pages after deployment

**Fallback Option**: If Live Server doesn't work, Bob can double-click HTML file (opens in browser), then manually refresh after edits. Not ideal but works.

---

## 6. Original Website Archive & Testing Reference

### Decision
Use **archived website files** from `WebSite X5 - Websites.zip` as reference for validation testing.

### Rationale
- **Raspberry Pi no longer functional**: Original hosting server is offline, cannot access live site for side-by-side comparison
- **Complete archive available**: Zip file contains full website snapshot from Oct 17, 2023 (last backup before Pi failure)
- **All files preserved**: Archive includes all 18 HTML pages, 174 images, CSS, JS, and PHP files for reference
- **Testing approach**: Extract archive locally to compare GitHub Pages deployment against original files

### Implementation Notes

**Archive Location**: `WebSite X5 - Websites.zip` (14MB) in repository root

**Archive Contents**:
- 18 HTML pages (last modified Sep 9, 2023)
- All directories: /admin/, /images/, /gallery/, /res/, /style/, /pcss/, /pluginAppObj/
- PHP files: imsearch.php, x5feed.php (to be replaced/removed)
- Static files: x5feed.xml, sitemap.xml, favicon.png

**Testing Workflow**:
1. Extract archive to temporary location: `/tmp/original-website/`
2. Open extracted index.html in browser (File → Open)
3. Open GitHub Pages URL in another browser tab
4. Compare side-by-side for visual regression testing
5. Validate all 18 pages using this method

**Alternative URL**: Since Raspberry Pi is offline, visual regression testing will use:
- **Original**: Extracted archive files opened locally in browser
- **New**: GitHub Pages URL (https://parsons-ham-club.github.io/parsonshamclub/)

**Note**: The archive represents the final state of the website before migration. No live Raspberry Pi URL available for testing.

**Rollback Procedure**: Since Raspberry Pi is offline, rollback simply means NOT merging the migration branch to main. The migration work stays on the `001-website-migration` branch until full validation passes. If issues are discovered:
1. Fix issues on the feature branch
2. Re-test using validation-checklist.md
3. Only merge to `main` when all 126 checks pass
4. GitHub Pages will auto-deploy from `main` branch only

---

## Summary of Decisions

| Research Topic | Decision | Key Benefit |
|----------------|----------|-------------|
| Contact Form | Formspree free tier | Zero cost, simple integration, spam protection |
| Visual Testing | Manual side-by-side comparison | Zero cost, 19 pages manageable manually |
| RSS Feed | Static XML (x5feed.xml) | Already exists, minimal updates needed |
| Git Workflow | VS Code Source Control GUI | No command line, visual feedback |
| Local Testing | VS Code Live Server extension | One-click start, auto-reload |

**Constitution Compliance**: All decisions align with principles:
- ✅ Zero Cost Operation (Formspree free, manual testing, free tools)
- ✅ Maintainability First (VS Code GUI, no command line)
- ✅ Static-First Architecture (Formspree client-side, static XML)
- ✅ Minimize File Changes (RSS uses existing file, form action URL change only)

**Ready for Phase 1**: Generate data-model.md, contracts/, quickstart.md
