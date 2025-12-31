import { transporter } from "../mail";


const sender=process.env.SMTP_SENDER_EMAIL || "test@gmail.com"

export async function sendMail(to: string, subject: string, text: string, html?: string) {
  const mailOptions = {
    from: sender,
    to,
    subject,
    text,
    html
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}