import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'VIP Function Planners <no-reply@vipfunctionplanners.com>',
      to: ['contact@vipfunctionplanners.com'],
      reply_to: formData.email,
      subject: `New Contact Form Submission - ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border: 1px solid #e5e7eb; font-weight: bold;">Name</td>
              <td style="padding: 8px; border: 1px solid #e5e7eb;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #e5e7eb; font-weight: bold;">Email</td>
              <td style="padding: 8px; border: 1px solid #e5e7eb;">${formData.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #e5e7eb; font-weight: bold;">Phone</td>
              <td style="padding: 8px; border: 1px solid #e5e7eb;">${formData.phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #e5e7eb; font-weight: bold;">Event Type</td>
              <td style="padding: 8px; border: 1px solid #e5e7eb;">${formData.eventType}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #e5e7eb; font-weight: bold;">Date</td>
              <td style="padding: 8px; border: 1px solid #e5e7eb;">${formData.date}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #e5e7eb; font-weight: bold;">Message</td>
              <td style="padding: 8px; border: 1px solid #e5e7eb;">${formData.message}</td>
            </tr>
          </table>
          <p style="margin-top: 20px;">
            <a href="mailto:${formData.email}" style="color: #4f46e5; text-decoration: none;">Reply to ${formData.name}</a>
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { success: false, error }
  }
}

export async function sendBookingConfirmation(formData) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'VIP Function Planners <bookings@vipfunctionplanners.com>',
      to: [formData.email],
      subject: `Booking Confirmation - ${formData.eventType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #111827;">
          <h2 style="color: #4f46e5;">Thank you for your booking!</h2>
          <p>Dear ${formData.name},</p>
          <p>We've received your booking request for ${formData.eventType} on ${formData.date}.</p>
          
          <h3 style="margin-top: 24px; color: #4f46e5;">Booking Details:</h3>
          <ul style="padding-left: 20px;">
            <li><strong>Event Type:</strong> ${formData.eventType}</li>
            <li><strong>Date:</strong> ${formData.date}</li>
            <li><strong>Guests:</strong> ${formData.guests}</li>
            <li><strong>Package:</strong> ${formData.package}</li>
          </ul>
          
          <p style="margin-top: 24px;">
            Our team will contact you within 24 hours to confirm the details and discuss next steps.
          </p>
          
          <p style="margin-top: 24px;">
            For any urgent inquiries, please call us at <a href="tel:8778304145" style="color: #4f46e5;">8778304145</a>.
          </p>
          
          <p style="margin-top: 32px;">
            Warm regards,<br>
            <strong>The VIP Function Planners Team</strong>
          </p>
          
          <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;">
            <p>VIP Function Planners</p>
            <p>13/71 South Street keezha Asaripallam, Nagercoil, Tamil Nadu 629201</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Confirmation email failed:', error)
    return { success: false, error }
  }
}