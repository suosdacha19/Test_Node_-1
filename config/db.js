const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection FAIL', error);
    process.exit(1); // Detenemos la app
  }
};

module.exports = connectDB;