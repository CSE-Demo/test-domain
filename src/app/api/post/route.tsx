// pages/api/postData.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email } = req.body;
      // Simulate a database save operation
      res.status(200).json({ message: 'Data received', data: { name, email } });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }