const mongoose = require('mongoose');
const { Schema } = mongoose;

const photoSchema = new Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId },
    name: {
      type: String,
    },
    url: {
      type: String,
    },
    cloudId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Photo', photoSchema);
