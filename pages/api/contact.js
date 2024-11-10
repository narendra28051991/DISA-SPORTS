import sendEmail from './nodeMailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, name, subject, query } = req.body;

      const emailContent = `From: ${name}\nEmail: ${email}\nSubject: ${subject}\nQuery: ${query}`;
      const toEmail = 'disa.denmark@gmail.com';
      //process.env.EMAIL_USERNAME;

      sendEmail(toEmail, 'DISA Website Query Submission', emailContent);
      res.status(200).json({ message: 'Email sent successfully' });
    }
    catch (error) {
      res.status(500).json({ error: 'An error occurred while sending the email' });
    }
  }
  else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
