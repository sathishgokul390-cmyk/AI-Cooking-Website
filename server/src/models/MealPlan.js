const mongoose = require('mongoose');

const mealPlanSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    recipes: [
      {
        mealType: String,
        recipe: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Recipe',
        },
      },
    ],
    nutritionGoals: {
      calories: Number,
      protein: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('MealPlan', mealPlanSchema);
