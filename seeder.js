// *** Mongoose DB Seeder ***
// from root folder, run:
// "node seeder -import" to import bootcamps to db
// "node seeder -delete" to delete bootcamps from db

const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Load models
const User = require('./models/User');
const Profile = require('./models/Profile');

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// Read JSON files
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8')
);

// Import into DB
const importData = async () => {
  try {
    await User.create(users);
    console.log('Data Imported...'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(error);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await User.deleteMany();
    await Profile.deleteMany();
    console.log('Data Deleted...'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(error);
  }
};

if (process.argv[2] === '-import') {
  importData();
} else if (process.argv[2] === '-delete') {
  deleteData();
}
