const mongoose = require("mongoose");
const { Schema } = mongoose;

const Party = mongoose.model(
  "Party",
  new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      budget: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  )
);

module.exports = Party;
