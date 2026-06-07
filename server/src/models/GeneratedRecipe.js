const mongoose = require('mongoose');

const generatedRecipeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
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
    tags: [String],
    prompt: String, // Original AI prompt used
    aiModel: String, // Which AI model generated it
    rating: {
      type: Number,
      default: 0,
    },
    isSaved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('GeneratedRecipe', generatedRecipeSchema);
