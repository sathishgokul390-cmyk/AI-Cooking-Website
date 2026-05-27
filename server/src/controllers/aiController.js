const { generateRecipeFromIngredients } = require('../services/openaiService');
const { getRecommendations } = require('../services/recommendationService');
const { getNutritionInfo } = require('../services/nutritionService');

exports.generateRecipe = async (req, res) => {
  try {
    const { ingredients } = req.body;

    if (!ingredients || !Array.isArray(ingredients)) {
      return res.status(400).json({ message: 'Invalid ingredients' });
    }

    const recipe = await generateRecipeFromIngredients(ingredients);
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRecommendations = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { preferences } = req.body;

    const recommendations = await getRecommendations(userId, preferences);
    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.analyzeImage = async (req, res) => {
  try {
    // Placeholder for image recognition (TensorFlow, AWS Rekognition, etc.)
    res.json({ message: 'Image analysis placeholder' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getNutrition = async (req, res) => {
  try {
    const { ingredients } = req.body;
    const nutrition = await getNutritionInfo(ingredients);
    res.json(nutrition);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
