import { SMTPClient } from 'emailjs';

export default async function handler(req, res) {
  const client = new SMTPClient({
    user: process.env.EMAIL,
    password: process.env.PASSWORD,
    host: 'smtp.your-email.com',
    ssl: true,
  });

  try {
    const sentMessage = await client.send(
      {
        text: 'i hope this works',
        from: 'you <username@your-email.com>',
        to: 'someone <someone@your-email.com>, another <another@your-email.com>',
        subject: 'testing emailjs',
      },
      (err, message) => {
        console.log(err || message);
      },
    );
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({ message: 'Sent mail' });
}
