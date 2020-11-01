const express = require('express');
const { proppatch } = require('./routes');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(3333, ( error => {
  if (error) console.log("Error when starting server");
  console.log('Server is running!');
}))