import { SMTPClient, Message } from 'emailjs';

export default async function handler(req, res) {
  const { messageBody } = req.body;

  const client = new SMTPClient({
    user: process.env.EMAIL,
    password: process.env.PASSWORD,
    host: 'smtp.gmail.com',
    ssl: true,
  });

  const message = new Message({
    text: messageBody,
    from: 'robottec70@gmail.com',
    to: 'robottec70@gmail.com',
    subject: 'Lead - Landingpage',
  });

  try {
    const messageResponse = await client.sendAsync(message);
    console.log(messageResponse);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({ message: 'Sent mail' });
}
