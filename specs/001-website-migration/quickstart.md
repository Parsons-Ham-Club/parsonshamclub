# Quickstart Guide: Website Maintenance for Bob

**Purpose**: Step-by-step guide for maintaining the Parsons Ham Club website using VS Code and Git
**Audience**: Bob Hoffman (site owner, comfortable with HTML but new to Git workflow)
**Last Updated**: 2025-10-30

## Table of Contents

1. [One-Time Setup](#one-time-setup)
2. [Daily Workflow](#daily-workflow)
3. [Common Tasks](#common-tasks)
4. [Troubleshooting](#troubleshooting)
5. [Getting Help](#getting-help)

---

## One-Time Setup

### Step 1: Install Required Software

**VS Code** (text editor):
1. Go to https://code.visualstudio.com
2. Click "Download for Mac" (or Windows)
3. Open downloaded file
4. Drag "Visual Studio Code" to Applications folder
5. Open VS Code from Applications

**Git** (version control):
1. Open Terminal (Applications → Utilities → Terminal)
2. Type: `git --version` and press Enter
3. If Git is already installed, skip to Step 2
4. If not installed, go to https://git-scm.com/downloads
5. Download and install Git for your operating system
6. After install, configure your name and email:
   ```bash
   git config --global user.name "Bob Hoffman"
   git config --global user.email "ae0aq@gmail.com"
   ```

### Step 2: Clone the Website Repository

1. Open VS Code
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows) to open Command Palette
3. Type "Git: Clone" and press Enter
4. Paste this URL: `https://github.com/Parsons-Ham-Club/parsonshamclub.git`
5. Choose a folder on your computer to save the website (e.g., Documents/parsonshamclub)
6. Click "Open" when VS Code asks if you want to open the cloned repository

**You should now see** all website files in the VS Code sidebar!

### Step 3: Install Live Server Extension

1. In VS Code, click the Extensions icon in left sidebar (looks like 4 squares)
2. Search for "Live Server"
3. Find "Live Server" by Ritwick Dey
4. Click "Install"
5. Wait for installation to complete

**You're all set!** This setup only needs to be done once.

---

## Daily Workflow

### Opening Your Website for Editing

1. Open VS Code
2. File → Open Folder → Select your website folder (e.g., Documents/parsonshamclub)
3. All website files appear in the left sidebar

### Making Changes to the Website

**5-Step Process** (you'll use this every time):

1. **Edit** → Make changes to HTML/CSS files
2. **Preview** → Test changes locally (optional but recommended)
3. **Stage** → Tell Git which files to save
4. **Commit** → Save changes with a description
5. **Push** → Upload changes to GitHub (makes them live)

Let's walk through each step:

### Step 1: Edit Files

- Navigate to the file you want to edit in the sidebar (e.g., `contact.html`)
- Click to open it
- Make your changes (e.g., update club officer name)
- Press `Cmd+S` (Mac) or `Ctrl+S` (Windows) to save

### Step 2: Preview Changes (Optional)

**Test locally before publishing:**

1. Right-click on the HTML file you edited (e.g., `index.html`)
2. Select "Open with Live Server"
3. Your browser opens automatically showing the page
4. Make more edits if needed - browser refreshes automatically when you save
5. When satisfied, close browser tab (or keep open)

### Step 3: Stage Changes

1. Click the **Source Control** icon in left sidebar (looks like a branching tree)
2. You'll see a list of files you changed (under "Changes")
3. Hover over each file and click the **+** button (or click **+** next to "Changes" to stage all)
4. Files move to "Staged Changes" section

### Step 4: Commit Changes

1. In the "Message" box at the top, type a short description of what you changed
   - Good: "Update club president name on contact page"
   - Bad: "changes" or "update"
2. Click the **✓ checkmark** button above the message box
3. Your changes are now saved locally (but not yet online)

### Step 5: Push to GitHub

1. Click the **"Sync Changes"** button (cloud icon with up/down arrows)
2. If asked for GitHub credentials, enter your GitHub username and password
3. Wait for the sync to complete (you'll see a success message)
4. **Wait 1-2 minutes** for GitHub Pages to rebuild your site
5. Visit https://parsons-ham-club.github.io/parsonshamclub/ to see your changes live!

---

## Common Tasks

### Task 1: Update Text Content (e.g., Change Club Officer Names)

**File**: `contact.html`
**Location**: Lines 262-265

1. Open `contact.html` in VS Code
2. Press `Cmd+F` (Mac) or `Ctrl+F` (Windows) to search
3. Search for "Club President" (or the text you want to change)
4. Update the name and call sign
5. Save file (`Cmd+S` or `Ctrl+S`)
6. Follow Daily Workflow steps 3-5 (Stage, Commit, Push)

**Example Change**:
```html
<!-- BEFORE -->
<div><span class="fs14lh1-5 ff1">Club President: Tom Sevart  N2UHC</span></div>

<!-- AFTER -->
<div><span class="fs14lh1-5 ff1">Club President: John Smith  K0ABC</span></div>
```

### Task 2: Add a New Image

**Files**: Image file → `/images/` folder, HTML file

**Step 1: Add Image File**
1. Find your image file on your computer (e.g., `new-radio.jpg`)
2. In VS Code, right-click on the `images` folder in sidebar
3. Select "Reveal in Finder" (Mac) or "Reveal in Explorer" (Windows)
4. Copy your image file into this folder
5. Go back to VS Code (it should detect the new file)

**Step 2: Reference Image in HTML**
1. Open the HTML file where you want the image (e.g., `about-us.html`)
2. Find where you want to insert the image
3. Add this code:
   ```html
   <img src="images/new-radio.jpg" alt="Description of image" />
   ```
4. Replace `new-radio.jpg` with your actual filename
5. Replace "Description of image" with a short description
6. Save file

**Step 3: Test and Publish**
1. Preview locally with Live Server (should see your new image)
2. Follow Daily Workflow steps 3-5 (Stage, Commit, Push)

### Task 3: Update Meeting Information

**File**: `contact.html` or `index.html`

1. Open the relevant HTML file
2. Search (`Cmd+F` or `Ctrl+F`) for the text you want to change
   - e.g., "7:00 pm first Monday" or "Parsons Arboretum"
3. Make your changes
4. Save file
5. Follow Daily Workflow steps 3-5 (Stage, Commit, Push)

### Task 4: Fix a Typo

1. Find the file with the typo (check all HTML files if unsure)
2. Open the file in VS Code
3. Use Find (`Cmd+F` or `Ctrl+F`) to search for the misspelled word
4. Correct the spelling
5. Save file
6. Follow Daily Workflow steps 3-5 (Stage, Commit, Push)

**Pro Tip**: VS Code has spell check! Misspelled words show a squiggly underline.

### Task 5: Update Google Calendar Events

**No code changes needed!**

1. Go to Google Calendar (https://calendar.google.com)
2. Sign in with the club Google account
3. Find the "Parsons Amateur Radio Club" calendar
4. Add/edit/delete events directly in Google Calendar
5. Changes appear automatically on the Events page (events.html)

**Note**: The calendar ID is embedded in events.html - don't change it unless you create a new calendar.

---

## Troubleshooting

### Problem: "Push Failed" or "Pull Required"

**Cause**: Someone else (or you from another computer) made changes

**Solution**:
1. Click the **"Sync Changes"** button again
2. VS Code will pull (download) the new changes first
3. Then try pushing your changes again
4. If you see a merge conflict (rare), ask for help

### Problem: "Website Looks Broken" After Push

**Cause**: You may have accidentally deleted important code

**Solution**: Revert to previous version
1. In Source Control panel, click the **three dots** (**···**) menu
2. Select "Commit" → "Undo Last Commit"
3. Your files return to the state before your last commit
4. Fix the issue and commit again

**Prevention**: Always test with Live Server before pushing!

### Problem: "Image Doesn't Show on Website"

**Cause**: File path is wrong or image file not uploaded

**Checklist**:
- [ ] Did you copy the image file to the `/images/` folder?
- [ ] Did you commit and push the image file? (check Source Control)
- [ ] Is the filename in HTML exactly the same as the actual file? (case-sensitive!)
- [ ] Does the `src` attribute start with `images/` (e.g., `src="images/photo.jpg"`)?

### Problem: "Contact Form Stopped Working"

**Cause**: Formspree monthly quota exceeded (50 submissions/month)

**Solution**:
1. Go to https://formspree.io and log in
2. Check dashboard for submission count
3. If over 50, either:
   - Wait until next month (quota resets monthly)
   - Upgrade to paid plan ($10/month for 1000 submissions)

**Alternative**: Tell visitors to email ae0aq@yahoo.com directly until form is restored

### Problem: "Can't Find the File I Want to Edit"

**Tip**: Use VS Code's file search
1. Press `Cmd+P` (Mac) or `Ctrl+P` (Windows)
2. Start typing the filename (e.g., "contact")
3. Select the file from the list that appears

### Problem: "Live Server Isn't Working"

**Checklist**:
- [ ] Did you install the Live Server extension?
- [ ] Did you right-click on an **HTML file** (not CSS/JS)?
- [ ] Is your browser blocking popups? (allow popups from VS Code)

**Fallback**:
- Open the HTML file directly in your browser (File → Open)
- Make edits, save, then manually refresh browser (F5)

---

## Getting Help

### Free AI Assistant (Gemini)

**When to use**: You're stuck on HTML/CSS syntax or not sure how to do something

1. Go to https://gemini.google.com
2. Sign in with your Google account (can use ae0aq@gmail.com or personal)
3. Ask questions like:
   - "How do I make text bold in HTML?"
   - "How do I add a link to another page in HTML?"
   - "How do I change the background color of a div in CSS?"
4. Gemini will explain and provide code examples
5. Copy the code into your HTML file and test

### GitHub Support

**When to use**: Issues with Git, pushing, pulling, repository access

- Help Center: https://support.github.com
- Email: support@github.com (response in 24-48 hours)
- Forum: https://github.community

### Formspree Support

**When to use**: Contact form issues (not receiving emails, quota, spam)

- Documentation: https://help.formspree.io
- Email: help@formspree.io (response in 24-48 hours)

### VS Code Help

**When to use**: Issues with VS Code itself, extensions, interface

- Built-in help: Help → Welcome (shows tutorials)
- Documentation: https://code.visualstudio.com/docs
- Video tutorials: Search "VS Code tutorial" on YouTube

### Ask a Fellow Ham

**When to use**: General questions, want a second opinion

- Bring your laptop to a club meeting
- Ask another member familiar with websites
- Show them what you're trying to do

---

## Quick Reference Card

### Daily Workflow Checklist

- [ ] 1. Open VS Code → Open Folder (your website)
- [ ] 2. Edit the HTML/CSS file you want to change
- [ ] 3. Save file (`Cmd+S` or `Ctrl+S`)
- [ ] 4. (Optional) Test with Live Server
- [ ] 5. Click Source Control icon
- [ ] 6. Stage changes (click **+** button)
- [ ] 7. Write commit message
- [ ] 8. Click **✓** to commit
- [ ] 9. Click "Sync Changes" to push
- [ ] 10. Wait 1-2 minutes, check live site

### Keyboard Shortcuts (Mac)

- Save: `Cmd+S`
- Find: `Cmd+F`
- Command Palette: `Cmd+Shift+P`
- File Search: `Cmd+P`
- Toggle Sidebar: `Cmd+B`

### Keyboard Shortcuts (Windows)

- Save: `Ctrl+S`
- Find: `Ctrl+F`
- Command Palette: `Ctrl+Shift+P`
- File Search: `Ctrl+P`
- Toggle Sidebar: `Ctrl+B`

### Important URLs

- **Live Website**: https://parsons-ham-club.github.io/parsonshamclub/
- **GitHub Repository**: https://github.com/Parsons-Ham-Club/parsonshamclub
- **Formspree Dashboard**: https://formspree.io/forms (check submission count)

### Important File Locations

- **Homepage**: `index.html`
- **Contact Page**: `contact.html`
- **About Page**: `about-us.html`
- **Club Officers Info**: `contact.html` (lines 262-265)
- **Meeting Info**: `contact.html` (lines 263)
- **Images**: `/images/` folder
- **Styles**: `/style/` and `/pcss/` folders

---

## Tips for Success

1. **Commit Often**: Make small, frequent changes rather than huge updates
2. **Descriptive Messages**: Write clear commit messages so you remember what you changed
3. **Test First**: Always preview with Live Server before pushing to GitHub
4. **Don't Fear Mistakes**: Git saves every version - you can always undo!
5. **Keep It Simple**: If you're unsure, ask Gemini or a fellow ham before making big changes
6. **Backup Important Files**: Download copies of important content before editing
7. **Check Live Site**: After pushing, always verify changes on the live website

---

## What NOT to Do

❌ **Don't** delete files you don't recognize (HTML, CSS, JS folders) - they're all needed!
❌ **Don't** edit files in `/res/`, `/style/`, `/pcss/` folders unless you know what you're doing
❌ **Don't** change file extensions (keep .html as .html, .css as .css)
❌ **Don't** reorganize folder structure (move files to different folders)
❌ **Don't** remove the `<head>` or `<body>` tags from HTML files
❌ **Don't** share your GitHub password with anyone
❌ **Don't** panic if something breaks - you can always revert commits!

---

**Remember**: You've got this! The website is just HTML files, and you've been editing HTML for years. Git and VS Code just give you better tools to do what you already know how to do.

73 de [Your Call Sign], Bob!
