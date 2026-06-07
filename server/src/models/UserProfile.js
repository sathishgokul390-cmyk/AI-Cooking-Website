const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    bio: String,
    profileImage: String,
    dietaryRestrictions: [String], // e.g., ['vegetarian', 'vegan', 'gluten-free']
    allergies: [String],
    cuisinePreferences: [String],
    skillLevel: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      default: 'Beginner',
    },
    favoriteIngredients: [String],
    cookingEquipment: [String], // e.g., ['oven', 'microwave', 'grill']
    mealPlanningGoal: String, // e.g., 'Weight loss', 'Muscle gain', 'Healthy eating'
    preferredCookingTime: {
      type: String,
      enum: ['Quick (< 30 min)', 'Moderate (30-60 min)', 'Detailed (> 60 min)'],
    },
    statisticsThisMonth: {
      recipesCreated: {
        type: Number,
        default: 0,
      },
      recipesCooked: {
        type: Number,
        default: 0,
      },
      recipesRated: {
        type: Number,
        default: 0,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('UserProfile', userProfileSchema);
