import emailjs from '@emailjs/browser';

// ─────────────────────────────────────────────────────────────────────────────
// EmailJS Configuration
// To set this up for YOUR account:
//   1. Go to https://www.emailjs.com and sign up / log in
//   2. Create a new Email Service (Gmail, Outlook, etc.) → copy the Service ID below
//   3. Create an Email Template → copy the Template ID below
//   4. Go to Account → API Keys → copy your Public Key below
// ─────────────────────────────────────────────────────────────────────────────

const EMAILJS_SERVICE_ID  = 'service_lo7r7fn';   // ← Replace with your EmailJS Service ID
const EMAILJS_TEMPLATE_ID = 'template_ws4ib6p';  // ← Replace with your EmailJS Template ID
const EMAILJS_PUBLIC_KEY  = 's2aM_QnKT0uhCQtQk';   // ← Replace with your EmailJS Public Key

// Initialize EmailJS with your public key
emailjs.init(EMAILJS_PUBLIC_KEY);

/**
 * Send email using EmailJS.
 * The email will be delivered to whatever recipient email you configured
 * inside your EmailJS Email Template.
 *
 * @param {string} name    - Visitor's name
 * @param {string} email   - Visitor's email address
 * @param {string} message - Visitor's message
 * @returns {Promise<{ success: boolean }>}
 */
export const sendEmail = async (name, email, message) => {
  try {
    const now = new Date();
    const time = now.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    // These keys must match the variable names in your EmailJS Template
    // e.g. in your template use {{name}}, {{email}}, {{message}}, {{time}}
    const templateParams = {
      name,
      email,
      message,
      time,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
};