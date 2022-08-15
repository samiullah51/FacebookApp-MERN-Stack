const Post = require("../models/Post");
const router = require("express").Router();

// New post
router.post("/new", async (req, res) => {
  const newPost = new Post({
    userId: req.body.userId,
    profilePic: req.body.profilePic,
    displayName: req.body.displayName,
    desc: req.body.desc,
    poster: req.body.poster,
    likes: req.body.likes,
    comments: req.body.comments,
  });

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
