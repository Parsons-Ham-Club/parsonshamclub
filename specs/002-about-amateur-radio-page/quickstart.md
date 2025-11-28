# Quick Start Guide: About Amateur Radio Page

**Feature**: About Amateur Radio Page
**Branch**: 002-about-amateur-radio-page

## Implementation Overview

Create a new About Amateur Radio page with the slideshow and update navigation across all site pages.

## Step-by-Step Implementation

### Step 1: Create New Page

1. Copy digital-communications.html to about-amateur-radio.html
2. Update page title and heading
3. Copy slideshow component from index.html lines 354-473
4. Test page loads correctly

### Step 2: Update Navigation Menus

Update all 19 HTML pages to add About Amateur Radio link as first item in Learning dropdown menu.

Pages to update:
- index.html, events.html, digital-communications.html, morse-code.html
- uhf-vhf.html, hf.html, summits-on-the-air.html, solar-propagation.html
- local-nets.html, exams.html, arrl-news.html, ham-nation.html
- this-week-in-amateur-radio.html, ham-radio-360.html
- community-service.html, interview-on-community-service.html
- contact.html, about-us.html, about-amateur-radio.html

### Step 3: Remove Slideshow from Homepage

In index.html, delete slideshow sections (lines 340-473).

### Step 4: Testing

- Test new page displays slideshow correctly
- Verify navigation works from all pages
- Confirm homepage no longer shows slideshow
- Check mobile responsive design

## Git Workflow

```bash
git add about-amateur-radio.html
git commit -m "Create About Amateur Radio page"

git add *.html
git commit -m "Update navigation menus"

git add index.html  
git commit -m "Remove slideshow from homepage"
```

## Next Steps

Run /speckit.tasks to generate detailed task breakdown.
