# Formspree Integration Contract

**Feature**: Contact Form Migration
**Service**: Formspree (https://formspree.io)
**Date**: 2025-10-30

## Overview

Replace PHP-based contact form (`/imemail/imEmailForm.php`) with Formspree static form service. This enables contact form functionality on GitHub Pages (static hosting) without server-side code.

## Form Field Mapping

### Original PHP Form Fields → Formspree Fields

| Original Field ID | Field Type | HTML Name | Formspree Handling | Required |
|-------------------|------------|-----------|-------------------|----------|
| `imObjectForm_3_2` | email | (auto-detected via type) | Formspree captures as sender email | Yes |
| `imObjectForm_3_3` | textarea | `imObjectForm_3_3` | Passed through as "subject" | No |
| `imObjectForm_3_4` | textarea | `imObjectForm_3_4` | Passed through as "message" | No |
| `imObjectForm_3_5` | file | `imObjectForm_3_5` | Attachment handling (< 10MB) | No |
| `imSpProt` | text (honeypot) | `imSpProt` | Spam protection (keep empty) | No |

**Note**: Formspree automatically detects `type="email"` and uses it as the reply-to address. Other fields are passed through to the email body.

## HTML Form Modification

### Current Implementation (contact.html line 231-257)

```html
<form id="imObjectForm_3_form" action="imemail/imEmailForm.php" method="post" enctype="multipart/form-data">
    <fieldset class="first">
        <div>
            <div id="imObjectForm_3_1_container" class="imObjectFormFieldContainer">
                <div id="imObjectForm_3_1">To:  ae0aq@yahoo.com</div>
            </div>
            <div id="imObjectForm_3_2_container" class="imObjectFormFieldContainer">
                <label id="imObjectForm_3_2_label" for="imObjectForm_3_2">Your E-mail Address*</label><br />
                <div id="imObjectForm_3_2_field">
                    <input type="email" class="mandatory valEmail" id="imObjectForm_3_2" name="imObjectForm_3_2" />
                </div>
            </div>
            <div id="imObjectForm_3_3_container" class="imObjectFormFieldContainer">
                <label id="imObjectForm_3_3_label" for="imObjectForm_3_3"><span>Subject</span></label><br />
                <div id="imObjectForm_3_3_field">
                    <textarea class="" id="imObjectForm_3_3" name="imObjectForm_3_3" ></textarea>
                </div>
            </div>
            <div id="imObjectForm_3_4_container" class="imObjectFormFieldContainer">
                <label id="imObjectForm_3_4_label" for="imObjectForm_3_4"><span>Message</span></label><br />
                <div id="imObjectForm_3_4_field">
                    <textarea class="" id="imObjectForm_3_4" name="imObjectForm_3_4" ></textarea>
                </div>
            </div>
            <div id="imObjectForm_3_5_container" class="imObjectFormFieldContainer">
                <label id="imObjectForm_3_5_label" for="imObjectForm_3_5"><span></span></label><br />
                <div id="imObjectForm_3_5_field">
                    <input type="file" class="" data-extensions="" id="imObjectForm_3_5" name="imObjectForm_3_5" />
                </div>
            </div>
        </div>
    </fieldset>
    <fieldset>
        <input type="text" id="imObjectForm_3_prot" name="imSpProt" />
    </fieldset>
    <div id="imObjectForm_3_buttonswrap">
        <input type="submit" value="Send" />
    </div>
</form>
```

### New Implementation (Formspree)

**Change Required** (line 231 only):
```html
<!-- BEFORE -->
<form id="imObjectForm_3_form" action="imemail/imEmailForm.php" method="post" enctype="multipart/form-data">

<!-- AFTER -->
<form id="imObjectForm_3_form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Keep all other form HTML unchanged** - Formspree works with existing field structure.

## Formspree Configuration

### Account Setup

1. **Create Account**:
   - Go to https://formspree.io
   - Sign up with `ae0aq@yahoo.com` (club email)
   - Verify email address
   - Select **Free Plan** (50 submissions/month)

2. **Create Form**:
   - Click "New Form" button
   - Form name: "Parsons Ham Club Contact Form"
   - Get Form ID (format: `xpznABCD`)

3. **Configure Form Settings** (via Formspree dashboard):
   - **Email recipient**: ae0aq@yahoo.com (pre-filled from account)
   - **Subject template**: "Email from Parsons Ham Club Website"
   - **Success redirect**: https://parsons-ham-club.github.io/parsonshamclub/index.html
   - **Enable reCAPTCHA**: Yes (v2 Invisible)
   - **Archive submissions**: Yes (can review in dashboard)
   - **Email notifications**: On (immediate)

### Security Settings

**Spam Protection** (automatic):
- reCAPTCHA v2 Invisible (no user interaction unless suspicious)
- Honeypot field detection (`imSpProt` field - bots fill it, humans don't)
- Rate limiting (prevent spam floods)
- IP blacklist (Formspree maintains spam IP database)

**Domain Whitelist** (recommended):
- Add `parsons-ham-club.github.io` to allowed origins
- Prevents form submission from other domains (form hijacking)

## Email Template

### Email Format Sent to ae0aq@yahoo.com

```
From: Formspree <noreply@formspree.io>
Reply-To: [visitor's email from imObjectForm_3_2]
To: ae0aq@yahoo.com
Subject: Email from Parsons Ham Club Website

Field: imObjectForm_3_2
Value: [visitor's email address]

Field: imObjectForm_3_3
Value: [subject line from form]

Field: imObjectForm_3_4
Value: [message text from form]

Field: imObjectForm_3_5
Attachment: [filename if provided]

---
Submitted from: https://parsons-ham-club.github.io/parsonshamclub/contact.html
IP Address: [visitor's IP]
User Agent: [visitor's browser]
```

**Note**: Bob can reply directly to emails (Reply-To header contains visitor's email).

## Expected Behavior

### Successful Submission Flow

1. **User fills form** on contact.html
2. **User clicks "Send"** button
3. **Form data POSTs** to `https://formspree.io/f/YOUR_FORM_ID`
4. **Formspree validates**:
   - Email format correct
   - Honeypot field empty (not a bot)
   - reCAPTCHA passes (if triggered)
5. **Formspree sends email** to ae0aq@yahoo.com
6. **Formspree archives** submission in dashboard
7. **User redirected** to index.html (homepage)

### Error Handling

**Invalid Email**:
- Formspree returns JSON error: `{ "error": "Invalid email" }`
- User sees Formspree error page (not custom)
- Solution: Add client-side validation (HTML5 `type="email"` already present)

**Spam Detected**:
- reCAPTCHA challenge appears (user must solve)
- If fails repeatedly, submission blocked
- User sees "Submission blocked" message

**Quota Exceeded** (> 50 submissions/month):
- Formspree returns error: `{ "error": "Form limit exceeded" }`
- User sees "Form unavailable" message
- Solution: Upgrade to paid plan ($10/month for 1000 submissions) or wait for next month

## Validation Testing

### Test Scenarios

**Test 1: Valid Submission (all fields)**
- Input: valid email, subject, message, file attachment
- Expected: Email arrives at ae0aq@yahoo.com with all data, redirect to homepage
- Status: [  ] Pass / [  ] Fail

**Test 2: Valid Submission (required only)**
- Input: valid email only (subject, message, attachment empty)
- Expected: Email arrives with minimal data, redirect to homepage
- Status: [  ] Pass / [  ] Fail

**Test 3: Invalid Email**
- Input: invalid email format (e.g., "notanemail")
- Expected: Formspree error page or validation message
- Status: [  ] Pass / [  ] Fail

**Test 4: File Attachment**
- Input: valid email + PDF file attachment (< 10MB)
- Expected: Email arrives with PDF attached
- Status: [  ] Pass / [  ] Fail

**Test 5: Large File**
- Input: valid email + large file (> 10MB)
- Expected: Formspree rejects with "File too large" error
- Status: [  ] Pass / [  ] Fail

**Test 6: Spam Protection**
- Input: Fill honeypot field (`imSpProt`) + submit
- Expected: Submission blocked (no email sent)
- Status: [  ] Pass / [  ] Fail

**Test 7: Redirect**
- Input: Valid submission
- Expected: After submit, user lands on https://parsons-ham-club.github.io/parsonshamclub/index.html
- Status: [  ] Pass / [  ] Fail

**Test 8: Reply Functionality**
- Input: Valid submission from test@example.com
- Expected: Bob can click "Reply" in Gmail and it goes to test@example.com
- Status: [  ] Pass / [  ] Fail

## Migration Checklist

- [ ] Create Formspree account with ae0aq@yahoo.com
- [ ] Create new form in Formspree dashboard
- [ ] Configure email recipient (ae0aq@yahoo.com)
- [ ] Configure subject template ("Email from Parsons Ham Club Website")
- [ ] Configure success redirect (homepage URL)
- [ ] Enable reCAPTCHA v2 Invisible
- [ ] Add domain whitelist (parsons-ham-club.github.io)
- [ ] Get Form ID from Formspree
- [ ] Update contact.html form action with Form ID
- [ ] Test all validation scenarios (8 tests)
- [ ] Verify emails arrive correctly
- [ ] Verify redirect works
- [ ] Verify spam protection active
- [ ] Document Form ID for future reference
- [ ] Update quickstart.md with Formspree troubleshooting

## Rollback Plan

If Formspree integration fails or doesn't work as expected:

1. **Immediate Fallback**: Display static contact info (phone, email) without form
2. **Alternative Option**: Use Google Forms (different UX but functional)
3. **Last Resort**: Keep old Raspberry Pi running just for contact form (PHP endpoint)

## Monitoring

**Monthly Review** (Bob's responsibility):
- Check Formspree dashboard for submission count (stay under 50/month on free tier)
- Review archived submissions for spam (mark as spam in dashboard)
- Verify emails still arriving at ae0aq@yahoo.com

**Upgrade Trigger**:
- If club consistently exceeds 40 submissions/month (approaching limit)
- Consider upgrading to paid plan ($10/month for 1000 submissions)
- Cost still acceptable vs. maintaining Raspberry Pi

## Support

**Formspree Support**:
- Documentation: https://help.formspree.io
- Email: help@formspree.io (free tier has email support)
- Response time: 24-48 hours

**Common Issues**:
- Form not submitting: Check Form ID in action URL
- Emails not arriving: Check spam folder, verify recipient email
- Redirect not working: Check redirect URL configuration in Formspree settings
- Quota exceeded: Check dashboard, upgrade plan or wait for monthly reset
