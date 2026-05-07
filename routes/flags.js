const router = require("express").Router();

const auth = require("../middleware/auth");

const FeatureFlag = require("../models/FeatureFlag");

router.post("/", auth, async (req, res) => {

  try {

    const existingFlag =
      await FeatureFlag.findOne({
        organizationId: req.user.organizationId,
        key: req.body.key
      });

    if (existingFlag) {

      return res.status(400).json({
        message: "Feature already exists"
      });
    }

    const flag = await FeatureFlag.create({
      organizationId: req.user.organizationId,
      key: req.body.key,
      enabled: req.body.enabled
    });

    res.json(flag);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
});

router.get("/", auth, async (req, res) => {

  const flags = await FeatureFlag.find({
    organizationId: req.user.organizationId
  });

  res.json(flags);
});

router.put("/:id", auth, async (req, res) => {

  const updatedFlag =
    await FeatureFlag.findOneAndUpdate(
      {
        _id: req.params.id,
        organizationId: req.user.organizationId
      },
      {
        enabled: req.body.enabled
      },
      {
        new: true
      }
    );

  res.json(updatedFlag);
});

router.delete("/:id", auth, async (req, res) => {

  await FeatureFlag.deleteOne({
    _id: req.params.id,
    organizationId: req.user.organizationId
  });

  res.json({
    success: true
  });
});

module.exports = router;