import { transporter } from "../mail";
import { welcomeEmailTemplate } from "../mailtemplates/welcome";
import { preorderEmailTemplate } from "../mailtemplates/preorder";


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
    // console.log("Email sent:", info);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendWelcomeMail(email:string, name?: string){
    const subject="Welcome to the loud family"
    const text=`Welcome to loud, ${name || ''}, we are happy to have you here`
    const html = welcomeEmailTemplate(name || 'there')
    await sendMail(email,subject,text, html)
}

export async function sendPreorderMail(email:string, name?: string){
    const subject="Loud Preorder"
    const text=`Thank you for your preorder, ${name || ''}`
    const html = preorderEmailTemplate(name || 'there')
    await sendMail(email,subject,text, html)
}
