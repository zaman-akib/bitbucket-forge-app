const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint to receive webhook payload
app.post('/webhook', (req, res) => {
  // Print the received payload to console
  console.log(req.body);
  // Process the payload as needed and save it to a database or perform other actions
  
  // Send simple success response
  res.json({ message: 'Payload received' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// app.post('/webhook', async (req, res) => {
//   try {
//     const systemToken = req.headers['x-forge-oauth-system']; // Get token from Forge app
//     const keyToFetch = 'my-key'; // Replace with your actual key
//
//     // Call Forge Storage API
//     const response = await fetch('https://api.atlassian.com/forge/storage/kvs/v1/get', {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${systemToken}`,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ key: keyToFetch })
//     });
//
//     const data = await response.json();
//
//     if (!response.ok) {
//       console.error('Forge Storage API error:', data);
//       return res.status(500).json({ error: 'Failed to fetch from storage', details: data });
//     }
//
//     console.log('Storage API response:', data);
//
//     res.json({ message: 'Payload received and storage accessed', storageData: data });
//   } catch (error) {
//     console.error('Error handling webhook:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
