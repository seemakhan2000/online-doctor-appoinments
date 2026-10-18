const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;

    if (!mongoUrl) {
      throw new Error("MONGO_URL environment variable is missing");
    }

    if (mongoose.connection.readyState === 1) {
      return mongoose.connection;
    }

    await mongoose.connect(mongoUrl);

    console.log("MongoDB connected successfully");

    return mongoose.connection;
  } catch (error) {
    console.error("DB connection failed:", error.message);
    throw error;
  }
};

module.exports = connectDB;