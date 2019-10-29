const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
var path = require("path");

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use('/api/donations', donationsRoute);
app.use('/api/users', usersRoute);
app.set('views', path.join(__dirname, 'public'));

app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));


if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

//MongoDB configurations
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
//mongoose.connect('mongodb://localhost:27017/example', { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

// Routes
const donationsRoute = require('./routes/donations');
const usersRoute = require('./routes/users');

// Adding Routes path

app.get('/', (req, res) => {
  res
    .send('Welcome to donations API!');
});

app.use(function(req, res) {
  res.status(400);
 res.render('404.jade', {title: '404: File Not Found'});
 });


// app.use("*", (req, res) => {
//   res
//     .status(404)
//     .send('Not found');
// });

app.listen(port, () => {
  console.log('Starting server on port ' + port)
});