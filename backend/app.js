const express = require("express");
const dotenv = require("dotenv");
const connection = require("./connection");
const cors = require("cors");
// import all routes
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");
const commentsRouter = require("./routes/comments");
// Configure app
const app = express();

// Configure dotenv
dotenv.config();

// Configure Cors
app.use(cors());

// Database Connection
connection();

// Configure JSON
app.use(express.json());

// Handling routes
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);
app.use("/api/comments", commentsRouter);

// Listenning to port
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
