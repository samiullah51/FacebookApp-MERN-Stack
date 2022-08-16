const mongoose = require("mongoose");
const CommentsSchema = new mongoose.Schema(
  {
    postId: {
      type: String,
      required: true,
    },
    comments: {
      byName: {
        type: String,
      },
      byPic: {
        type: String,
      },
      byText: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("comment", CommentsSchema);
