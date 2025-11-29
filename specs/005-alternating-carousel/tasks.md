# Tasks: Alternating Carousel

**Input**: Design documents from /specs/005-alternating-carousel/
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md

**Tests**: Manual browser testing only (no automated tests for static site)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: [ID] [P?] [Story] Description

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

## Path Conventions

- **Static website**: Root HTML files, css/ for stylesheets
- All carousel CSS in css/homepage.css
- All carousel JavaScript inline in index.html
- Images in images/

---

## Phase 1: Setup

**Purpose**: Prepare existing codebase for new carousel component

- [x] T001 Review existing carousel implementation in index.html (lines 112-158, 423-481)
- [x] T002 [P] Identify images to use for alternating carousel slides in images/

---

## Phase 2: Foundational (Core CSS Structure)

**Purpose**: CSS classes that ALL user stories depend on - MUST complete before ANY user story

- [x] T003 Add alternating carousel container CSS (.alt-carousel) in css/homepage.css
- [x] T004 [P] Add slide structure CSS (.alt-carousel-slide, .alt-carousel-image, .alt-carousel-content) in css/homepage.css
- [x] T005 [P] Add 16:9 aspect ratio CSS (.alt-carousel-image with aspect-ratio: 16/9) in css/homepage.css

**Checkpoint**: Foundation CSS ready - user story implementation can now begin

---

## Phase 3: User Story 1 - View Alternating Image/Description Layout (Priority: P1) MVP

**Goal**: Display images with descriptions in two-column layout with 16:9 aspect ratio

**Independent Test**: Load homepage, verify image in one column with description text in adjacent column, images display at 16:9 ratio

### Implementation for User Story 1

- [x] T006 [US1] Add HTML structure for alternating carousel container in index.html
- [x] T007 [US1] Add first slide HTML with image and description content in index.html
- [x] T008 [US1] Add second slide HTML with image and description content in index.html
- [x] T009 [P] [US1] Add flexbox layout CSS for two-column display in css/homepage.css
- [x] T010 [P] [US1] Add equal width columns CSS (flex: 1 for image and content) in css/homepage.css
- [x] T011 [US1] Add content area styling CSS (.alt-carousel-content) in css/homepage.css
- [x] T012 [US1] Add image styling CSS (.alt-carousel-image img) in css/homepage.css

**Checkpoint**: User Story 1 complete - Two-column layout with 16:9 images visible

---

## Phase 4: User Story 2 - Automatic Carousel Rotation with Position Alternation (Priority: P1)

**Goal**: Auto-advance slides every 5 seconds with image position alternating left/right

**Independent Test**: Watch carousel auto-advance, verify image switches from left to right column on each transition

### Implementation for User Story 2

- [x] T013 [US2] Add .image-right CSS class for reversed flex-direction in css/homepage.css
- [x] T014 [US2] Add transition CSS for smooth opacity fade in css/homepage.css
- [x] T015 [US2] Add active/inactive slide CSS in css/homepage.css
- [x] T016 [US2] Add JavaScript carousel state object in index.html
- [x] T017 [US2] Add JavaScript showSlide() function with alternation logic in index.html
- [x] T018 [US2] Add JavaScript startAutoplay() function with 5-second interval in index.html
- [x] T019 [US2] Add JavaScript init() function and DOMContentLoaded listener in index.html
- [x] T020 [US2] Add hover pause/resume event listeners for auto-play in index.html

**Checkpoint**: User Story 2 complete - Carousel auto-advances with alternating image positions

---

## Phase 5: User Story 3 - Manual Navigation Controls (Priority: P2)

**Goal**: Prev/next buttons and dot indicators for manual slide navigation

**Independent Test**: Click prev/next buttons, verify slides change with alternating pattern maintained

### Implementation for User Story 3

- [x] T021 [P] [US3] Add prev/next button HTML with SVG icons in index.html
- [x] T022 [P] [US3] Add dot indicators HTML container in index.html
- [x] T023 [US3] Add navigation button CSS styling in css/homepage.css
- [x] T024 [US3] Add dot indicator CSS styling in css/homepage.css
- [x] T025 [US3] Add JavaScript prev/next button click handlers in index.html
- [x] T026 [US3] Add JavaScript to dynamically create dot indicators in index.html
- [x] T027 [US3] Add JavaScript dot click handler to jump to specific slide in index.html
- [x] T028 [US3] Add JavaScript updateDots() function to highlight active dot in index.html

**Checkpoint**: User Story 3 complete - Navigation buttons and dots fully functional

---

## Phase 6: User Story 4 - Responsive Layout on Mobile (Priority: P2)

**Goal**: Stack image above description on mobile (< 768px), maintain 16:9 aspect ratio

**Independent Test**: Resize browser below 768px, verify image stacks above description

### Implementation for User Story 4

- [x] T029 [US4] Add mobile media query CSS (@media max-width: 767px) in css/homepage.css
- [x] T030 [US4] Add stacked layout CSS (flex-direction: column) in css/homepage.css
- [x] T031 [US4] Override .image-right to also use column direction on mobile in css/homepage.css
- [x] T032 [P] [US4] Adjust navigation button positioning for mobile in css/homepage.css
- [x] T033 [P] [US4] Adjust content area padding for mobile in css/homepage.css
- [ ] T034 [US4] Test carousel on mobile viewport (Chrome DevTools)

**Checkpoint**: User Story 4 complete - Mobile responsive layout working

---

## Phase 7: Polish and Cross-Cutting Concerns

**Purpose**: Cleanup, accessibility, and final validation

- [x] T035 [P] Add ARIA attributes to carousel container in index.html
- [x] T036 [P] Add aria-labels to navigation buttons in index.html
- [x] T037 [P] Ensure all images have descriptive alt text in index.html
- [ ] T038 Remove or hide old carousel HTML in index.html
- [ ] T039 Remove old carousel JavaScript code in index.html
- [ ] T040 Clean up unused carousel CSS from css/homepage.css
- [ ] T041 Test full carousel on desktop Chrome, Firefox, Edge
- [ ] T042 Test full carousel on mobile viewport
- [ ] T043 Verify 16:9 aspect ratio maintained across all viewports
- [ ] T044 Run quickstart.md validation checklist

---

## Dependencies and Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup - BLOCKS all user stories
- **User Stories (Phases 3-6)**: All depend on Foundational completion
- **Polish (Phase 7)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational - Requires US1 HTML to exist
- **User Story 3 (P2)**: Can start after Foundational - Requires US2 JavaScript structure
- **User Story 4 (P2)**: Can start after Foundational - Works on CSS, largely independent

### Parallel Opportunities

- T002 can run in parallel with T001
- T004, T005 can run in parallel
- T009, T010 can run in parallel
- T021, T022 can run in parallel
- T032, T033 can run in parallel
- T035, T036, T037 can run in parallel

---

## Summary

| Metric | Value |
|--------|-------|
| Total Tasks | 44 |
| Phase 1 (Setup) | 2 tasks |
| Phase 2 (Foundational) | 3 tasks |
| Phase 3 (US1 - Layout) | 7 tasks |
| Phase 4 (US2 - Rotation) | 8 tasks |
| Phase 5 (US3 - Navigation) | 8 tasks |
| Phase 6 (US4 - Mobile) | 6 tasks |
| Phase 7 (Polish) | 10 tasks |
| Parallel Opportunities | 12 tasks marked [P] |
| MVP Scope | US1 + US2 (20 tasks through Phase 4) |
