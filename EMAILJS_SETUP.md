# EmailJS Setup Instructions

To enable the contact form to send real emails, you need to set up EmailJS. Follow these steps:

## 1. Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)

## 2. Create Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authorization steps
5. Note down your **Service ID**

## 3. Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

**Subject:**
```
New Portfolio Contact: {{subject}}
```

**Content:**
```
Hello {{to_name}},

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Best regards,
{{from_name}}
```

4. Save the template
5. Note down your **Template ID**

## 4. Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key**

## 5. Configure Your Application

1. Copy `.env.local.example` to `.env.local`:
```bash
cp .env.local.example .env.local
```

2. Edit `.env.local` and add your credentials:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Restart your development server:
```bash
pnpm dev
```

## 6. Test the Form

1. Fill out the contact form on your website
2. Submit it
3. Check your email for the test message
4. Check EmailJS dashboard for email history

## Troubleshooting

- **Emails not sending**: Check that all environment variables are set correctly
- **403 Error**: Verify your public key is correct
- **Template not found**: Ensure template ID matches exactly
- **Rate limit**: Free tier is limited to 200 emails/month

## Security Notes

- Never commit `.env.local` to version control
- EmailJS public key is safe to expose (it's meant to be public)
- For production, consider upgrading to a paid plan for more emails