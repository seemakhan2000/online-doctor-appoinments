const mongoose = require("mongoose");

const connectDB = async () => {
  try {

    if (!process.env.MONGODB_URI) {
      console.log("MONGO_URI not found");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected successfully");

  } catch (error) {
    console.log("DB connection failed:", error.message);
  }
};

module.exports = connectDB;