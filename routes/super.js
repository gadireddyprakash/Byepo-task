const router = require("express").Router();

const Organization = require("../models/Organization");

router.post("/login", (req, res) => {

  const { email, password } = req.body;

  if (
    email === process.env.SUPER_ADMIN_EMAIL &&
    password === process.env.SUPER_ADMIN_PASSWORD
  ) {

    return res.json({
      success: true
    });
  }

  res.status(401).json({
    message: "Invalid credentials"
  });
});

router.post("/organizations", async (req, res) => {

  try {

    const organization = await Organization.create({
      name: req.body.name
    });

    res.json(organization);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
});

router.get("/organizations", async (req, res) => {

  const organizations = await Organization.find();

  res.json(organizations);
});

module.exports = router;