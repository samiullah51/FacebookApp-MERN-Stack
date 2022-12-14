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
  });

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Get all posts
router.get("/allposts", async (req, res) => {
  try {
    const allPosts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(allPosts);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// All post of specific user
router.get("/allposts/:userId", async (req, res) => {
  try {
    const allPosts = await Post.find({ userId: req.params.userId }).sort({
      createdAt: -1,
    });
    res.status(200).json(allPosts);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Delete A specific post
router.delete("/delete/:id", async (req, res) => {
  try {
    const allPosts = await Post.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json(err.message);
  }
});
module.exports = router;
