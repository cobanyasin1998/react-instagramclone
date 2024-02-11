const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const port = 5000;

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};

app.listen(port, () => {
  connectDB();
  console.info("Server is running on port " + port);
});
