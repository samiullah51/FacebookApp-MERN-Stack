const express = require("express");
const dotenv = require("dotenv");
const connection = require("./connection");
// Configure app
const app = express();

// Configure dotenv
dotenv.config();

// Database Connection
connection();

// Listenning to port
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
