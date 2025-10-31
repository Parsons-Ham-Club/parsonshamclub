# Visual Regression Testing Checklist

**Purpose**: Complete validation checklist for all 18 HTML pages during migration
**Testing Method**: Side-by-side comparison of original (archive) vs. GitHub Pages deployment
**Total Checks**: 126 (18 pages × 7 test criteria)

## Testing Criteria

For each page, verify all 7 criteria:

1. ✅ Header slideshow displays (10 ham shack photos rotate)
2. ✅ Navigation menu works (desktop + mobile hamburger)
3. ✅ Main content layout matches original
4. ✅ Images display correctly (no broken links)
5. ✅ Footer displays (contact info, officers)
6. ✅ Page-specific CSS applied (colors, fonts, spacing)
7. ✅ Responsive design works (mobile/tablet/desktop)

---

## Page-by-Page Checklist

### 1. index.html (Homepage)
- [ ] Header slideshow (10 ham shack photos)
- [ ] Navigation menu (desktop + mobile)
- [ ] Justified gallery (17 ham radio topic images)
- [ ] Jssor slider (37 presentation slides)
- [ ] Footer (contact info, officers)
- [ ] Page CSS (index.css loaded)
- [ ] Responsive design (mobile/tablet/desktop)

**Special Features**:
- Justified gallery with click-to-enlarge
- Jssor slider with transition effects
- Header slideshow auto-rotation

---

### 2. contact.html
- [ ] Header slideshow
- [ ] Navigation menu
- [ ] Contact form displays (Note: form action will be updated for Formspree)
- [ ] Form fields: email, subject, message, file attachment
- [ ] Footer
- [ ] Page CSS (contact.css)
- [ ] Responsive design

**Special Features**:
- Contact form (will be updated to Formspree in Phase 5)
- Club meeting info in footer

---

### 3. about-us.html
- [ ] Header slideshow
- [ ] Navigation menu
- [ ] Main content layout
- [ ] Images display
- [ ] Footer
- [ ] Page CSS (about-us.css)
- [ ] Responsive design

---

### 4. events.html
- [ ] Header slideshow
- [ ] Navigation menu
- [ ] Google Calendar embed displays
- [ ] Calendar shows events from calendar ID: 3f0fiqgp4bdhs0ms88lq63u11s@group.calendar.google.com
- [ ] Footer
- [ ] Page CSS (events.css)
- [ ] Responsive design

**Special Features**:
- Google Calendar iframe embed

---

### 5. exams.html
- [ ] Header slideshow
- [ ] Navigation menu
- [ ] Main content layout
- [ ] Images display
- [ ] Footer
- [ ] Page CSS (exams.css)
- [ ] Responsive design

---

### 6. local-nets.html
- [ ] Header slideshow
- [ ] Navigation menu
- [ ] Main content layout
- [ ] Images display
- [ ] Footer
- [ ] Page CSS (local-nets.css)
- [ ] Responsive design

---

### 7. arrl-news.html
- [ ] Header slideshow
- [ ] Navigation menu
- [ ] TuneIn podcast player embed (TuneIn ID: p1023163)
- [ ] Podcast player streams correctly
- [ ] Footer
- [ ] Page CSS (arrl-news.css)
- [ ] Responsive design

**Special Features**:
- TuneIn podcast player iframe embed

---

### 8. ham-nation.html
- [ ] Header slideshow
- [ ] Navigation menu
- [ ] TuneIn podcast player embed (TuneIn ID: p355704)
- [ ] Podcast player streams correctly
- [ ] Footer
- [ ] Page CSS (ham-nation.css)
- [ ] Responsive design

**Special Features**:
- TuneIn podcast player iframe embed

---

### 9. ham-radio-360.html
- [ ] Header slideshow
- [ ] Navigation menu
- [ ] TuneIn podcast player embed (TuneIn ID: p662317)
- [ ] Podcast player streams correctly
- [ ] Footer
- [ ] Page CSS (ham-radio-360.css)
- [ ] Responsive design

**Special Features**:
- TuneIn podcast player iframe embed

---

### 10. this-week-in-amateur-radio.html
- [ ] Header slideshow
- [ ] Navigation menu
- [ ] TuneIn podcast player embed (TuneIn ID: p244619)
- [ ] Podcast player streams correctly
- [ ] Footer
- [ ] Page CSS (this-week-in-amateur-radio.css)
- [ ] Responsive design

**Special Features**:
- TuneIn podcast player iframe embed

---

### 11. digital-communications.html
- [ ] Header slideshow
- [ ] Navigation menu
- [ ] YouTube video embed (video ID: RwEJjvkl_w4)
- [ ] Video plays correctly
- [ ] Footer
- [ ] Page CSS (digital-communications.css)
- [ ] Responsive design

**Special Features**:
- YouTube video iframe embed

---

### 12. morse-code.html
- [ ] Header slideshow
- [ ] Navigation menu
- [ ] YouTube video embed (video ID: JVqjF6VWnzw)
- [ ] Video plays correctly
- [ ] Footer
- [ ] Page CSS (morse-code.css)
- [ ] Responsive design

**Special Features**:
- YouTube video iframe embed

---

### 13. uhf-vhf.html
- [ ] Header slideshow
- [ ] Navigation menu
- [ ] YouTube video embed (video ID: g331FDP8_cA)
- [ ] Video plays correctly
- [ ] Footer
- [ ] Page CSS (uhf-vhf.css)
- [ ] Responsive design

**Special Features**:
- YouTube video iframe embed

---

### 14. hf.html
- [ ] Header slideshow
- [ ] Navigation menu
- [ ] External iframe displays
- [ ] Iframe content loads correctly
- [ ] Footer
- [ ] Page CSS (hf.css)
- [ ] Responsive design

**Special Features**:
- External iframe embed

---

### 15. summits-on-the-air.html
- [ ] Header slideshow
- [ ] Navigation menu
- [ ] YouTube video embed (video ID: 1usAFerA7vE)
- [ ] Video plays correctly
- [ ] RSS feed widget displays
- [ ] Footer
- [ ] Page CSS (summits-on-the-air.css)
- [ ] Responsive design

**Special Features**:
- YouTube video iframe embed
- RSS feed widget

---

### 16. solar-propagation.html
- [ ] Header slideshow
- [ ] Navigation menu
- [ ] YouTube video embeds (2 videos)
- [ ] Videos play correctly
- [ ] Google Docs PDF viewer displays QSL.net propagation document
- [ ] PDF viewer loads and displays content
- [ ] Footer
- [ ] Page CSS (solar-propagation.css)
- [ ] Responsive design

**Special Features**:
- 2 YouTube video iframe embeds
- Google Docs PDF viewer

---

### 17. community-service.html
- [ ] Header slideshow
- [ ] Navigation menu
- [ ] Main content layout
- [ ] Images display
- [ ] Footer
- [ ] Page CSS (community-service.css)
- [ ] Responsive design

---

### 18. interview-on-community-service.html
- [ ] Header slideshow
- [ ] Navigation menu
- [ ] Main content layout
- [ ] Images display
- [ ] Footer
- [ ] Page CSS (interview-on-community-service.css)
- [ ] Responsive design

---

## Browser Compatibility Testing

### Desktop Testing

**Chrome Desktop** (Primary):
- [ ] Test all 18 pages in Chrome
- [ ] Verify header slideshows work
- [ ] Verify navigation menus work
- [ ] Verify all external embeds load

**Firefox Desktop** (Secondary):
- [ ] Spot check 5 pages (index, contact, events, digital-communications, summits-on-the-air)
- [ ] Verify basic functionality

**Safari Desktop** (macOS):
- [ ] Spot check 5 pages (index, contact, events, arrl-news, solar-propagation)
- [ ] Verify basic functionality

**Edge Desktop** (Windows):
- [ ] Spot check 5 pages
- [ ] Verify basic functionality

### Mobile Testing

**Chrome Mobile** (Dev Tools):
- [ ] Test index.html on mobile viewport
- [ ] Test contact.html on mobile viewport
- [ ] Verify hamburger menu expands/collapses
- [ ] Verify image scaling works
- [ ] Verify touch targets are appropriate size

---

## External Embed Validation

### Google Calendar
- [ ] events.html: Calendar embed loads
- [ ] Calendar displays club events
- [ ] Calendar is interactive (navigate months)

### YouTube Videos (5 total)
- [ ] digital-communications.html: Video plays
- [ ] morse-code.html: Video plays
- [ ] uhf-vhf.html: Video plays
- [ ] summits-on-the-air.html: Video plays
- [ ] solar-propagation.html: Both videos play

### TuneIn Podcast Players (4 total)
- [ ] arrl-news.html: Player streams
- [ ] ham-nation.html: Player streams
- [ ] ham-radio-360.html: Player streams
- [ ] this-week-in-amateur-radio.html: Player streams

### Other Embeds
- [ ] hf.html: External iframe loads
- [ ] solar-propagation.html: Google Docs PDF viewer displays

---

## Summary

**Total Pages**: 18
**Total Checks**: 126 (18 pages × 7 criteria)
**External Embeds**: 11 (1 Google Calendar, 5 YouTube, 4 TuneIn, 1 PDF viewer)
**Browser Tests**: 4 desktop browsers + mobile viewport

**Acceptance Criteria**: All 126 checks must pass for visual regression testing to be considered complete.
