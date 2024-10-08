const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to the data base");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB };
