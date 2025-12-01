import nodemailer from 'nodemailer';
import 'dotenv/config';


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.GMAIL_SECRET_KEY,
  },
});

(async () => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL, 
      to: process.env.EMAIL, 
      subject: "Test Email", 
      html: "<p>Hello from Nodemailer!</p>"
    });

    console.log("Message sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
})();