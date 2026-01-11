const mongoose = require("mongoose");

// const MONGODB_URI = "mongodb://localhost:27017/";

const MONGODB_URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Database Connected");
  } catch (error) {
    console.log("Database Connection Failed");
    process.exit(0);
  }
};

module.exports = connectDb;
