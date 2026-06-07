const mongoose = require('mongoose');

const groceryListSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      default: 'My Grocery List',
    },
    items: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          auto: true,
        },
        name: {
          type: String,
          required: true,
        },
        quantity: Number,
        unit: String, // e.g., 'kg', 'ml', 'pieces'
        category: String, // e.g., 'Vegetables', 'Dairy', 'Meat'
        purchased: {
          type: Boolean,
          default: false,
        },
        addedDate: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    linkedMealPlans: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MealPlan',
      },
    ],
    totalItems: {
      type: Number,
      default: 0,
    },
    purchasedItems: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('GroceryList', groceryListSchema);
