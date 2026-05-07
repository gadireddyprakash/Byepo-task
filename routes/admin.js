const router = require("express").Router();

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User = require("../models/User");

router.post("/signup", async (req, res) => {

  try {

    const {
      name,
      email,
      password,
      organizationId
    } = req.body;

    const existingUser = await User.findOne({
      email
    });

    if (existingUser) {

      return res.status(400).json({
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "org_admin",
      organizationId
    });

    res.json(user);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
});

router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({
      email
    });

    if (!user) {

      return res.status(404).json({
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.status(401).json({
        message: "Invalid password"
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        organizationId: user.organizationId,
        role: user.role
      },
      process.env.JWT_SECRET
    );

    res.json({ token });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
});

module.exports = router;