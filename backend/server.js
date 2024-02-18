const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/users.js");
const postRoutes = require("./routes/posts.js");
const convRoutes = require("./routes/conversation.js");
const messageRoutes = require("./routes/message.js");

const port = 5000;

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};
app.use(express.json());
app.use(cors());
app.use(morgan("common"));
app.use("/images", express.static(path.join(__dirname, "public/images")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/conversations", convRoutes);
app.use("/message", messageRoutes);

app.listen(port, () => {
  connectDB();
  console.info("Server is running on port " + port);
});
