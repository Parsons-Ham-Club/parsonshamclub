# Action Items for Bob

Your website has been migrated to GitHub Pages and is **live now** at:
**https://parsons-ham-club.github.io/parsonshamclub/**

## What's Already Done ✅

- Site is live on GitHub Pages (free hosting forever)
- All 18 pages working
- All images, videos, podcasts, calendar working
- Old PHP code removed
- RSS feeds updated

## What You Need To Do

### 1. Check the Website (10-15 minutes)

**Open**: https://parsons-ham-club.github.io/parsonshamclub/

**Verify it looks right** - you know what the site should look like. Click through the pages and make sure:
- Homepage looks correct
- Navigation works
- Images display properly
- Videos/podcasts play
- Everything looks like it did before

**If something looks wrong**: Take a screenshot and let your son know what page and what's wrong.

**If everything looks good**: Move on to step 2.

---

### 2. Set Up Contact Form (10-15 minutes)

The contact form doesn't work yet - we need to connect it to Formspree (a free service that emails you when someone submits the form).

**Follow these steps**: Open `formspree-setup-guide.md` in the `specs/001-website-migration/` folder.

**Quick version**:
1. Go to https://formspree.io and sign up with ae0aq@yahoo.com
2. Verify your email (check Yahoo inbox)
3. Create a form called "Parsons Ham Club Contact Form"
4. Copy the Form ID (looks like `xpznABCD`)
5. **Text your son the Form ID** - he'll update the website
6. Configure settings in Formspree dashboard:
   - Email recipient: ae0aq@yahoo.com (auto-filled)
   - Subject: "Email from Parsons Ham Club Website"
   - Redirect: https://parsons-ham-club.github.io/parsonshamclub/index.html
   - Turn on spam protection (reCAPTCHA)
   - Save settings

**After your son updates the site**: Test the contact form by filling it out and making sure you get the email.

---

### 3. Test the Contact Form (5 minutes)

Once your son says the form is live:

1. Go to https://parsons-ham-club.github.io/parsonshamclub/contact.html
2. Fill out the form with a test email
3. Click "Send"
4. Check your Yahoo inbox (ae0aq@yahoo.com) for the submission
5. Try clicking "Reply" to make sure it works

**If the email arrives and reply works**: You're done!

---

## That's It!

After you complete those 3 steps, the website migration is complete. The site will:
- Host for free on GitHub Pages (no Raspberry Pi needed)
- Accept contact form submissions (50/month free)
- Stay online 24/7 with zero maintenance

## Future Changes

When you want to update content later, your son can help you with:
- Adding new events
- Updating officer information
- Adding new photos
- Changing text

## Questions?

Call or text your son - he has all the technical details.

## Summary Checklist

- [ ] Check website looks correct (all 18 pages)
- [ ] Create Formspree account
- [ ] Configure Formspree settings
- [ ] Share Form ID with your son
- [ ] Test contact form after son updates it
- [ ] Celebrate! 🎉 Website is live!
