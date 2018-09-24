const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/blood-donor')

// Routes
const donationsRoutes = require('./routes/donations');
const bloodTypes = require('./routes/bloodTypes');

app.use('/api/donations', donationsRoutes);
app.use('/api/bloodTypes', bloodTypes);

app.get('/', (req, res) => {
  res.send('Welcome to donations API!');
});

app.listen(port, () => {
  console.log('Starting server on port ' + port)
});