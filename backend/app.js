const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connection = require("./connection");

// dotenv Configuration
dotenv.config();

// Database Connection
connection();

// Listening to a port
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
