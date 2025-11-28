# Tasks: Website Design Framework

**Input**: Design documents from /specs/004-website-framework/
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/

**Tests**: Manual browser testing only (no automated tests - static HTML/CSS project)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: [ID] [P?] [Story] Description

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

## Path Conventions

This is a static website with HTML files at the root level:
- css/modern.css - Design system
- css/homepage.css - Homepage-specific styles
- *.html - Page files at root

---

## Phase 1: Setup (Framework Foundation)

**Purpose**: Ensure the design system CSS is complete and documented

- [x] T001 Review and document existing design tokens in css/modern.css
- [x] T002 [P] Verify all color variables are defined in css/modern.css :root section
- [x] T003 [P] Verify all typography variables are defined in css/modern.css :root section
- [x] T004 [P] Verify all spacing variables are defined in css/modern.css :root section

---

## Phase 2: Foundational (Shared Components)

**Purpose**: Extract and finalize reusable header/footer components that ALL pages will use

- [x] T005 Extract header HTML pattern from index.html to specs/004-website-framework/header-template.html
- [x] T006 Extract footer HTML pattern from index.html to specs/004-website-framework/footer-template.html
- [x] T007 Extract mobile navigation JavaScript from index.html to specs/004-website-framework/nav-script.html
- [x] T008 [P] Verify header component includes logo, desktop nav, hamburger menu, and mobile nav
- [x] T009 [P] Verify footer component includes branding, quick links, community links, and copyright
- [x] T010 Add sticky footer CSS to css/modern.css for pages with minimal content
- [ ] T011 Test header/footer components at mobile (320px), tablet (768px), and desktop (1024px) breakpoints

**Checkpoint**: Foundation ready - page migrations can now begin

---

## Phase 3: User Story 1 - Consistent Visual Experience (Priority: P1)

**Goal**: Migrate all existing pages to use the shared header, footer, and design system

**Independent Test**: Navigate between any two pages and verify header, footer, typography, and color scheme are identical

### Implementation for User Story 1

**Batch 1: Learning Section Pages**

- [x] T012 [P] [US1] Migrate about-amateur-radio.html to framework (replace header, footer, link modern.css)
- [x] T013 [P] [US1] Migrate digital-communications.html to framework (replace header, footer, link modern.css)
- [x] T014 [P] [US1] Migrate morse-code.html to framework (replace header, footer, link modern.css)
- [x] T015 [P] [US1] Migrate uhf-vhf.html to framework (replace header, footer, link modern.css)
- [x] T016 [P] [US1] Migrate hf.html to framework (replace header, footer, link modern.css)
- [x] T017 [P] [US1] Migrate summits-on-the-air.html to framework (replace header, footer, link modern.css)
- [x] T018 [P] [US1] Migrate solar-propagation.html to framework (replace header, footer, link modern.css)

**Batch 2: Podcast Section Pages**

- [x] T019 [P] [US1] Migrate arrl-news.html to framework (replace header, footer, link modern.css)
- [x] T020 [P] [US1] Migrate ham-nation.html to framework (replace header, footer, link modern.css)
- [x] T021 [P] [US1] Migrate this-week-in-amateur-radio.html to framework (replace header, footer, link modern.css)
- [x] T022 [P] [US1] Migrate ham-radio-360.html to framework (replace header, footer, link modern.css)

**Batch 3: Community Section Pages**

- [x] T023 [P] [US1] Migrate community-service.html to framework (replace header, footer, link modern.css)
- [x] T024 [P] [US1] Migrate interview-on-community-service.html to framework (replace header, footer, link modern.css)

**Batch 4: Main Pages**

- [x] T025 [P] [US1] Migrate events.html to framework (replace header, footer, link modern.css)
- [x] T026 [P] [US1] Migrate local-nets.html to framework (replace header, footer, link modern.css)
- [x] T027 [P] [US1] Migrate exams.html to framework (replace header, footer, link modern.css)
- [x] T028 [P] [US1] Migrate contact.html to framework (replace header, footer, link modern.css)
- [x] T029 [P] [US1] Migrate about-us.html to framework (replace header, footer, link modern.css)

**Validation**

- [ ] T030 [US1] Test all 18 migrated pages load without CSS errors (check browser console)
- [ ] T031 [US1] Verify all pages display consistent header with working navigation links
- [ ] T032 [US1] Verify all pages display consistent footer with correct links

**Checkpoint**: All pages now have consistent visual experience - User Story 1 complete

---

## Phase 4: User Story 2 - Responsive Layout on All Devices (Priority: P1)

**Goal**: Ensure all migrated pages display correctly at all breakpoints

**Independent Test**: View any page at 320px, 768px, and 1024px widths - content should adapt without horizontal scrolling

### Implementation for User Story 2

- [ ] T033 [US2] Test all Learning section pages (7 pages) at mobile breakpoint (320px)
- [ ] T034 [US2] Test all Learning section pages (7 pages) at tablet breakpoint (768px)
- [ ] T035 [US2] Test all Learning section pages (7 pages) at desktop breakpoint (1024px)
- [ ] T036 [US2] Fix any responsive issues found in Learning section pages
- [ ] T037 [P] [US2] Test all Podcast section pages (4 pages) at all three breakpoints
- [ ] T038 [P] [US2] Test all Community section pages (2 pages) at all three breakpoints
- [ ] T039 [P] [US2] Test all Main pages (5 pages) at all three breakpoints
- [ ] T040 [US2] Fix any responsive issues found in Podcast/Community/Main pages
- [ ] T041 [US2] Verify hamburger menu works on all pages at mobile width
- [ ] T042 [US2] Verify dropdown menus work on all pages at all breakpoints

**Checkpoint**: All pages are fully responsive - User Story 2 complete

---

## Phase 5: User Story 3 - Reusable Content Components (Priority: P2)

**Goal**: Ensure all framework components are documented and available for content creation

**Independent Test**: Create a new test page using only documented components - should look consistent with existing pages

### Implementation for User Story 3

- [ ] T043 [US3] Update quickstart.md with copy-paste header snippet in specs/004-website-framework/quickstart.md
- [ ] T044 [US3] Update quickstart.md with copy-paste footer snippet in specs/004-website-framework/quickstart.md
- [ ] T045 [US3] Update quickstart.md with copy-paste mobile nav script in specs/004-website-framework/quickstart.md
- [ ] T046 [P] [US3] Add card component examples with HTML snippets to quickstart.md
- [ ] T047 [P] [US3] Add button component examples (primary, secondary, accent) to quickstart.md
- [ ] T048 [P] [US3] Add section component examples (white, gray, light backgrounds) to quickstart.md
- [ ] T049 [US3] Create sample-page.html demonstrating all components at root level
- [ ] T050 [US3] Validate sample-page.html matches homepage styling at all breakpoints
- [ ] T051 [US3] Document component usage checklist in specs/004-website-framework/quickstart.md

**Checkpoint**: Framework is documented and reusable - User Story 3 complete

---

## Phase 6: User Story 4 - Accessible Navigation Structure (Priority: P2)

**Goal**: Ensure navigation is consistent, accessible, and shows current page location

**Independent Test**: Navigate to any page - current page should be highlighted in nav, all dropdowns should work

### Implementation for User Story 4

- [ ] T052 [US4] Add active state to navigation link on about-amateur-radio.html
- [ ] T053 [P] [US4] Add active state to navigation links on all Learning section pages (6 remaining)
- [ ] T054 [P] [US4] Add active state to navigation links on all Podcast section pages (4 pages)
- [ ] T055 [P] [US4] Add active state to navigation links on all Community section pages (2 pages)
- [ ] T056 [P] [US4] Add active state to navigation links on all Main pages (5 pages)
- [ ] T057 [US4] Test all navigation links work correctly from every page
- [ ] T058 [US4] Test all dropdown menus open/close correctly on desktop (hover)
- [ ] T059 [US4] Test all dropdown menus open/close correctly on mobile (tap)
- [ ] T060 [US4] Verify keyboard navigation works for all nav elements (Tab, Enter, Escape)
- [ ] T061 [US4] Document active state pattern in quickstart.md

**Checkpoint**: Navigation is consistent and accessible - User Story 4 complete

---

## Phase 7: Polish and Cross-Cutting Concerns

**Purpose**: Final validation and cleanup

- [ ] T062 [P] Run all pages through HTML validator
- [ ] T063 [P] Test all external links are not broken
- [ ] T064 Check color contrast meets WCAG AA standards for all text
- [ ] T065 Verify all images have alt text attributes
- [ ] T066 Test page load performance (target: under 2 seconds)
- [ ] T067 Remove sample-page.html if not needed for production
- [ ] T068 Update CLAUDE.md with any new patterns or conventions discovered
- [ ] T069 Final visual review of homepage and 3 representative pages at all breakpoints
- [ ] T070 Commit all changes with descriptive message

---

## Dependencies and Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all page migrations
- **User Story 1 (Phase 3)**: Depends on Foundational - page migrations
- **User Story 2 (Phase 4)**: Depends on User Story 1 - responsive testing
- **User Story 3 (Phase 5)**: Can start after Foundational (independent of other stories)
- **User Story 4 (Phase 6)**: Depends on User Story 1 - navigation active states
- **Polish (Phase 7)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Depends only on Foundational - can start immediately after Phase 2
- **User Story 2 (P1)**: Depends on User Story 1 completion (pages must be migrated to test)
- **User Story 3 (P2)**: Independent - can run in parallel with US1 after Foundational
- **User Story 4 (P2)**: Depends on User Story 1 (pages must exist to add active states)

### Parallel Opportunities

**Phase 1 (Setup)**: T002, T003, T004 can run in parallel

**Phase 2 (Foundational)**: T008, T009 can run in parallel

**Phase 3 (User Story 1)**: ALL page migrations (T012-T029) can run in parallel - different files\!

**Phase 5 (User Story 3)**: T046, T047, T048 can run in parallel

**Phase 6 (User Story 4)**: T053, T054, T055, T056 can run in parallel

---

## Implementation Strategy

### MVP First (User Stories 1 and 2)

1. Complete Phase 1: Setup (verify design tokens)
2. Complete Phase 2: Foundational (extract header/footer templates)
3. Complete Phase 3: User Story 1 (migrate all 18 pages)
4. Complete Phase 4: User Story 2 (responsive testing)
5. STOP and VALIDATE: All pages should look consistent and be responsive
6. Deploy if ready - this is the MVP\!

### Incremental Delivery

1. Setup + Foundational - Framework templates ready
2. User Story 1 - All pages migrated - Visual consistency achieved
3. User Story 2 - Responsive verified - Mobile experience confirmed
4. User Story 3 - Documentation complete - Future maintainability enabled
5. User Story 4 - Navigation polished - User experience enhanced
6. Polish - Production ready

---

## Notes

- [P] tasks = different files, no dependencies between them
- [Story] label maps task to specific user story for traceability
- Each page migration is independent - can be done in any order
- Test at all breakpoints after each batch of migrations
- Keep index.html as the reference - it is already complete
- All pages share css/modern.css - changes there affect all pages
- Commit frequently to track progress and enable rollback if needed
