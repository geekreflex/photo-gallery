const mongoose = require('mongoose');
const { Schema } = mongoose;

const photoSchema = new Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    cloudId: {
      type: String,
      required: true,
    },
    tags: [],
    description: {
      type: String,
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId }],
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Photo', photoSchema);
