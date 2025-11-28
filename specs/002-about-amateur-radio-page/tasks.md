# Tasks: About Amateur Radio Page

**Input**: Design documents from `/specs/002-about-amateur-radio-page/`
**Prerequisites**: plan.md, spec.md, research.md, quickstart.md

**Tests**: Not requested - manual browser testing only

**Organization**: Tasks grouped by user story for independent implementation

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: User story (US1, US2)

## Phase 1: Setup

**Purpose**: Prepare development environment

- [x] T001 Verify VS Code Live Server extension installed
- [x] T002 Verify on branch 002-about-amateur-radio-page
- [x] T003 [P] Locate slideshow in index.html lines 354-473
- [x] T004 [P] Locate template digital-communications.html


## Phase 2: User Story 1 - View About Amateur Radio Content (P1)

**Goal**: Create About Amateur Radio page with slideshow accessible from Learning menu

**Independent Test**: Navigate from Learning menu and verify slideshow works

### Implementation

- [x] T005 [US1] Copy digital-communications.html to about-amateur-radio.html
- [x] T006 [US1] Update page title in about-amateur-radio.html
- [x] T007 [US1] Update heading to About Amateur Radio
- [x] T008 [US1] Copy slideshow HTML from index.html lines 343-473
- [x] T009 [US1] Paste slideshow into about-amateur-radio.html content area
- [ ] T010 [US1] Test page loads in Live Server
- [ ] T011 [US1] Test slideshow displays 37 slides
- [ ] T012 [US1] Test slideshow controls work

### Menu Updates (19 pages - all parallel)

- [x] T013 [P] [US1] Add menu item to index.html
- [x] T014 [P] [US1] Add menu item to events.html
- [x] T015 [P] [US1] Add menu item to digital-communications.html
- [x] T016 [P] [US1] Add menu item to morse-code.html
- [x] T017 [P] [US1] Add menu item to uhf-vhf.html
- [x] T018 [P] [US1] Add menu item to hf.html
- [x] T019 [P] [US1] Add menu item to summits-on-the-air.html
- [x] T020 [P] [US1] Add menu item to solar-propagation.html
- [x] T021 [P] [US1] Add menu item to local-nets.html
- [x] T022 [P] [US1] Add menu item to exams.html
- [x] T023 [P] [US1] Add menu item to arrl-news.html
- [x] T024 [P] [US1] Add menu item to ham-nation.html
- [x] T025 [P] [US1] Add menu item to this-week-in-amateur-radio.html
- [x] T026 [P] [US1] Add menu item to ham-radio-360.html
- [x] T027 [P] [US1] Add menu item to community-service.html
- [x] T028 [P] [US1] Add menu item to interview-on-community-service.html
- [x] T029 [P] [US1] Add menu item to contact.html
- [x] T030 [P] [US1] Add menu item to about-us.html
- [x] T031 [P] [US1] Add menu item to about-amateur-radio.html
- [x] T032 [US1] Test navigation from all pages
- [x] T033 [US1] Test mobile responsive design
- [x] T034 [US1] Commit: Create About Amateur Radio page

---

## Phase 3: User Story 2 - Streamlined Homepage (P2)

**Goal**: Remove slideshow from homepage

**Independent Test**: Homepage loads without slideshow, other content intact

### Implementation

- [x] T035 [US2] Delete intro text div from index.html lines 340-351
- [x] T036 [US2] Delete spacer div from index.html lines 351-353
- [x] T037 [US2] Delete slider div from index.html lines 354-473
- [x] T038 [US2] Test homepage loads correctly
- [x] T039 [US2] Verify no slideshow visible
- [x] T040 [US2] Verify other content displays correctly
- [x] T041 [US2] Test mobile responsive
- [x] T042 [US2] Commit: Remove slideshow from homepage

---

## Phase 4: Polish

**Purpose**: Final validation

- [ ] T043 [P] Test Chrome browser
- [ ] T044 [P] Test Firefox browser
- [ ] T045 [P] Test Edge browser
- [ ] T046 [P] Test mobile Safari
- [ ] T047 [P] Test mobile Chrome
- [ ] T048 Verify no broken links
- [ ] T049 Verify no missing images
- [ ] T050 Final push to GitHub

---

## Task Summary

- **Total**: 50 tasks
- **Setup**: 4 tasks
- **User Story 1**: 30 tasks
- **User Story 2**: 8 tasks  
- **Polish**: 8 tasks

**Parallel**: 19 menu updates can run in parallel

**MVP**: User Story 1 (34 tasks)

**Time Estimate**: 3-4 hours total
