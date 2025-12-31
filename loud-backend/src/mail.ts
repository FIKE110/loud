import nodemailer from "nodemailer";

const host=process.env.SMTP_HOST || "localhost"
const port=process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 1025
const username=process.env.SMTP_USERNAME || ""
const password=process.env.SMTP_PASSWORD || ""


export const transporter = nodemailer.createTransport({
  host,
  port,
  auth: {
    user: username,
    pass: password,
  },
});