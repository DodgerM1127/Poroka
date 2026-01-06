import sgMail from '@sendgrid/mail'

const API_KEY = process.env.SENDGRID_API_KEY
const FROM = process.env.EMAIL_FROM || 'no-reply@gajamatej.com'

if (API_KEY) sgMail.setApiKey(API_KEY)

function formatEntryHtml(entry) {
  return `
    <p><strong>${entry.name}</strong> submitted an RSVP:</p>
    <ul>
      <li>Attending: ${entry.attending ? 'Yes' : 'No'}</li>
      <li>Guests: ${entry.party_size}</li>
      <li>Email: ${entry.email}</li>
      <li>Message: ${entry.message || '—'}</li>
      <li>Submitted at: ${entry.submitted_at}</li>
    </ul>
  `
}

export async function sendConfirmation(to, name, entry) {
  if (!API_KEY) {
    console.warn('SENDGRID_API_KEY not set; skipping confirmation email')
    return
  }
  const msg = {
    to,
    from: FROM,
    subject: `Gaja & Matej — RSVP received`,
    text: `${name}, thank you! We received your RSVP for Gaja & Matej. Attending: ${entry.attending ? 'Yes' : 'No'}. Guests: ${entry.party_size}.`,
    html: `
      <p>Hi ${name},</p>
      <p>Thank you for your RSVP for <strong>Gaja & Matej</strong>.</p>
      ${formatEntryHtml(entry)}
      <p>We look forward to seeing you!</p>
    `,
  }
  return sgMail.send(msg)
}

export async function sendAdminNotification(adminEmails, entry) {
  if (!API_KEY) {
    console.warn('SENDGRID_API_KEY not set; skipping admin notification')
    return
  }
  if (!adminEmails || adminEmails.length === 0) {
    console.warn('No admin emails configured; skipping admin notification')
    return
  }
  const msg = {
    to: adminEmails,
    from: FROM,
    subject: `New RSVP: ${entry.name}`,
    text: `${entry.name} submitted an RSVP (attending: ${entry.attending ? 'yes' : 'no'}, guests: ${entry.party_size})`,
    html: `
      <p>New RSVP submitted:</p>
      ${formatEntryHtml(entry)}
    `,
  }
  return sgMail.send(msg)
}
