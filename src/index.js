const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

//MongoDB configurations
mongoose.connect(process.env.MONGO_CONN, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

// Routes
const donationsRoute = require('./routes/donations');
const usersRoute = require('./routes/users');

// Adding Routes path
app.use('/api/donations', donationsRoute);
app.use('/api/users', usersRoute);

app.get('/', (req, res) => {
  res
    .send('Welcome to donations API!');
});

app.use("*", (req, res) => {
  res
    .status(404)
    .send('Not found');
});

app.listen(port, () => {
  console.log('Starting server on port ' + port)
});