import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactEmailData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export async function sendContactEmail(data: ContactEmailData): Promise<boolean> {
  try {
    const emailContent = `
New Contact Form Submission from Agent Blueprint Website

Name: ${data.name}
Email: ${data.email}
Company: ${data.company}

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