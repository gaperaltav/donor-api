const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to donations API!');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Starting server on port ' + port)
});