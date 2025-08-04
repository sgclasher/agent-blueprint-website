import sgMail from '@sendgrid/mail';

let sendGridConfigured = false;

function ensureSendGridConfigured(): boolean {
  if (!sendGridConfigured && process.env.SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    sendGridConfigured = true;
  }
  return sendGridConfigured;
}

interface ContactEmailData {
  name: string;
  email: string;
  company: string | null;
  message: string;
}

export async function sendContactEmail(data: ContactEmailData): Promise<boolean> {
  try {
    if (!ensureSendGridConfigured()) {
      console.warn('SendGrid not configured - SENDGRID_API_KEY environment variable is required for email functionality');
      return false;
    }

    const emailContent = `
New Contact Form Submission from Agent Blueprint Website

Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not provided'}

Message:
${data.message}

---
This email was sent from the Agent Blueprint contact form.
    `.trim();

    const msg = {
      to: ['amy@agentblueprint.ai', 'chris@agentblueprint.ai'],
      from: 'noreply@agentblueprint.ai', // This should be a verified sender in SendGrid
      subject: `New Contact Form Submission from ${data.name}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    };

    await sgMail.send(msg);
    console.log('Contact form email sent successfully to amy@agentblueprint.ai and chris@agentblueprint.ai');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}