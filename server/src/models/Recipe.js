const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    ingredients: [
      {
        name: String,
        quantity: String,
        unit: String,
      },
    ],
    instructions: [String],
    cookingTime: Number,
    servings: Number,
    difficulty: {
      type: String,
      enum: ['Easy', 'Medium', 'Hard'],
    },
    cuisine: String,
    mealType: {
      type: String,
      enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert'],
    },
    nutrition: {
      calories: Number,
      protein: Number,
      fat: Number,
      carbs: Number,
    },
    image: String,
    rating: {
      type: Number,
      default: 0,
    },
    reviews: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Recipe', recipeSchema);
