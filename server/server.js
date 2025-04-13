const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const connectDB = require("../database/db.js");
const Users = require("./models/users.js");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
connectDB();

app.post("/api/login", async (req, res) => {
    console.log("req.body", req.body);
  const { email, password } = req.body;
  try {
    // Find user by email
    const user = await Users.findOne({ email });
    console.log("user", user);
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    // Check the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Password" });
    }

    res.json({ success: true, message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if user already exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create new user
    const newUser = new Users({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.json({ success: true, message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});