const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

// Load Environment Variables
dotenv.config({ path: './config/config.env' });

// Datebase Connection
connectDB();

const app = express();

// Route Files
const users = require('./routes/users');

// Body Parser
app.use(express.json());

// HTTP Logging for Development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// TODO: Remove this temporary route
app.get('/', function(req, res) {
  res.send('Hello World');
});

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount Routers
app.use('/api/v1/users', users);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  )
);

// Handle Unhandled Promise Rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close Server & Exit Process
  server.close(() => process.exit(1));
});
