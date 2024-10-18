// server.js
const express = require('express');
const app = express();
const path = require('path');

// Serve static files (HTML, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// API to send random background color
app.get('/api/change-bg', (req, res) => {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#FFF733'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  res.json({ backgroundColor: randomColor });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
