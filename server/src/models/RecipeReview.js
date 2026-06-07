const mongoose = require('mongoose');

const recipeReviewSchema = new mongoose.Schema(
  {
    recipeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Recipe',
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: String,
    title: String,
    helpful: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Prevent duplicate reviews from same user on same recipe
recipeReviewSchema.index({ recipeId: 1, userId: 1 }, { unique: true });

module.exports = mongoose.model('RecipeReview', recipeReviewSchema);
