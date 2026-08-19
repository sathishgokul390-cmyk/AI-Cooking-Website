const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    ingredients: [{ type: String }],
    steps: [{ type: String }],
    category: { type: String },
    trending: { type: Boolean, default: false },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Recipe', RecipeSchema);
