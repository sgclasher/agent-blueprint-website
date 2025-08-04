import sgMail from '@sendgrid/mail';

let sendGridConfigured = false;

function ensureSendGridConfigured(): boolean {
  if (!sendGridConfigured && process.env.SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    sendGridConfigured = true;
    console.log('SendGrid configured with API key');
  }
  return sendGridConfigured;
}

interface ContactEmailData {
  name: string;
  email: string;
  company: string | null;
  message: string;
}

function logContactSubmissionToConsole(data: ContactEmailData): void {
  const separator = '==================================================';
  console.log(separator);
  console.log('📧 NEW CONTACT FORM SUBMISSION (Email delivery failed)');
  console.log(separator);
  console.log(`Name: ${data.name}`);
  console.log(`Email: ${data.email}`);
  console.log(`Company: ${data.company || 'Not provided'}`);
  console.log('Message:');
  console.log(data.message);
  console.log(separator);
  console.log('⚠️  Please manually follow up with this contact!');
  console.log(separator);
}

export async function sendContactEmail(data: ContactEmailData): Promise<boolean> {
  try {
    if (!ensureSendGridConfigured()) {
      console.warn('SendGrid not configured - SENDGRID_API_KEY environment variable is required for email functionality');
      logContactSubmissionToConsole(data);
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
    `;

    // Try multiple from addresses in case one isn't verified
    const fromAddresses = [
      'noreply@agentblueprint.ai',
      'contact@agentblueprint.ai', 
      'info@agentblueprint.ai',
      'hello@agentblueprint.ai'
    ];

    for (const fromAddress of fromAddresses) {
      try {
        const msg = {
          to: ['amy@agentblueprint.ai', 'chris@agentblueprint.ai'],
          from: fromAddress,
          subject: `New Contact Form Submission from ${data.name}`,
          text: emailContent,
          html: emailContent.replace(/\n/g, '<br>'),
        };

        await sgMail.send(msg);
        console.log(`Contact form email sent successfully from ${fromAddress} to amy@agentblueprint.ai and chris@agentblueprint.ai`);
        return true;
      } catch (fromError: any) {
        console.warn(`Failed to send from ${fromAddress}:`, fromError?.message || 'Unknown error');
        continue;
      }
    }

    console.error('Failed to send email from any verified sender address');
    logContactSubmissionToConsole(data);
    return false;
  } catch (error: any) {
    console.error('SendGrid email error:', error);
    
    // Log detailed error information
    if (error?.response?.body) {
      console.error('SendGrid error details:', error.response.body);
    }
    
    // Check if it's an API key issue
    if (error?.code === 401) {
      console.error('Authentication error - please verify your SendGrid API key is valid and has the necessary permissions');
    }
    
    logContactSubmissionToConsole(data);
    return false;
  }
}