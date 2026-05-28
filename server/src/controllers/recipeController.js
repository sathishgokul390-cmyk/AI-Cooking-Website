const Recipe = require('../models/Recipe');
const SavedRecipe = require('../models/SavedRecipe');
const { validateRecipe } = require('../utils/validators');

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().limit(50);
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createRecipe = async (req, res) => {
  try {
    if (!validateRecipe(req.body)) {
      return res.status(400).json({ message: 'Invalid recipe data' });
    }

    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.saveRecipe = async (req, res) => {
  try {
    const { recipeId } = req.body;
    const userId = req.user.userId;

    const saved = new SavedRecipe({ userId, recipeId });
    await saved.save();

    res.status(201).json({ message: 'Recipe saved', saved });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.removeSavedRecipe = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { recipeId } = req.params;

    await SavedRecipe.findOneAndDelete({ userId, recipeId });
    res.json({ message: 'Recipe removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
