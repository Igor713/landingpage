import { SMTPClient } from 'emailjs';

export default async function handler(req, res) {
  const { messageBody } = req.body;

  const client = new SMTPClient({
    user: process.env.EMAIL,
    password: process.env.PASSWORD,
    host: 'smtp.your-email.com',
    ssl: true,
  });

  try {
    const sentMessage = await client.sendAsync({
      text: messageBody,
      from: 'you <username@your-email.com>',
      to: 'someone <someone@your-email.com>, another <another@your-email.com>',
      subject: 'Lead - Landingpage',
    });
    console.log(sentMessage);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({ message: 'Sent mail' });
}
