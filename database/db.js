const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://rodb:test123@cluster0.tnvar2j.mongodb.net/testDb?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`MongoDB connected`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;