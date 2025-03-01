const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle JSON requests
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
  res.send('Hello, World!, Welcome to Node Js Application');
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
