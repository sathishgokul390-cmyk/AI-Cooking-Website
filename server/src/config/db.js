const mongoose = require('mongoose');

const connectDB = async (uri) => {
  if (!uri) {
    console.warn('⚠️  MongoDB URI not provided');
    return;
  }

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
