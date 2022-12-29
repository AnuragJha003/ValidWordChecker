const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Use body-parser to parse the request body
app.use(bodyParser.urlencoded({ extended: false }));

// Set up a route to render the form
app.get('/', (req, res) => {
  res.render('form');
});

// Set up a route to handle the form submission
app.post('/check-word', (req, res) => {
  // Get the word from the request body
  const word = req.body.word;

  // Make a call to the API to check if the word is valid
  // The API call should return a boolean indicating whether the word is valid or not
  // You can use any freely available API for this purpose, such as the Oxford Dictionaries API (https://developer.oxforddictionaries.com/)

  // If the word is valid, render the success page
  res.render('success');

  // If the word is not valid, render the error page
  res.render('error');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});