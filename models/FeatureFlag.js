const mongoose = require("mongoose");

const featureFlagSchema = new mongoose.Schema({
  organizationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization"
  },

  key: {
    type: String,
    required: true
  },

  enabled: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("FeatureFlag", featureFlagSchema);