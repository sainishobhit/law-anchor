# Email Setup Guide for Contact Form

This guide will help you set up EmailJS to send contact form submissions to `info@sainiandsingh.com`.

## 🚀 Option 1: EmailJS Setup (Recommended)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" or "Outlook" (or your preferred email provider)
4. Connect your email account (info@sainiandsingh.com)
5. Note down the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```html
Subject: New Consultation Request from {{from_name}}

Dear Team,

A new consultation request has been submitted through the website.

**Contact Details:**
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Legal Matter: {{legal_matter}}

**Message:**
{{message}}

Please respond to {{reply_to}} within 24 hours.

Best regards,
Saini & Singh Associates Website
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### Step 5: Update the Code
Replace the placeholders in `src/components/Contact.tsx`:

```typescript
// Replace these values with your actual EmailJS credentials
emailjs.init("YOUR_PUBLIC_KEY") // Your EmailJS public key

const result = await emailjs.send(
  'YOUR_SERVICE_ID',    // Your EmailJS service ID
  'YOUR_TEMPLATE_ID',   // Your EmailJS template ID
  templateParams
)
```

### Step 6: Install Dependencies
```bash
npm install
```

## 🔧 Option 2: Backend API (Alternative)

If you prefer a backend solution, here are some options:

### Netlify Functions
Create `netlify/functions/send-email.js`:

```javascript
const nodemailer = require('nodemailer')

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {
    const { name, email, phone, matter, message } = JSON.parse(event.body)

    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: 'info@sainiandsingh.com',
        pass: process.env.EMAIL_PASSWORD
      }
    })

    const mailOptions = {
      from: 'info@sainiandsingh.com',
      to: 'info@sainiandsingh.com',
      subject: `New Consultation Request from ${name}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Legal Matter:</strong> ${matter}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    }

    await transporter.sendMail(mailOptions)

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' })
    }
  }
}
```

### Vercel Serverless Function
Create `api/send-email.js`:

```javascript
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, phone, matter, message } = req.body

    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: 'info@sainiandsingh.com',
        pass: process.env.EMAIL_PASSWORD
      }
    })

    const mailOptions = {
      from: 'info@sainiandsingh.com',
      to: 'info@sainiandsingh.com',
      subject: `New Consultation Request from ${name}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Legal Matter:</strong> ${matter}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    }

    await transporter.sendMail(mailOptions)

    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' })
  }
}
```

## 📧 Email Template Examples

### Professional Template
```html
Subject: New Legal Consultation Request - {{from_name}}

Dear Legal Team,

A new consultation request has been submitted through our website.

**Client Information:**
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Practice Area: {{legal_matter}}

**Case Details:**
{{message}}

**Next Steps:**
1. Review the request within 24 hours
2. Contact the client at {{reply_to}}
3. Schedule initial consultation if appropriate

Please update the CRM system with this lead.

Best regards,
Saini & Singh Associates
Website Contact System
```

### Simple Template
```html
Subject: Website Contact Form - {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Legal Matter: {{legal_matter}}

Message:
{{message}}

---
Sent from Saini & Singh Associates website
```

## 🔒 Security Considerations

1. **EmailJS**: Uses client-side keys (public keys are safe to expose)
2. **Backend**: Store email passwords in environment variables
3. **Rate Limiting**: Consider implementing rate limiting to prevent spam
4. **Validation**: Always validate email addresses and phone numbers

## 🚀 Deployment

### For EmailJS:
- No additional setup needed
- Works with any static hosting

### For Backend Solutions:
- **Netlify**: Deploy with Netlify Functions
- **Vercel**: Deploy with Vercel Serverless Functions
- **AWS**: Use AWS Lambda + SES
- **Google Cloud**: Use Cloud Functions + Gmail API

## 📞 Support

If you need help setting up EmailJS or implementing a backend solution, please contact the development team.

## 🔧 Testing

Test the email functionality by:
1. Filling out the contact form
2. Submitting with test data
3. Checking if email arrives at info@sainiandsingh.com
4. Verifying all form fields are included in the email

---

**Recommended**: Start with EmailJS as it's the easiest to set up and doesn't require backend infrastructure. 