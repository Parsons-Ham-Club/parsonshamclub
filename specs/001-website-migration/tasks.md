# Tasks: Parsons Ham Radio Club Website Migration to GitHub Pages

**Input**: Design documents from `/specs/001-website-migration/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/formspree-integration.md, quickstart.md

**Tests**: Manual testing only (no automated tests) - visual regression and functional validation

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

## Path Conventions

This is a static website migration. All paths are relative to repository root:
- HTML files: `/*.html` (19 pages at root)
- CSS: `/style/`, `/pcss/`
- JavaScript: `/res/`, `/appsresources/`
- Images: `/images/`, `/gallery/`, `/pluginAppObj/`
- PHP to delete: `/admin/`, `/imemail/`, `/captcha/`, `/res/*.php`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare repository for migration and validate environment

- [X] T001 Verify all website files are committed to Git repository (check 18 HTML, 47 CSS, 24 JS, 174 images)
- [X] T002 Create feature branch `001-website-migration` from main branch
- [X] T003 [P] Verify .gitignore excludes .claude/, node_modules/, .DS_Store, .specify/memory/* (except constitution.md)
- [X] T004 [P] Document current Raspberry Pi URL for side-by-side testing in research.md

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T005 Create complete file inventory checklist for visual regression testing (all 18 HTML pages)
- [X] T006 [P] Setup local testing environment: VS Code + Live Server extension installed and verified
- [X] T007 [P] Create backup of all PHP files being deleted (tar.gz archive for reference: admin/, imemail/, captcha/, res/*.php)

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 4 - Zero Downtime Migration (Priority: P1) 🎯 MVP PART 1

**Goal**: Ensure old Raspberry Pi site stays operational during migration, allowing validation before switchover

**Independent Test**: Old site continues to serve visitors while new GitHub Pages site is being built and tested

**Why Phase 3**: This is executed FIRST (before US1) because it establishes the safety net for the entire migration

### Implementation for User Story 4

- [X] T008 [US4] Verify original site archive is accessible and complete (all 18 pages verified in archive)
- [X] T009 [US4] Document archive-based testing approach for fallback reference in research.md (completed in T004)
- [X] T010 [US4] Create validation checklist (18 pages × 7 test criteria = 126 checks) in specs/001-website-migration/validation-checklist.md (completed in T005)
- [X] T011 [US4] Establish rollback procedure documentation: feature branch isolation until validation passes

**Checkpoint**: Safety net established - old site remains operational, rollback plan documented

---

## Phase 4: User Story 1 - Static Website Live on GitHub Pages (Priority: P1) 🎯 MVP PART 2

**Goal**: Get core static website live with zero visual changes - 19 pages, all images, galleries, slideshows working identically

**Independent Test**: Navigate to all 19 pages on GitHub Pages URL and verify pixel-perfect match to original site

### File Cleanup for User Story 1

- [ ] T012 [P] [US1] Delete /admin/ directory (856KB, 70+ files) from repository
- [ ] T013 [P] [US1] Delete /imemail/ directory (contact form PHP processor) from repository
- [ ] T014 [P] [US1] Delete /captcha/ directory (PHP captcha generator) from repository
- [ ] T015 [US1] Delete PHP engine files from /res/: x5engine.php, access.inc.php, search.inc.php, imemail.inc.php
- [ ] T016 [P] [US1] Delete PHPMailer files from /res/: class.phpmailer.php, class.smtp.php, class.exception.php, PHPMailerAutoload.php, l10n.php
- [ ] T017 [P] [US1] Delete imsearch.php from repository root (search page)
- [ ] T018 [US1] Commit file deletions with message: "Remove PHP dependencies for GitHub Pages migration"

### RSS Feed Updates for User Story 1

- [ ] T019 [P] [US1] Update index.html line 33: change `href="x5feed.php"` to `href="x5feed.xml"`
- [ ] T020 [P] [US1] Update contact.html line 24: change `href="x5feed.php"` to `href="x5feed.xml"`
- [ ] T021 [P] [US1] Update about-us.html line 24: change `href="x5feed.php"` to `href="x5feed.xml"`
- [ ] T022 [P] [US1] Update events.html line 24: change `href="x5feed.php"` to `href="x5feed.xml"`
- [ ] T023 [P] [US1] Update exams.html line 24: change `href="x5feed.php"` to `href="x5feed.xml"`
- [ ] T024 [P] [US1] Update local-nets.html line 24: change `href="x5feed.php"` to `href="x5feed.xml"`
- [ ] T025 [P] [US1] Update arrl-news.html line 24: change `href="x5feed.php"` to `href="x5feed.xml"`
- [ ] T026 [P] [US1] Update ham-nation.html line 24: change `href="x5feed.php"` to `href="x5feed.xml"`
- [ ] T027 [P] [US1] Update ham-radio-360.html line 24: change `href="x5feed.php"` to `href="x5feed.xml"`
- [ ] T028 [P] [US1] Update this-week-in-amateur-radio.html line 24: change `href="x5feed.php"` to `href="x5feed.xml"`
- [ ] T029 [P] [US1] Update digital-communications.html line 24: change `href="x5feed.php"` to `href="x5feed.xml"`
- [ ] T030 [P] [US1] Update morse-code.html line 24: change `href="x5feed.php"` to `href="x5feed.xml"`
- [ ] T031 [P] [US1] Update uhf-vhf.html line 24: change `href="x5feed.php"` to `href="x5feed.xml"`
- [ ] T032 [P] [US1] Update hf.html line 24: change `href="x5feed.php"` to `href="x5feed.xml"`
- [ ] T033 [P] [US1] Update summits-on-the-air.html line 24: change `href="x5feed.php"` to `href="x5feed.xml"`
- [ ] T034 [P] [US1] Update solar-propagation.html line 24: change `href="x5feed.php"` to `href="x5feed.xml"`
- [ ] T035 [P] [US1] Update community-service.html line 24: change `href="x5feed.php"` to `href="x5feed.xml"`
- [ ] T036 [P] [US1] Update interview-on-community-service.html line 24: change `href="x5feed.php"` to `href="x5feed.xml"`
- [ ] T037 [US1] Commit RSS feed reference updates with message: "Update RSS feed references from x5feed.php to x5feed.xml"

### Local Validation for User Story 1

- [ ] T038 [US1] Test all 19 pages locally using Live Server extension (verify no broken links from file deletions)
- [ ] T039 [US1] Verify all images load correctly (174 images across /images/, /gallery/, /pluginAppObj/)
- [ ] T040 [US1] Verify header slideshow rotates through 10 ham shack photos on index.html
- [ ] T041 [US1] Verify justified gallery displays 17 images correctly on index.html
- [ ] T042 [US1] Verify Jssor slider displays 37 slides with transitions on index.html
- [ ] T043 [US1] Verify navigation menu works (desktop + mobile hamburger menu) on all pages
- [ ] T044 [US1] Verify responsive design works (test mobile viewport in browser dev tools)

### GitHub Pages Deployment for User Story 1

- [ ] T045 [US1] Push all changes to feature branch `001-website-migration`
- [ ] T046 [US1] Merge feature branch to main branch (GitHub Pages deploys from main)
- [ ] T047 [US1] Wait 1-2 minutes for GitHub Pages rebuild to complete
- [ ] T048 [US1] Verify site is live at https://parsons-ham-club.github.io/parsonshamclub/

### Visual Regression Testing for User Story 1 (Manual)

**Browser: Chrome Desktop**
- [ ] T049 [US1] Compare index.html: Raspberry Pi vs GitHub Pages (header, gallery, slider, navigation, footer)
- [ ] T050 [US1] Compare contact.html: Raspberry Pi vs GitHub Pages (NOTE: form won't work yet - that's US2)
- [ ] T051 [US1] Compare about-us.html: Raspberry Pi vs GitHub Pages
- [ ] T052 [US1] Compare events.html: Raspberry Pi vs GitHub Pages (Google Calendar embed)
- [ ] T053 [US1] Compare exams.html: Raspberry Pi vs GitHub Pages
- [ ] T054 [US1] Compare local-nets.html: Raspberry Pi vs GitHub Pages
- [ ] T055 [US1] Compare arrl-news.html: Raspberry Pi vs GitHub Pages (TuneIn embed)
- [ ] T056 [US1] Compare ham-nation.html: Raspberry Pi vs GitHub Pages (TuneIn embed)
- [ ] T057 [US1] Compare ham-radio-360.html: Raspberry Pi vs GitHub Pages (TuneIn embed)
- [ ] T058 [US1] Compare this-week-in-amateur-radio.html: Raspberry Pi vs GitHub Pages (TuneIn embed)
- [ ] T059 [US1] Compare digital-communications.html: Raspberry Pi vs GitHub Pages (YouTube embed)
- [ ] T060 [US1] Compare morse-code.html: Raspberry Pi vs GitHub Pages (YouTube embed)
- [ ] T061 [US1] Compare uhf-vhf.html: Raspberry Pi vs GitHub Pages (YouTube embed)
- [ ] T062 [US1] Compare hf.html: Raspberry Pi vs GitHub Pages (external iframe)
- [ ] T063 [US1] Compare summits-on-the-air.html: Raspberry Pi vs GitHub Pages (YouTube + RSS widget)
- [ ] T064 [US1] Compare solar-propagation.html: Raspberry Pi vs GitHub Pages (YouTube + PDF viewer)
- [ ] T065 [US1] Compare community-service.html: Raspberry Pi vs GitHub Pages
- [ ] T066 [US1] Compare interview-on-community-service.html: Raspberry Pi vs GitHub Pages

**Browser: Chrome Mobile (Dev Tools)**
- [ ] T067 [US1] Test mobile responsive design on index.html (hamburger menu, image scaling)
- [ ] T068 [US1] Test mobile responsive design on contact.html
- [ ] T069 [US1] Test mobile navigation menu on all 19 pages (tap hamburger, verify menu expands)

**Browser: Firefox Desktop**
- [ ] T070 [US1] Spot check 5 pages for visual consistency (index, contact, events, digital-communications, summits-on-the-air)

**Browser: Safari Desktop (Mac)**
- [ ] T071 [US1] Spot check 5 pages for visual consistency (index, contact, events, arrl-news, solar-propagation)

### External Embed Validation for User Story 1

- [ ] T072 [US1] Verify Google Calendar embed loads on events.html (calendar ID: 3f0fiqgp4bdhs0ms88lq63u11s@group.calendar.google.com)
- [ ] T073 [US1] Verify YouTube video plays on digital-communications.html (video ID: RwEJjvkl_w4)
- [ ] T074 [US1] Verify YouTube video plays on morse-code.html (video ID: JVqjF6VWnzw)
- [ ] T075 [US1] Verify YouTube video plays on uhf-vhf.html (video ID: g331FDP8_cA)
- [ ] T076 [US1] Verify YouTube video plays on summits-on-the-air.html (video ID: 1usAFerA7vE)
- [ ] T077 [US1] Verify YouTube videos play on solar-propagation.html (2 videos)
- [ ] T078 [US1] Verify TuneIn player streams on arrl-news.html (TuneIn ID: p1023163)
- [ ] T079 [US1] Verify TuneIn player streams on ham-nation.html (TuneIn ID: p355704)
- [ ] T080 [US1] Verify TuneIn player streams on ham-radio-360.html (TuneIn ID: p662317)
- [ ] T081 [US1] Verify TuneIn player streams on this-week-in-amateur-radio.html (TuneIn ID: p244619)
- [ ] T082 [US1] Verify Google Docs PDF viewer displays on solar-propagation.html (QSL.net propagation doc)

**Checkpoint**: User Story 1 complete - static website fully functional on GitHub Pages with pixel-perfect visual fidelity

---

## Phase 5: User Story 2 - Contact Form Functionality (Priority: P2)

**Goal**: Replace PHP contact form with Formspree integration, enabling visitors to send messages to ae0aq@yahoo.com

**Independent Test**: Fill out contact form with test data (email, subject, message, optional attachment) and verify email arrives at ae0aq@yahoo.com with all form data intact

### Formspree Account Setup for User Story 2

- [ ] T083 [US2] Create Formspree account at https://formspree.io with ae0aq@yahoo.com
- [ ] T084 [US2] Verify email address (check inbox for Formspree verification email)
- [ ] T085 [US2] Select Free Plan (50 submissions/month)
- [ ] T086 [US2] Create new form in Formspree dashboard: "Parsons Ham Club Contact Form"
- [ ] T087 [US2] Note Form ID from Formspree dashboard (format: xpznABCD)

### Formspree Configuration for User Story 2

- [ ] T088 [US2] Configure email recipient: ae0aq@yahoo.com (should be pre-filled from account)
- [ ] T089 [US2] Configure subject template: "Email from Parsons Ham Club Website"
- [ ] T090 [US2] Configure success redirect: https://parsons-ham-club.github.io/parsonshamclub/index.html
- [ ] T091 [US2] Enable reCAPTCHA v2 Invisible for spam protection
- [ ] T092 [US2] Enable archive submissions in Formspree dashboard
- [ ] T093 [US2] Add domain whitelist: parsons-ham-club.github.io (prevents form hijacking)

### HTML Form Update for User Story 2

- [ ] T094 [US2] Update contact.html line 231: change `action="imemail/imEmailForm.php"` to `action="https://formspree.io/f/YOUR_FORM_ID"` (replace YOUR_FORM_ID with actual Form ID from T087)
- [ ] T095 [US2] Commit form action update with message: "Integrate Formspree for contact form (replace PHP processor)"
- [ ] T096 [US2] Push changes to main branch
- [ ] T097 [US2] Wait 1-2 minutes for GitHub Pages rebuild

### Formspree Validation Testing for User Story 2

**Test 1: Valid Submission (all fields)**
- [ ] T098 [US2] Fill out form: valid email (test@example.com), subject ("Test submission"), message ("This is a test"), attach small PDF (<10MB)
- [ ] T099 [US2] Click Send button
- [ ] T100 [US2] Verify redirect to homepage (index.html) after submission
- [ ] T101 [US2] Check ae0aq@yahoo.com inbox for email with subject "Email from Parsons Ham Club Website"
- [ ] T102 [US2] Verify email contains visitor email (test@example.com), subject, message, and PDF attachment
- [ ] T103 [US2] Verify Reply-To header is set to visitor email (test@example.com)

**Test 2: Valid Submission (required only)**
- [ ] T104 [US2] Fill out form: valid email only, leave subject/message/attachment empty
- [ ] T105 [US2] Verify email arrives at ae0aq@yahoo.com with minimal data

**Test 3: Invalid Email**
- [ ] T106 [US2] Fill out form with invalid email format (e.g., "notanemail")
- [ ] T107 [US2] Verify Formspree shows validation error (or HTML5 email validation catches it)

**Test 4: File Attachment**
- [ ] T108 [US2] Fill out form with valid email + PDF attachment (<10MB)
- [ ] T109 [US2] Verify email arrives with PDF attached correctly

**Test 5: Large File Rejection**
- [ ] T110 [US2] Fill out form with large file (>10MB)
- [ ] T111 [US2] Verify Formspree rejects with "File too large" error

**Test 6: Spam Protection**
- [ ] T112 [US2] Manually fill honeypot field (`imSpProt`) in browser dev tools
- [ ] T113 [US2] Submit form and verify submission is blocked (no email sent)

**Test 7: Reply Functionality**
- [ ] T114 [US2] Submit valid form from test@example.com
- [ ] T115 [US2] In Gmail, click "Reply" on received email and verify it goes to test@example.com

**Test 8: Mobile Form Submission**
- [ ] T116 [US2] Test form submission on mobile viewport (Chrome dev tools)
- [ ] T117 [US2] Verify form works identically on mobile (touch targets, keyboard input, redirect)

### Formspree Documentation for User Story 2

- [ ] T118 [US2] Document Form ID in research.md for future reference (in case Bob needs to create new form)
- [ ] T119 [US2] Add troubleshooting section to quickstart.md: "What if contact form stops working?" (check Formspree quota, dashboard link)

**Checkpoint**: User Story 2 complete - contact form functional and validated with 8 test scenarios passing

---

## Phase 6: User Story 3 - Site Owner Maintenance Workflow (Priority: P3)

**Goal**: Enable Bob to independently maintain the website using VS Code + Git GUI workflow with no command line required

**Independent Test**: Bob makes a simple text change (e.g., updating club officer names), commits in VS Code, pushes to GitHub, and verifies change appears on live site within 2 minutes - without assistance

### Training Material Preparation for User Story 3

- [ ] T120 [US3] Review quickstart.md for completeness (verify all 5 sections present: setup, workflow, common tasks, troubleshooting, help)
- [ ] T121 [US3] Create visual aids: take screenshots of VS Code Source Control panel, staging changes, commit button, sync button
- [ ] T122 [US3] Add screenshots to quickstart.md (embed or link to /docs/screenshots/ folder)
- [ ] T123 [US3] Test each common task from quickstart.md personally (update text, add image, update officers, fix typo)
- [ ] T124 [US3] Validate troubleshooting scenarios work (test push failure, revert commit, check image path)

### Bob's Environment Setup for User Story 3

**Prerequisites: Bob must be present for these tasks**

- [ ] T125 [US3] Install VS Code on Bob's computer (download from https://code.visualstudio.com)
- [ ] T126 [US3] Install Git on Bob's computer (download from https://git-scm.com/downloads or verify with `git --version`)
- [ ] T127 [US3] Configure Git with Bob's name and email: `git config --global user.name "Bob Hoffman"` and `git config --global user.email "ae0aq@yahoo.com"`
- [ ] T128 [US3] Clone repository in VS Code: Command Palette → Git: Clone → paste https://github.com/Parsons-Ham-Club/parsonshamclub.git
- [ ] T129 [US3] Install Live Server extension in VS Code (Extensions → search "Live Server" → Install)
- [ ] T130 [US3] Authenticate Bob's GitHub account in VS Code (when first push is attempted, VS Code will prompt)

### Hands-On Training Session for User Story 3

**Prerequisites: Bob must be present, environment setup complete (T125-T130)**

- [ ] T131 [US3] Walk through Daily Workflow (5-step process): Edit → Preview → Stage → Commit → Push
- [ ] T132 [US3] Exercise 1: Bob updates club officer name on contact.html (find text, edit, save, preview with Live Server)
- [ ] T133 [US3] Exercise 1 continued: Bob stages changes (Source Control panel, click + button)
- [ ] T134 [US3] Exercise 1 continued: Bob writes commit message ("Update club secretary name")
- [ ] T135 [US3] Exercise 1 continued: Bob commits (click ✓ checkmark)
- [ ] T136 [US3] Exercise 1 continued: Bob pushes (click "Sync Changes")
- [ ] T137 [US3] Exercise 1 validation: Wait 1-2 minutes, verify change on live site
- [ ] T138 [US3] Exercise 2: Bob adds a new image to /images/ folder (copy file, reference in HTML, test with Live Server)
- [ ] T139 [US3] Exercise 2 continued: Bob commits and pushes image + HTML change
- [ ] T140 [US3] Exercise 2 validation: Verify image displays on live site
- [ ] T141 [US3] Exercise 3: Bob fixes a typo using Find (Cmd+F or Ctrl+F)
- [ ] T142 [US3] Exercise 3 continued: Bob commits and pushes typo fix
- [ ] T143 [US3] Demonstrate troubleshooting: simulate push failure (make change on GitHub web, then push from VS Code → shows "Pull required")
- [ ] T144 [US3] Demonstrate troubleshooting resolution: click "Sync Changes" to pull first, then push
- [ ] T145 [US3] Demonstrate revert: Bob makes intentional mistake, commits, then undoes last commit (Source Control → ··· menu → Undo Last Commit)

### Knowledge Verification for User Story 3

- [ ] T146 [US3] Quiz Bob: "How do you preview changes locally before pushing?" (Answer: Right-click HTML → Open with Live Server)
- [ ] T147 [US3] Quiz Bob: "How do you stage files for commit?" (Answer: Source Control → click + button)
- [ ] T148 [US3] Quiz Bob: "How long does it take for changes to appear on the live site after pushing?" (Answer: 1-2 minutes)
- [ ] T149 [US3] Quiz Bob: "What do you do if push fails?" (Answer: Click Sync Changes to pull first, then push)
- [ ] T150 [US3] Quiz Bob: "Where do you go if you need help with HTML syntax?" (Answer: https://gemini.google.com)

### Independent Practice for User Story 3

**Prerequisites: Training session complete (T131-T145), Bob must be present**

- [ ] T151 [US3] Bob performs solo exercise: update meeting time on contact.html without assistance (observer watches, no help unless stuck for >5 minutes)
- [ ] T152 [US3] Verify Bob completed solo exercise successfully (change appears on live site)
- [ ] T153 [US3] Bob performs solo exercise: add a new ham radio photo to /images/ and display on index.html (observer watches, minimal help)
- [ ] T154 [US3] Verify Bob completed solo exercise successfully (image appears on live site)

### Post-Training Support for User Story 3

- [ ] T155 [US3] Bookmark quickstart.md location for Bob (GitHub URL: https://github.com/Parsons-Ham-Club/parsonshamclub/blob/main/specs/001-website-migration/quickstart.md)
- [ ] T156 [US3] Bookmark Formspree dashboard for Bob (https://formspree.io/forms)
- [ ] T157 [US3] Bookmark Gemini AI for Bob (https://gemini.google.com)
- [ ] T158 [US3] Set up monthly reminder for Bob: check Formspree submission count (Calendar event: "Check website form quota")

**Checkpoint**: User Story 3 complete - Bob can independently maintain website using VS Code + Git GUI workflow

---

## Phase 7: Final Validation & Switchover

**Purpose**: Complete final validation across all user stories, then switch from Raspberry Pi to GitHub Pages

### Cross-Story Integration Testing

- [ ] T159 All 19 pages display correctly on GitHub Pages (US1 validation)
- [ ] T160 Contact form sends emails successfully (US2 validation)
- [ ] T161 Bob can make a change and push to live site (US3 validation)
- [ ] T162 Old Raspberry Pi site still accessible as fallback (US4 validation)

### Performance Validation

- [ ] T163 Measure homepage load time on GitHub Pages (target: ≤3 seconds on standard broadband)
- [ ] T164 Compare load time to Raspberry Pi (GitHub Pages should be equal or faster)
- [ ] T165 Test page load times on mobile network (4G/5G)

### Final Browser Compatibility Check

- [ ] T166 Test all 19 pages on Chrome (Windows)
- [ ] T167 Test all 19 pages on Firefox (Windows)
- [ ] T168 Test all 19 pages on Safari (macOS)
- [ ] T169 Test all 19 pages on Edge (Windows)
- [ ] T170 Test mobile responsive design on iPhone Safari (if available)
- [ ] T171 Test mobile responsive design on Android Chrome (if available)

### Pre-Switchover Checklist

- [ ] T172 Confirm all functional requirements (FR-001 through FR-035) are met
- [ ] T173 Confirm all success criteria (SC-001 through SC-015) are met
- [ ] T174 Verify zero visual differences detected in visual regression testing (133 checks from T049-T082)
- [ ] T175 Verify all external embeds functional (Google Calendar, 5 YouTube videos, 4 TuneIn players, PDF viewer)
- [ ] T176 Verify contact form validated with 8 test scenarios (T098-T117)
- [ ] T177 Verify Bob completed training and can work independently (T151-T154)

### Switchover Decision

- [ ] T178 Review all validation results with stakeholders (review checklist T172-T177)
- [ ] T179 Get final approval to switch from Raspberry Pi to GitHub Pages (decision point)
- [ ] T180 Document switchover plan: old URL redirects, club communication, announcement timing

### Post-Switchover Monitoring

- [ ] T181 Monitor GitHub Pages uptime for 7 days (check https://www.githubstatus.com)
- [ ] T182 Monitor Formspree submissions for 30 days (check dashboard weekly)
- [ ] T183 Check ae0aq@yahoo.com inbox weekly for 1 month (verify form emails arriving)
- [ ] T184 Monitor Bob's Git activity (verify he's pushing changes without assistance)

### Raspberry Pi Decommission

**Prerequisites: 30 days post-switchover with zero issues**

- [ ] T185 Verify GitHub Pages site has been live and stable for 30+ days
- [ ] T186 Verify no fallback to Raspberry Pi was needed during monitoring period
- [ ] T187 Create final backup of Raspberry Pi SD card (full image)
- [ ] T188 Document Raspberry Pi hardware configuration for future reference (model, OS version, Apache config)
- [ ] T189 Shut down Raspberry Pi web server (stop Apache, disable autostart)
- [ ] T190 Archive Raspberry Pi hardware (store safely in case needed for other projects)

**Checkpoint**: Migration complete - GitHub Pages is primary hosting, Raspberry Pi decommissioned

---

## Phase 8: Polish & Documentation

**Purpose**: Final cleanup and documentation updates

- [ ] T191 [P] Update repository README.md with project description, live URL, maintenance instructions
- [ ] T192 [P] Add LICENSE file if needed (check with club for preferred license)
- [ ] T193 [P] Review and clean up feature branch history (squash commits if desired)
- [ ] T194 [P] Archive research.md, data-model.md, plan.md, spec.md to /docs/ folder for future reference
- [ ] T195 Verify .gitignore is still excluding sensitive files (.claude/, .specify/memory/*)
- [ ] T196 Run final link checker on all 19 pages (verify zero broken links)
- [ ] T197 Optimize images (optional): compress 174 images from ~17MB to ~10MB using tinypng.com or similar
- [ ] T198 Document total cost savings: $0/year GitHub Pages + Formspree vs. Raspberry Pi electricity + maintenance time
- [ ] T199 Create "Lessons Learned" document: what went well, what could be improved, advice for future migrations
- [ ] T200 Celebrate successful migration! 🎉

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup (Phase 1) completion
- **User Story 4 (Phase 3)**: Depends on Foundational (Phase 2) - Establishes safety net FIRST
- **User Story 1 (Phase 4)**: Depends on US4 (Phase 3) completion - Main migration work
- **User Story 2 (Phase 5)**: Depends on US1 (Phase 4) completion - Contact form requires live site
- **User Story 3 (Phase 6)**: Depends on US1 + US2 completion - Training requires functional site
- **Final Validation (Phase 7)**: Depends on all user stories (US1, US2, US3, US4) being complete
- **Polish (Phase 8)**: Depends on Final Validation (Phase 7) and switchover approval

### User Story Dependencies

- **User Story 4 (P1)**: Can start after Foundational - No dependencies on other stories (EXECUTE FIRST)
- **User Story 1 (P1)**: Can start after US4 complete - Requires safety net established
- **User Story 2 (P2)**: Requires US1 complete (needs live GitHub Pages site for Formspree to work)
- **User Story 3 (P3)**: Requires US1 + US2 complete (Bob needs functional site for training)

### Within Each User Story

**User Story 4 (Zero Downtime)**:
- Validation checklist before any migration work
- Rollback plan before any changes

**User Story 1 (Static Site)**:
- File deletions before RSS updates (avoid confusion)
- RSS updates can all run in parallel (T019-T036 all marked [P])
- Local validation before GitHub Pages deployment
- Visual regression testing after deployment

**User Story 2 (Contact Form)**:
- Formspree account setup before configuration
- Configuration complete before HTML update
- HTML update before validation testing
- All 8 validation tests before marking story complete

**User Story 3 (Maintenance Workflow)**:
- Training material prep before Bob's environment setup
- Environment setup before hands-on training
- Hands-on training before independent practice
- Independent practice validation before marking story complete

### Parallel Opportunities

**Phase 1 (Setup)**: T001, T003, T004 can run in parallel

**Phase 2 (Foundational)**: T006, T007 can run in parallel

**User Story 1 File Deletions**: T012, T013, T014, T016, T017 can run in parallel (different directories)

**User Story 1 RSS Updates**: T019-T036 can ALL run in parallel (18 tasks) - each updates a different HTML file

**User Story 1 Visual Regression**: T049-T066 can run in parallel (if multiple people testing) - each tests a different page

**User Story 2 Configuration**: T088-T093 can run in parallel within Formspree dashboard

**Phase 8 (Polish)**: T191, T192, T193, T194 can run in parallel

---

## Parallel Example: User Story 1 RSS Updates

All 18 RSS feed reference updates can be executed in parallel since each modifies a different HTML file:

```bash
# Launch all RSS updates together (T019-T036):
Edit: index.html line 33
Edit: contact.html line 24
Edit: about-us.html line 24
Edit: events.html line 24
Edit: exams.html line 24
Edit: local-nets.html line 24
Edit: arrl-news.html line 24
Edit: ham-nation.html line 24
Edit: ham-radio-360.html line 24
Edit: this-week-in-amateur-radio.html line 24
Edit: digital-communications.html line 24
Edit: morse-code.html line 24
Edit: uhf-vhf.html line 24
Edit: hf.html line 24
Edit: summits-on-the-air.html line 24
Edit: solar-propagation.html line 24
Edit: community-service.html line 24
Edit: interview-on-community-service.html line 24
```

---

## Implementation Strategy

### Sequential Execution (Recommended for Solo Work)

1. Complete Phase 1: Setup (T001-T004)
2. Complete Phase 2: Foundational (T005-T007)
3. Complete Phase 3: User Story 4 - Zero Downtime (T008-T011) ⬅️ Safety net FIRST
4. Complete Phase 4: User Story 1 - Static Site (T012-T082) ⬅️ MVP core functionality
5. **STOP and VALIDATE**: Test User Story 1 independently (133 visual checks)
6. Complete Phase 5: User Story 2 - Contact Form (T083-T119)
7. **STOP and VALIDATE**: Test User Story 2 independently (8 validation tests)
8. Complete Phase 6: User Story 3 - Training (T120-T158) ⬅️ Requires Bob's participation
9. **STOP and VALIDATE**: Test User Story 3 independently (Bob completes solo exercises)
10. Complete Phase 7: Final Validation (T159-T190) ⬅️ Includes 30-day monitoring
11. Complete Phase 8: Polish (T191-T200)

### Incremental Delivery Milestones

**Milestone 1: Safety Net Established** (Phase 3)
- Old site documented and accessible
- Rollback plan created
- Validation checklist ready

**Milestone 2: MVP Live** (Phase 4)
- Static website functional on GitHub Pages
- 19 pages display correctly
- All images, galleries, slideshows working
- External embeds functional (calendar, videos, podcasts)
- **Value delivered**: Free, reliable hosting operational

**Milestone 3: Contact Form Restored** (Phase 5)
- Formspree integration complete
- Email delivery validated
- Form fully functional
- **Value delivered**: Visitors can contact club again

**Milestone 4: Bob Self-Sufficient** (Phase 6)
- Training complete
- Bob can edit, commit, push independently
- Troubleshooting knowledge verified
- **Value delivered**: Long-term sustainability achieved

**Milestone 5: Migration Complete** (Phase 7)
- All validation passing
- 30-day stability monitoring complete
- Raspberry Pi decommissioned
- **Value delivered**: Zero-cost hosting fully operational, old server retired

---

## Notes

- **[P] tasks**: Different files, no dependencies - can run in parallel if multiple people working
- **[Story] label**: Maps task to specific user story for traceability and independent testing
- **Checkpoints**: Stop points to validate each user story works independently before proceeding
- **Manual testing only**: No automated tests - this is a static site migration, not software development
- **Constitution compliance**: All tasks align with 7 core principles (preserve UX, zero cost, static-first, etc.)
- **Commit frequency**: Commit after logical groups (e.g., all RSS updates in one commit, all file deletions in one commit)
- **Testing thoroughness**: 133 visual regression checks (19 pages × 7 criteria) + 8 form validation tests = 141 total validations
- **Bob's participation required**: Phase 6 (US3) requires Bob to be present for training and exercises
- **Total tasks**: 200 tasks (includes 30-day monitoring period in Phase 7)

---

## Success Criteria Summary

**Migration Completeness**:
- ✅ All 19 pages load on GitHub Pages (T048)
- ✅ All 174 images display (T039)
- ✅ Contact form delivers emails (T098-T117)

**Performance & Reliability**:
- ✅ Page load times ≤3 seconds (T163)
- ✅ 99.9% uptime (GitHub Pages SLA) (T181)
- ✅ Mobile responsive design verified (T067-T069)

**Maintainability**:
- ✅ Bob can update content in <10 minutes (T151-T152)
- ✅ Bob can add images in <15 minutes (T153-T154)
- ✅ Common tasks documented (T120)

**Cost & Operations**:
- ✅ $0/year total cost (T198)
- ✅ Raspberry Pi decommissioned (T185-T190)
- ✅ Zero downtime during migration (T008-T011, T159-T162)

**Functionality**:
- ✅ 100% navigation links work (T043, T196)
- ✅ 100% external embeds work (T072-T082)
- ✅ Contact form spam protection active (T091, T112-T113)
