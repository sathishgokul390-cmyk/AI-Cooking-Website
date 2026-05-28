const Recipe = require('../models/Recipe');

const getRecommendations = async (userId, preferences) => {
  try {
    const recommendations = await Recipe.find({
      cuisine: { $in: preferences.cuisines || [] },
      mealType: preferences.mealType || { $exists: true },
    }).limit(10);

    return recommendations;
  } catch (error) {
    console.error('Recommendation error:', error.message);
    throw error;
  }
};

module.exports = {
  getRecommendations,
};
