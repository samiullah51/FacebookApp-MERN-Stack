const User = require("../models/User");
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const JWT = require("jsonwebtoken");
const Post = require("../models/Post");

// Register new user
router.post("/register", async (req, res) => {
  const checkExist = await User.findOne({ email: req.body.email });
  if (checkExist) {
    res.status(300).json({ message: "User already exist" });
    return false;
  }
  try {
    const newUser = new User({
      firstName: req.body.firstName,
      sureName: req.body.sureName,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC),
      dob: req.body.dob,
      gender: req.body.gender,
      profilePic: req.body.profilePic,
    });
    const savedUser = await newUser.save();
    const { password, ...others } = savedUser._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Log in existing user
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json("User not found");
      return false;
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const realPassword = await hashedPassword.toString(CryptoJS.enc.Utf8);

    if (realPassword !== req.body.password) {
      res.status(401).json("Invalid Credentials");
      return false;
    }
    // Token
    const token = JWT.sign(
      {
        id: user._id,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );
    const { password, ...others } = user._doc;
    res.header("auth-token", token).json({ ...others, token });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// change profile pic
router.post("/editprofile/:id", async (req, res) => {
  try {
    const updatedProfile = await User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          profilePic: req.body.profilePic,
        },
      }
    );

    res.status(200).json(updatedProfile);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Get all the registered users
router.get("/allusers", async (req, res) => {
  try {
    const allUsers = await User.find().sort({
      createdAt: -1,
    });
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
