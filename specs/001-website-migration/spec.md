# Feature Specification: Parsons Ham Radio Club Website Migration to GitHub Pages

**Feature Branch**: `001-website-migration`
**Created**: 2025-10-30
**Status**: Draft
**Input**: User description: "Migration Spec"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Static Website Live on GitHub Pages (Priority: P1)

As a **ham radio club member or visitor**, I want to access the Parsons Amateur Radio Club website at its new GitHub Pages URL so that I can view all club information, events, learning resources, and podcasts exactly as they appeared before migration.

**Why this priority**: This is the MVP - getting the core static website live with zero visual changes. Until this is complete, we cannot take the old Raspberry Pi server offline. This delivers immediate value by providing free, reliable hosting with better uptime than the home server.

**Independent Test**: Navigate to all 19 pages on the GitHub Pages URL and verify they display identically to the current site. All images, galleries, slideshows, navigation, and layout must render pixel-perfect. This can be validated before implementing any dynamic features.

**Acceptance Scenarios**:

1. **Given** the migration is complete, **When** a visitor navigates to the GitHub Pages URL, **Then** they see the homepage with the welcome text, header slideshow (10 ham shack photos rotating), justified gallery (17 images), and Jssor slider (37 slides) all functioning identically to the original site
2. **Given** a visitor is on any page, **When** they use the navigation menu (desktop or mobile hamburger menu), **Then** all 19 pages are accessible and links work correctly
3. **Given** a visitor accesses the site on mobile, **When** the page loads, **Then** responsive design works identically to the original with proper scaling and mobile menu
4. **Given** a visitor views the Events page, **When** the page loads, **Then** the embedded Google Calendar displays club events correctly
5. **Given** a visitor views any Learning or Podcast page, **When** the page loads, **Then** all embedded YouTube videos and TuneIn podcast players function correctly

---

### User Story 2 - Contact Form Functionality (Priority: P2)

As a **prospective ham radio operator or community member**, I want to send a message to the club through the contact form so that I can ask questions, request presentations, or get information about becoming licensed.

**Why this priority**: The contact form is the primary way for non-members to communicate with the club. Without this, visitors have no easy way to reach out. However, the site is still valuable for information even without the contact form (they can call or email directly).

**Independent Test**: Fill out the contact form with test data (email, subject, message, optional file attachment) and submit. Verify that ae0aq@gmail.com receives the email with all form data and the attachment. This validates the Formspree integration independently of other features.

**Acceptance Scenarios**:

1. **Given** a visitor is on the Contact page, **When** they fill out the form (email, subject, message) and click Send, **Then** the form submits successfully and they are redirected to the homepage
2. **Given** the form was submitted, **When** checking ae0aq@gmail.com inbox, **Then** an email arrives with subject "Email from Parsons Ham Club Website" containing the visitor's email, subject, and message
3. **Given** a visitor attaches a file to the contact form, **When** they submit the form, **Then** the email received includes the file attachment
4. **Given** a visitor submits the form with invalid email, **When** they click Send, **Then** appropriate validation error message displays
5. **Given** spam prevention is active, **When** a bot attempts to submit the form, **Then** the submission is blocked by Formspree's spam protection

---

### User Story 3 - Site Owner Maintenance Workflow (Priority: P3)

As **Bob Hoffman (site owner)**, I want to update website content using VS Code and Git so that I can maintain club information (officers, text content, images, events) without needing server administration skills.

**Why this priority**: Long-term success depends on Bob being able to independently maintain the site. However, this is P3 because the migration can be completed and the site can go live even if training happens later. Initial content updates can be done with assistance.

**Independent Test**: Bob makes a simple text change (e.g., updating club officer names), commits the change in VS Code, pushes to GitHub, and verifies the change appears on the live site within 2 minutes. Success is measured by Bob completing this workflow without assistance.

**Acceptance Scenarios**:

1. **Given** Bob has VS Code and Git configured, **When** he opens the project folder, **Then** he can navigate to any HTML file and edit text content using familiar HTML tags
2. **Given** Bob has made changes to an HTML file, **When** he uses VS Code's Source Control panel to stage, commit, and push changes, **Then** the changes push to GitHub successfully
3. **Given** changes have been pushed to GitHub, **When** GitHub Pages rebuilds (1-2 minutes), **Then** the live website reflects the changes
4. **Given** Bob needs to add a new image, **When** he copies the image to the /images/ folder and references it in HTML, **Then** after committing and pushing, the image displays on the live site
5. **Given** Bob forgets HTML syntax, **When** he asks free Gemini AI for help with a specific task, **Then** he receives accurate guidance that enables him to complete the update

---

### User Story 4 - Zero Downtime Migration (Priority: P1)

As a **ham radio club officer**, I want the old Raspberry Pi site to remain operational until the new GitHub Pages site is fully validated so that there is no service interruption for club members and the public.

**Why this priority**: This is part of the MVP. The club cannot afford downtime or broken functionality. This user story ensures we validate everything works before switching over.

**Independent Test**: Deploy to GitHub Pages while keeping the old site running. Conduct full validation of the new site (all 19 pages, contact form, embeds). Only after complete validation do we update DNS or provide the new URL to club members. Old site stays up until validation passes.

**Acceptance Scenarios**:

1. **Given** the new site is deployed to GitHub Pages, **When** testing all features, **Then** the old Raspberry Pi site continues serving visitors without interruption
2. **Given** validation testing is in progress, **When** issues are discovered on the new site, **Then** fixes can be made and redeployed without affecting the old site
3. **Given** all validation tests pass on the new site, **When** the decision is made to switch over, **Then** DNS or URL updates can be made at a controlled time
4. **Given** the new site is live, **When** the old Raspberry Pi is shut down, **Then** no functionality is lost and all features continue working
5. **Given** an issue is discovered after switchover, **When** needed, **Then** the old site can be quickly brought back online as a fallback

---

### Edge Cases

- What happens when GitHub Pages goes down? (Extremely rare - 99.9% uptime SLA. If it occurs, visitors see a GitHub error page. No action needed as GitHub auto-recovers.)
- What happens when Formspree's free tier limit (50 submissions/month) is exceeded? (New submissions receive an error message. Club should monitor submission count monthly. For a small club, 50 should be sufficient.)
- What happens when someone tries to access the old PHP URLs (e.g., /imsearch.php)? (404 error. We could add redirect rules if needed, but search functionality is being removed.)
- What happens when Bob pushes broken HTML/CSS that breaks the site? (Git history allows rollback to previous working version. Training should include how to revert commits.)
- What happens when external embeds (YouTube, TuneIn, Google Calendar) change their embed code format? (Bob would need to update the HTML with new embed code. This is rare and would require support.)
- What happens when the Google Calendar ID changes? (Bob needs to update the calendar embed code in events.html. Training should cover this scenario.)
- What happens when images fail to load? (Browser shows broken image icon. This could happen if file paths are wrong - validate all image paths during migration.)
- What happens when the site is accessed from very old browsers? (The x5engine.js includes browser compatibility checks. Very old browsers may show a warning message, as they did on the original site.)

## Requirements *(mandatory)*

### Functional Requirements

**Core Website Migration**:
- **FR-001**: All 19 HTML pages MUST display with pixel-perfect visual fidelity to the original site
- **FR-002**: All navigation menu links MUST function correctly across desktop and mobile views
- **FR-003**: The hamburger mobile menu MUST expand/collapse and provide access to all pages
- **FR-004**: All 174 image files MUST display correctly with no broken image links
- **FR-005**: The header slideshow MUST auto-rotate through all 10 ham shack photos
- **FR-006**: The justified image gallery on the homepage MUST display all 17 ham radio topic images with click-to-enlarge functionality
- **FR-007**: The Jssor slider MUST display all 37 presentation slides with transition effects
- **FR-008**: All page-specific CSS files (/pcss/ directory) MUST load correctly to preserve page styling
- **FR-009**: All JavaScript libraries (jQuery, x5engine.js, Jssor, Justified Gallery, etc.) MUST function identically to original
- **FR-010**: Responsive design MUST work correctly on mobile, tablet, and desktop screen sizes

**External Integrations**:
- **FR-011**: The Google Calendar embed on events.html MUST display club events from calendar ID 3f0fiqgp4bdhs0ms88lq63u11s@group.calendar.google.com
- **FR-012**: All 5 YouTube video embeds MUST play correctly (digital-communications.html, morse-code.html, uhf-vhf.html, summits-on-the-air.html, solar-propagation.html)
- **FR-013**: All 4 TuneIn podcast player embeds MUST stream correctly (ARRL News, Ham Nation, This Week in Amateur Radio, Ham Radio 360)
- **FR-014**: The Google Docs PDF viewer on solar-propagation.html MUST display the QSL.net propagation document

**Contact Form**:
- **FR-015**: The contact form MUST collect visitor email address (required), subject (optional), message (optional), and file attachment (optional)
- **FR-016**: Form submissions MUST send email to ae0aq@gmail.com with subject "Email from Parsons Ham Club Website"
- **FR-017**: Email MUST include visitor's email address, subject, message, and any file attachment
- **FR-018**: Form MUST validate email address format before submission
- **FR-019**: Form MUST include spam protection to prevent bot submissions
- **FR-020**: After successful submission, user MUST be redirected to the homepage (index.html)

**File Cleanup**:
- **FR-021**: The /admin/ directory (856KB, 70+ PHP files) MUST be removed from repository
- **FR-022**: PHP engine files in /res/ (x5engine.php, PHPMailer files, access.inc.php, search.inc.php, imemail.inc.php) MUST be removed
- **FR-023**: The /imemail/ directory MUST be removed
- **FR-024**: The /captcha/ directory MUST be removed
- **FR-025**: The imsearch.php file MUST be removed
- **FR-026**: RSS feed references in HTML MUST be updated from x5feed.php to x5feed.xml
- **FR-027**: Search functionality MUST be removed (no replacement in initial migration)

**Hosting & Deployment**:
- **FR-028**: Website MUST be hosted on GitHub Pages at https://parsons-ham-club.github.io/parsonshamclub/
- **FR-029**: Repository MUST be public to enable free GitHub Pages hosting
- **FR-030**: HTTPS MUST be enforced (automatic via GitHub Pages)
- **FR-031**: GitHub Pages MUST auto-deploy within 2 minutes of pushing to main branch
- **FR-032**: .gitignore MUST exclude .claude/, node_modules/, .DS_Store, editor configs, and .specify/memory/* (except constitution.md)

**Maintainability**:
- **FR-033**: Local development MUST support simple preview using VS Code Live Server extension or similar
- **FR-034**: Git commit workflow MUST be executable through VS Code's GUI (no command line requirement for Bob)
- **FR-035**: Documentation MUST exist for common maintenance tasks: update text, add images, update officers, troubleshoot issues

### Key Entities

This is a static website migration with no database, but key data structures include:

- **HTML Page**: Represents one of 19 content pages; contains header (slideshow, navigation), main content area, footer (contact info, officers); generated by WebSite X5 in 2019
- **Image Asset**: Static image file in /images/, /gallery/, or /pluginAppObj/ directories; includes photos, graphics, icons; total 174 files (~17MB)
- **CSS Stylesheet**: Styling rules; includes global styles (/style/), page-specific styles (/pcss/), and plugin styles; defines responsive breakpoints and theme
- **JavaScript Library**: Client-side functionality; includes jQuery, x5engine.js, gallery plugins, sliders; self-hosted (no CDN dependencies)
- **External Embed**: Third-party content embedded via iframe or embed code; includes Google Calendar, YouTube videos, TuneIn players; controlled by external services
- **Form Submission**: Contact form data; includes visitor email, subject, message, optional attachment; processed by Formspree and emailed to club

## Success Criteria *(mandatory)*

### Measurable Outcomes

**Migration Completeness**:
- **SC-001**: All 19 pages load successfully on GitHub Pages URL with zero visual differences from original site (verified by side-by-side comparison)
- **SC-002**: All 174 images display correctly with no broken image links (verified by automated link checker)
- **SC-003**: Contact form successfully delivers test emails to ae0aq@gmail.com with all form data intact (verified by 5 test submissions)

**Performance & Reliability**:
- **SC-004**: Page load times on GitHub Pages are equal to or faster than original Raspberry Pi hosting (target: <3 seconds for homepage on standard broadband)
- **SC-005**: Website achieves 99.9% uptime (GitHub Pages SLA vs. home server with potential internet/power issues)
- **SC-006**: Mobile responsive design scores 90+ on Google Mobile-Friendly Test (maintains original mobile experience)

**Maintainability**:
- **SC-007**: Bob can successfully complete a text content update (edit, commit, push, verify live) in under 10 minutes without assistance (validated through training session)
- **SC-008**: Bob can add a new image to the website (upload file, reference in HTML, commit, push, verify) in under 15 minutes without assistance
- **SC-009**: Common maintenance tasks are documented with step-by-step instructions that Bob can follow independently

**Cost & Operations**:
- **SC-010**: Total hosting and operational costs are $0/year (GitHub Pages free tier, Formspree free tier)
- **SC-011**: Raspberry Pi server is successfully decommissioned with no loss of functionality
- **SC-012**: Zero downtime occurs during migration (old site remains available until new site is fully validated)

**Functionality**:
- **SC-013**: 100% of navigation links work correctly (all menu items, internal page links, footer links)
- **SC-014**: 100% of external embeds (Google Calendar, 5 YouTube videos, 4 TuneIn players) load and function correctly
- **SC-015**: Contact form spam protection prevents bot submissions while allowing legitimate messages (validated through test submissions)

## Assumptions

The following assumptions are made based on industry standards and the research conducted:

1. **Browser Support**: The site will continue to support the same browsers as the original (modern Chrome, Firefox, Safari, Edge; x5engine.js handles older browser warnings)
2. **Form Volume**: The club receives fewer than 50 contact form submissions per month (Formspree free tier limit)
3. **Content Update Frequency**: Bob updates the website 1-4 times per month on average (typical for club websites)
4. **Image Optimization**: Images can remain at current file sizes (~17MB total) as this is well within GitHub's 1GB repository limit; optimization is optional
5. **External Embed Stability**: Google Calendar, YouTube, and TuneIn embed formats will remain stable; if they change, Bob can update embed codes with documentation
6. **DNS/URL Strategy**: The club will use either the GitHub Pages URL directly (https://parsons-ham-club.github.io/parsonshamclub/) or optionally configure a custom domain later
7. **Search Removal Acceptable**: Removing site search functionality is acceptable because the site has only 19 pages with clear navigation; users can use browser Find (Ctrl+F) or Google site search
8. **RSS Feed Usage**: The static RSS feed (x5feed.xml) will be updated manually when needed; automated RSS generation is not required
9. **Backup Strategy**: Git repository serves as version control and backup; GitHub provides redundant storage
10. **Training Timeline**: Bob's training on VS Code + Git workflow can occur after initial migration is complete and validated

## Open Questions

**None** - All critical decisions have been made based on the constitution and research. The specification is complete and ready for planning.
