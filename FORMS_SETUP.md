# Contact Form Setup Guide

## Overview

The RedHorns Inc. website now has a fully functional contact form powered by Netlify Forms. No backend code or database required!

## How It Works

1. **Form Submission**: User fills out the form on `/contact/` page
2. **Netlify Processing**: Netlify automatically captures the submission
3. **Spam Filtering**: Honeypot field filters out bots
4. **Success Redirect**: User is redirected to `/thank-you/` page
5. **Email Notification**: You receive an email with the submission details

## Features

- ✅ **Zero Backend Code** - Netlify handles everything
- ✅ **Spam Protection** - Honeypot field catches bots
- ✅ **Email Notifications** - Get notified of new submissions
- ✅ **Dashboard Access** - View all submissions in Netlify dashboard
- ✅ **Product Context** - Captures which product they're inquiring about
- ✅ **Mobile Responsive** - Works perfectly on all devices

## Form Fields

- **Name*** (required)
- **Email*** (required)
- **Company** (optional)
- **Inquiry Type*** (required) - Investment, Partnership, Product, Media, Careers, Other
- **Message*** (required)
- **Product** (hidden) - Auto-filled from product pages

## Setup Email Notifications (Important!)

After you deploy these changes to Netlify, follow these steps to receive email notifications:

1. **Go to Netlify Dashboard**: https://app.netlify.com
2. **Select Your Site**: Click on "redhorns-inc" (or your site name)
3. **Navigate to Forms**: In the sidebar, click "Forms"
4. **Form Settings**: Click "Form notifications"
5. **Add Notification**:
   - Click "Add notification"
   - Select "Email notification"
   - Choose "New form submission" trigger
   - Enter your email address (e.g., your@email.com)
   - Choose the form: "contact"
   - Click "Save"

Now you'll receive an email every time someone submits the contact form!

## Accessing Form Submissions

### In Netlify Dashboard:
1. Go to your site in Netlify
2. Click "Forms" in the sidebar
3. Click "contact" form
4. View all submissions with details

### Email Notifications:
- You'll receive an email with all form data
- Includes name, email, company, inquiry type, message
- Shows submission time and date

## Testing the Form

### Local Testing (Hugo Server):
1. Run `hugo server -D` in the `website` directory
2. Visit `http://localhost:1313/contact/`
3. Fill out and submit the form
4. **Note**: Form won't actually submit locally (needs Netlify)
5. You'll see the form but Netlify processing only works on deployed site

### Production Testing (After Deploy):
1. Visit your live site at https://your-site.netlify.app/contact/
2. Fill out the form with test data
3. Click "Send Message"
4. You should be redirected to `/thank-you/` page
5. Check your email for notification
6. Check Netlify dashboard for submission

## Free Tier Limits

Netlify Forms free tier includes:
- **100 submissions per month**
- Spam filtering included
- Email notifications included
- Unlimited forms

If you exceed 100 submissions/month, you can:
- Upgrade to paid plan ($19/month = 1,000 submissions)
- Use another service (Formspree, FormSubmit)

## Spam Protection

The form includes two layers of spam protection:

1. **Honeypot Field**: Hidden field that bots fill out (humans don't see it)
   - If filled out, Netlify rejects the submission

2. **Netlify's Built-in Filtering**: Automatic spam detection

## Customizing the Form

### Add More Fields:
Edit `/website/layouts/partials/contact-form.html` and add:

```html
<div class="form-group">
    <label for="phone">Phone Number</label>
    <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567">
</div>
```

### Change Inquiry Types:
Edit the `<select>` dropdown in `contact-form.html`:

```html
<option value="new-type">New Inquiry Type</option>
```

### Modify Success Message:
Edit `/website/content/thank-you.md` to customize the message

## Troubleshooting

### Form Doesn't Submit:
- Make sure you've deployed to Netlify (doesn't work on localhost)
- Check that `data-netlify="true"` attribute is present
- Verify the form name matches in both form and hidden field

### Not Receiving Emails:
- Check Netlify dashboard: Site Settings > Forms > Form notifications
- Verify email address is correct
- Check spam folder
- Ensure notifications are enabled for the "contact" form

### Spam Submissions:
- Netlify's spam filter catches most bots
- Honeypot field prevents basic bots
- Can add reCAPTCHA if needed (requires upgrade)

## Next Steps

1. **Deploy Changes**: Commit and push to GitHub
2. **Configure Notifications**: Set up email alerts in Netlify dashboard
3. **Test Form**: Submit a test inquiry from live site
4. **Monitor Submissions**: Check Netlify dashboard regularly

## Support

- Netlify Forms Documentation: https://docs.netlify.com/forms/setup/
- Netlify Support: https://answers.netlify.com/

---

**Status**: ✅ Ready to deploy
**Created**: December 17, 2025
**Last Updated**: December 17, 2025
