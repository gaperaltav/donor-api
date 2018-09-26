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
const donationsRoute = require('./routes/donations');
const bloodTypesRoute = require('./routes/bloodTypes');
const usersRoute = require('./routes/users');

// Adding Routes path
app.use('/api/donations', donationsRoute);
app.use('/api/bloodTypes', bloodTypesRoute);
app.use('/api/users', usersRoute);

app.get('/', (req, res) => {
  res.send('Welcome to donations API!');
});

app.listen(port, () => {
  console.log('Starting server on port ' + port)
});