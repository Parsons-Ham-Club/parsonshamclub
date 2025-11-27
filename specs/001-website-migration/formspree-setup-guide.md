# Formspree Setup Guide for Bob

**Purpose**: Replace the old PHP contact form with a modern, free contact form service that works with GitHub Pages.

**Time Required**: 10-15 minutes

**What You'll Need**:
- Access to your Yahoo email (ae0aq@yahoo.com)
- A web browser
- This guide

---

## Step 1: Create Formspree Account

1. **Go to Formspree**: Open your web browser and visit https://formspree.io

2. **Click "Sign Up"** (top right corner)

3. **Enter Your Information**:
   - Email: `ae0aq@yahoo.com` (your Yahoo email)
   - Password: Create a secure password (write it down somewhere safe!)
   - Click "Sign Up"

4. **Verify Your Email**:
   - Check your Yahoo inbox for an email from Formspree
   - Click the verification link in the email
   - You'll be redirected back to Formspree (now verified!)

5. **Select Free Plan**:
   - Click "Continue with Free" (allows 50 form submissions per month)
   - This is plenty for the ham club - we typically get 5-10 inquiries per month

---

## Step 2: Create Contact Form

1. **Click "New Form"** button (should be visible on your dashboard)

2. **Name Your Form**:
   - Form Name: `Parsons Ham Club Contact Form`
   - Click "Create Form"

3. **Get Your Form ID**:
   - You'll see a page showing your new form
   - Look for the **Form ID** - it looks like this: `xpznABCD` or `f/xpznABCD`
   - **IMPORTANT**: Copy this Form ID and share it with your son
   - He needs this to update the website code

---

## Step 3: Configure Form Settings

Now let's set up how the form works:

### Email Settings

1. **Click "Settings"** tab in your form dashboard

2. **Email Recipient** (where form submissions go):
   - Should already show: `ae0aq@yahoo.com`
   - If not, enter it manually

3. **Subject Line Template**:
   - Enter: `Email from Parsons Ham Club Website`
   - This will be the subject line of every email you receive

4. **Email Notifications**:
   - Make sure "Immediate" is selected
   - This means you'll get emails right away when someone submits the form

### Security Settings

5. **Enable reCAPTCHA**:
   - Find "Spam Protection" section
   - Turn on "reCAPTCHA v2 Invisible"
   - This stops bots from spamming your form
   - Visitors won't even notice it unless they look suspicious

6. **Domain Whitelist** (optional but recommended):
   - Find "Allowed Domains" section
   - Add: `parsons-ham-club.github.io`
   - This prevents other websites from using your form

### Redirect Settings

7. **Success Redirect**:
   - Find "After Submit" section
   - Select "Redirect to URL"
   - Enter: `https://parsons-ham-club.github.io/parsonshamclub/index.html`
   - This sends people back to your homepage after they submit the form

8. **Archive Submissions**:
   - Find "Archive" toggle
   - Turn it ON
   - This keeps a copy of all submissions in your Formspree dashboard for review

9. **Click "Save Settings"**

---

## Step 4: Share Form ID

Once you've completed the setup:

1. **Copy your Form ID** (from Step 2 above)
2. **Send it to your son** via text/email
3. Tell him the format - it should look like: `xpznABCD` (8 random characters)

He'll use this to update the contact.html file on the website.

---

## What Happens Next?

### After Your Son Updates the Website:

1. **Visitors fill out the contact form** at parsonshamclub.com/contact.html
2. **They click "Send"**
3. **You receive an email** at ae0aq@yahoo.com with:
   - Their email address
   - Subject line
   - Message
   - Any attachments they included
4. **You can reply directly** - just hit "Reply" in Yahoo Mail and it goes back to them

### Managing Your Form:

**View Submissions**:
- Log in to https://formspree.io
- Click on "Parsons Ham Club Contact Form"
- See all submissions in the "Submissions" tab

**Check Usage**:
- Free plan gives you 50 submissions/month
- Check your dashboard to see how many you've used
- If you need more, you can upgrade to paid ($10/month for 1000 submissions)

**Mark Spam**:
- If you get spam submissions, mark them in the Formspree dashboard
- This helps train their spam filter

---

## Troubleshooting

**Problem: Verification email not arriving**
- Check your Yahoo spam/junk folder
- Wait 5-10 minutes (sometimes delayed)
- Click "Resend verification email" on Formspree

**Problem: Can't log in**
- Click "Forgot Password" on Formspree login page
- Use password reset link sent to ae0aq@yahoo.com

**Problem: Form not working after setup**
- Double-check you shared the correct Form ID with your son
- Verify all settings saved in Step 3

**Problem: Not receiving emails**
- Check Yahoo spam folder
- Verify ae0aq@yahoo.com is in "Email Recipient" settings
- Check Formspree dashboard "Submissions" tab to confirm form is receiving data

---

## Need Help?

**Formspree Support**:
- Email: help@formspree.io
- Documentation: https://help.formspree.io
- They respond within 24-48 hours

**Your Son**:
- He can help walk you through any step
- He has detailed technical documentation

---

## Summary Checklist

Once complete, verify you've done:

- [ ] Created Formspree account with ae0aq@yahoo.com
- [ ] Verified email address
- [ ] Selected Free Plan
- [ ] Created "Parsons Ham Club Contact Form"
- [ ] Copied Form ID and shared with your son
- [ ] Set email recipient to ae0aq@yahoo.com
- [ ] Set subject template to "Email from Parsons Ham Club Website"
- [ ] Enabled reCAPTCHA spam protection
- [ ] Set redirect to homepage
- [ ] Enabled submission archiving
- [ ] Saved all settings

**You're all set!** Once your son updates the website with your Form ID, the contact form will be fully functional.
