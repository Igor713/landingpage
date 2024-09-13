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
    const messageResponse = await client.sendAsync({
      text: messageBody,
      from: 'robottec70@gmail.com',
      to: 'robottec70@gmail.com',
      subject: 'Lead - Landingpage',
    });
    console.log(messageResponse);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({ message: 'Sent mail' });
}
