const mongoose = require('mongoose');

const savedRecipeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    recipeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Recipe',
      required: true,
    },
    folder: {
      type: String,
      default: 'Saved',
    },
    notes: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('SavedRecipe', savedRecipeSchema);
