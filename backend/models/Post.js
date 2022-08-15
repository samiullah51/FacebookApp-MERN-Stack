const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default:
        "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png",
    },
    displayName: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    poster: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", PostSchema);
