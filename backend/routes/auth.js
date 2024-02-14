const router = require("express").Router();
const User = require("../models/User");
const bcryptjs = require("bcryptjs");

//register
router.post("/register", async (req, res) => {
  try {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      bio: req.body.bio,
      profilePicture: req.body.profilePicture,
      fullName: req.body.fullName,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("Username or password is wrong");
    const validPassword = await bcryptjs.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("Username or password is wrong");
    res.status(200).json(user);
  } catch {}
});

module.exports = router;
