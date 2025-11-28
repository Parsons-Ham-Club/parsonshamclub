# Tasks: Homepage Redesign

**Input**: Design documents from `/specs/003-homepage-redesign/`
**Prerequisites**: plan.md, spec.md, research.md, quickstart.md

**Tests**: Manual browser testing only (no automated tests requested)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

```text
/                           # Repository root
├── index.html              # Homepage (REDESIGN TARGET)
├── css/
│   ├── modern.css          # Design system base styles
│   └── homepage.css        # Homepage-specific styles
└── icons/                  # SVG icons for redesign
```

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Create CSS directory structure and design system foundation

- [ ] T001 Create css/ directory at repository root
- [ ] T002 Create icons/ directory at repository root
- [ ] T003 Create css/modern.css with CSS custom properties (colors, typography, spacing) from quickstart.md

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core CSS components that ALL user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T004 Add base reset and typography styles to css/modern.css
- [ ] T005 [P] Add container component styles to css/modern.css
- [ ] T006 [P] Add button component styles (.btn, .btn-primary, .btn-secondary) to css/modern.css
- [ ] T007 [P] Add card component styles (.feature-card, .activity-card, .card-icon, .card-title, .card-description) to css/modern.css
- [ ] T008 [P] Add section component styles (.section, .section-white, .section-light, .section-gray) to css/modern.css
- [ ] T009 [P] Add card-grid layout styles (.card-grid, .card-grid-3) to css/modern.css
- [ ] T010 Add responsive breakpoint media queries (768px, 1024px) to css/modern.css

**Checkpoint**: Design system foundation ready - user story implementation can now begin

---

## Phase 3: User Story 6 - Modern Navigation (Priority: P1) 🎯 MVP

**Goal**: Visitors can navigate the site using a clean, modern header with PAARC branding and horizontal menu

**Independent Test**: Load homepage and verify header displays PAARC logo/text and horizontal navigation menu with all main sections

### Implementation for User Story 6

- [ ] T011 [P] [US6] Create icons/radio-waves.svg icon for logo
- [ ] T012 [US6] Add header component styles (.header, .logo, .logo-icon, .logo-text) to css/modern.css
- [ ] T013 [US6] Add navigation styles (.nav, .nav-list, .nav-link, .nav-dropdown, .dropdown-menu) to css/modern.css
- [ ] T014 [US6] Add mobile hamburger menu styles to css/modern.css
- [ ] T015 [US6] Create new index.html with DOCTYPE, head section, and CSS links
- [ ] T016 [US6] Add header HTML structure with PAARC logo and navigation to index.html
- [ ] T017 [US6] Add all navigation links (Home, Events, Learning dropdown, Local Nets, Exams, Podcasts dropdown, Community dropdown, Contact, About Us) to index.html
- [ ] T018 [US6] Add mobile navigation JavaScript for hamburger menu toggle to index.html

**Checkpoint**: Header and navigation fully functional - can navigate to all existing pages

---

## Phase 4: User Story 1 - First-Time Visitor Discovers Club (Priority: P1)

**Goal**: First-time visitor sees welcoming hero section with club name, welcome message, CTAs, and meeting info

**Independent Test**: Load homepage and verify hero section displays with centered content, "Get Started" and "Learn More" buttons, and "Next Meeting" card

### Implementation for User Story 1

- [ ] T019 [US1] Add hero section styles (.hero, .hero-icon, .hero-title, .hero-description, .hero-buttons) to css/homepage.css
- [ ] T020 [US1] Add meeting card styles (.meeting-card, .meeting-label, .meeting-time, .meeting-location) to css/homepage.css
- [ ] T021 [US1] Add hero section HTML structure to index.html after header
- [ ] T022 [US1] Add radio waves icon SVG inline in hero section of index.html
- [ ] T023 [US1] Add hero title "Welcome to Parsons Amateur Radio Club" with styled club name to index.html
- [ ] T024 [US1] Add hero description paragraph to index.html
- [ ] T025 [US1] Add "Get Started" button (links to exams.html) and "Learn More" button (links to about-amateur-radio.html) to index.html
- [ ] T026 [US1] Add "Next Meeting" card with schedule and location to index.html
- [ ] T027 [US1] Add responsive styles for hero section in css/homepage.css

**Checkpoint**: Hero section complete - visitors see welcoming first impression with clear CTAs

---

## Phase 5: User Story 5 - Meeting Information and Contact (Priority: P1)

**Goal**: Visitor finds meeting details and contact information in meeting section and footer with functional buttons

**Independent Test**: Scroll to "Join Us at Our Next Meeting" section and footer, verify meeting details display and buttons link correctly

### Implementation for User Story 5

- [ ] T028 [P] [US5] Create icons/calendar.svg icon for meeting section
- [ ] T029 [US5] Add meeting section styles (.meeting-icon, .meeting-info-card, .meeting-detail, .detail-label, .detail-value, .meeting-buttons) to css/homepage.css
- [ ] T030 [US5] Add footer styles (.footer, .footer-grid, .footer-brand, .footer-logo, .footer-tagline, .footer-links, .footer-heading, .footer-bottom) to css/modern.css
- [ ] T031 [US5] Add "Join Us at Our Next Meeting" section HTML to index.html
- [ ] T032 [US5] Add calendar icon, section title, and description to meeting section in index.html
- [ ] T033 [US5] Add meeting info card with When/Where details to index.html
- [ ] T034 [US5] Add "Contact Us" button (links to contact.html) and "View Events Calendar" button (links to events.html) to index.html
- [ ] T035 [US5] Add footer HTML structure with PAARC branding and tagline to index.html
- [ ] T036 [US5] Add Quick Links section (Events, Learning Resources, Exam Information) to footer in index.html
- [ ] T037 [US5] Add Community section (Local Nets, Podcasts, Contact Us) to footer in index.html
- [ ] T038 [US5] Add footer bottom with copyright to index.html
- [ ] T039 [US5] Add responsive styles for footer grid in css/modern.css

**Checkpoint**: Meeting section and footer complete - visitors can find meeting info and navigate to contact/events

---

## Phase 6: User Story 2 - Visitor Learns About Amateur Radio (Priority: P2)

**Goal**: Visitor learns what amateur radio is through educational section with three feature cards

**Independent Test**: Scroll to "What is Amateur Radio?" section and verify heading, description, and three feature cards (Global Communication, Emergency Services, Vibrant Community) display correctly

### Implementation for User Story 2

- [ ] T040 [P] [US2] Create icons/globe.svg icon for Global Communication card
- [ ] T041 [P] [US2] Create icons/emergency.svg icon for Emergency Services card
- [ ] T042 [P] [US2] Create icons/community.svg icon for Vibrant Community card
- [ ] T043 [US2] Add "What is Amateur Radio?" section HTML to index.html after hero section
- [ ] T044 [US2] Add section title and description paragraph to index.html
- [ ] T045 [US2] Add card-grid with three feature cards (Global Communication, Emergency Services, Vibrant Community) to index.html
- [ ] T046 [US2] Add SVG icons inline in each feature card in index.html

**Checkpoint**: Educational section complete - visitors understand what amateur radio is and its benefits

---

## Phase 7: User Story 3 - Visitor Explores Getting Licensed (Priority: P2)

**Goal**: Visitor finds licensing information including FCC requirements and "Good news" about morse code

**Independent Test**: Scroll to "Getting Licensed" section and verify it displays license info, morse code disclaimer, and club support information

### Implementation for User Story 3

- [ ] T047 [US3] Add license section styles (.license-card, .license-description, .license-highlight) to css/homepage.css
- [ ] T048 [US3] Add "Getting Licensed" section HTML to index.html after "What is Amateur Radio?" section
- [ ] T049 [US3] Add section title and license description paragraph to index.html
- [ ] T050 [US3] Add "Good news: Morse code is no longer required!" highlight paragraph to index.html

**Checkpoint**: Licensing section complete - visitors know how to get licensed and that morse code is not required

---

## Phase 8: User Story 4 - Visitor Discovers Radio Activities (Priority: P3)

**Goal**: Visitor explores amateur radio activities through six activity cards

**Independent Test**: Scroll to "So Many Facets to Explore" section and verify six activity cards display with icons and descriptions

### Implementation for User Story 4

- [ ] T051 [P] [US4] Create icons/satellite.svg icon for Satellite Communication card
- [ ] T052 [P] [US4] Create icons/digital.svg icon for Digital Modes card
- [ ] T053 [P] [US4] Create icons/contest.svg icon for Contest & DXing card
- [ ] T054 [P] [US4] Create icons/international.svg icon for International Contacts card
- [ ] T055 [P] [US4] Create icons/emergency-comms.svg icon for Emergency Comms card
- [ ] T056 [P] [US4] Create icons/sota.svg icon for SOTA & Portable card
- [ ] T057 [US4] Add "So Many Facets to Explore" section HTML to index.html after Getting Licensed section
- [ ] T058 [US4] Add section title and description paragraph to index.html
- [ ] T059 [US4] Add card-grid with six activity cards to index.html
- [ ] T060 [US4] Add SVG icons inline in each activity card in index.html

**Checkpoint**: Activities section complete - visitors see the breadth of amateur radio activities

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Final validation, responsive testing, and cleanup

- [ ] T061 [P] Test page load time (target: < 3 seconds)
- [ ] T062 [P] Validate all navigation links work correctly (0% broken links)
- [ ] T063 Test responsive layout on mobile viewport (320px)
- [ ] T064 Test responsive layout on tablet viewport (768px)
- [ ] T065 Test responsive layout on desktop viewport (1920px)
- [ ] T066 Verify no horizontal scrolling at any viewport
- [ ] T067 Verify minimum 16px font size on mobile
- [ ] T068 [P] Test in Chrome browser
- [ ] T069 [P] Test in Firefox browser
- [ ] T070 [P] Test in Safari browser
- [ ] T071 [P] Test in Edge browser
- [ ] T072 Visual comparison against mockups (target: 90%+ fidelity)
- [ ] T073 Verify all CTA buttons have correct link destinations
- [ ] T074 Code cleanup - remove any unused CSS
- [ ] T075 Add comments to CSS files for maintainability

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-8)**: All depend on Foundational phase completion
  - US6 (Navigation) should be first as it creates index.html
  - US1 (Hero) depends on US6 (needs index.html)
  - US5 (Meeting/Footer) depends on US6 (needs index.html)
  - US2, US3, US4 depend on US6 (needs index.html)
- **Polish (Phase 9)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 6 (Navigation - P1)**: First to implement - creates index.html structure
- **User Story 1 (Hero - P1)**: Depends on US6 (index.html exists)
- **User Story 5 (Meeting/Footer - P1)**: Depends on US6 (index.html exists)
- **User Story 2 (Amateur Radio - P2)**: Depends on US6 (index.html exists)
- **User Story 3 (Licensing - P2)**: Depends on US6 (index.html exists)
- **User Story 4 (Activities - P3)**: Depends on US6 (index.html exists)

### Parallel Opportunities

- All Foundational tasks marked [P] can run in parallel (T005-T009)
- Icon creation tasks marked [P] can run in parallel within each user story
- Browser testing tasks marked [P] can run in parallel (T068-T071)

---

## Parallel Example: Foundational Phase

```bash
# Launch all component styles in parallel:
Task: "Add container component styles to css/modern.css"
Task: "Add button component styles to css/modern.css"
Task: "Add card component styles to css/modern.css"
Task: "Add section component styles to css/modern.css"
Task: "Add card-grid layout styles to css/modern.css"
```

## Parallel Example: User Story 4 Icons

```bash
# Launch all icon creation in parallel:
Task: "Create icons/satellite.svg"
Task: "Create icons/digital.svg"
Task: "Create icons/contest.svg"
Task: "Create icons/international.svg"
Task: "Create icons/emergency-comms.svg"
Task: "Create icons/sota.svg"
```

---

## Implementation Strategy

### MVP First (Navigation + Hero + Meeting/Footer)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CSS design system)
3. Complete Phase 3: US6 - Navigation (creates index.html)
4. Complete Phase 4: US1 - Hero section
5. Complete Phase 5: US5 - Meeting/Footer
6. **STOP and VALIDATE**: Test MVP independently - basic homepage is functional
7. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Design system ready
2. Add US6 (Navigation) → Test → Functional nav bar
3. Add US1 (Hero) → Test → Complete above-the-fold experience
4. Add US5 (Meeting/Footer) → Test → Complete page structure (MVP!)
5. Add US2 (Amateur Radio) → Test → Educational content added
6. Add US3 (Licensing) → Test → Licensing info added
7. Add US4 (Activities) → Test → Full page complete
8. Complete Polish → Full validation and testing

---

## Summary

| Phase | Task Count | Description |
|-------|------------|-------------|
| Phase 1: Setup | 3 | Directory and design system creation |
| Phase 2: Foundational | 7 | Core CSS components |
| Phase 3: US6 Navigation | 8 | Header and navigation |
| Phase 4: US1 Hero | 9 | Hero section with CTAs |
| Phase 5: US5 Meeting/Footer | 12 | Meeting info and footer |
| Phase 6: US2 Amateur Radio | 7 | Educational feature cards |
| Phase 7: US3 Licensing | 4 | Getting licensed section |
| Phase 8: US4 Activities | 10 | Activity exploration cards |
| Phase 9: Polish | 15 | Testing and validation |
| **Total** | **75** | |

### Tasks by User Story

- US1 (Hero): 9 tasks
- US2 (Amateur Radio): 7 tasks
- US3 (Licensing): 4 tasks
- US4 (Activities): 10 tasks
- US5 (Meeting/Footer): 12 tasks
- US6 (Navigation): 8 tasks
- Setup/Foundational/Polish: 25 tasks

### MVP Scope (Suggested)

Complete through Phase 5 (US5) for minimum viable homepage:
- Modern navigation with all links
- Welcoming hero section with CTAs
- Meeting information and footer
- **MVP Task Count**: 39 tasks
