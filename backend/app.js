const express = require("express");
const dotenv = require("dotenv");
const connection = require("./connection");
// import all routes
const userRouter = require("./routes/user");

// Configure app
const app = express();

// Configure dotenv
dotenv.config();

// Database Connection
connection();

// Configure JSON
app.use(express.json());

// Handling routes
app.use("/api/user", userRouter);

// Listenning to port
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
