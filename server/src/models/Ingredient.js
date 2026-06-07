const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    category: String, // e.g., 'Vegetables', 'Dairy', 'Meat', 'Grains'
    nutrition: {
      caloriesPer100g: Number,
      protein: Number,
      fat: Number,
      carbs: Number,
    },
    commonUnits: [String], // e.g., ['kg', 'g', 'ml', 'cup']
    substitutes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient',
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Ingredient', ingredientSchema);
