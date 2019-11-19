const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');

// Load Environment Variables
dotenv.config({ path: './config/config.env' });

const app = express();

// Body Parser
app.use(express.json());

// HTTP Logging for Development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan());
}

// TODO: Remove this temporary route
app.get('/', function(req, res) {
  res.send('Hello World');
});

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  )
);
