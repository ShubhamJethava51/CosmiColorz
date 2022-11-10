const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    categoryCode: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    categoryInteraction: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
