const Comments = require("../models/Comments");
const router = require("express").Router();

// New Comment
router.post("/new", async (req, res) => {
  const newComment = new Comments({
    postId: req.body.postId,
    comments: req.body.comments,
  });

  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Get all comments of specific post
router.get("/allcomments/:postId", async (req, res) => {
  try {
    const allComments = await Comments.find({ postId: req.params.postId });
    res.status(200).json(allComments);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
