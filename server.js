const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const colors = require('colors');
const connectDB = require('./config/db');

// Load Environment Variables
dotenv.config({ path: './config/config.env' });

// Datebase Connection
connectDB();

const app = express();

// Route Files
const users = require('./routes/users');
const auth = require('./routes/auth');
const profiles = require('./routes/profiles');

// Body Parser
app.use(express.json());

// Cookie Parser
app.use(cookieParser());

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
app.use('/api/v1/auth', auth);
app.use('/api/v1/profiles', profiles);

app.use(errorHandler);

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
