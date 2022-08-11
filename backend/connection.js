const mongoose = require("mongoose");

const connection = async () => {
  const connected = await mongoose.connect(process.env.DB_URI);
  connected
    ? console.log("connected Successfully")
    : console.log("connection failed");
};

module.exports = connection;
