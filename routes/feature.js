const router = require("express").Router();

const FeatureFlag = require("../models/FeatureFlag");

router.post("/check", async (req, res) => {

  try {

    const {
      organizationId,
      key
    } = req.body;

    const feature =
      await FeatureFlag.findOne({
        organizationId,
        key
      });

    res.json({
      enabled: feature
        ? feature.enabled
        : false
    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
});

module.exports = router;