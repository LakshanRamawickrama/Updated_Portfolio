import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,          // your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD,  // Gmail App Password
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: `[Portfolio Contact] ${subject}`,
      text: message,
      html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('Failed to send email:', err);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

// For GET request (avoid 405)
router.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'Email API endpoint (use POST method)' });
});

export default router;
