const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;
const donationsRoutes = require('./routes/donations');

app.use('/api/donations', donationsRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to donations API!');
});

app.listen(port, () => {
  console.log('Starting server on port ' + port)
});