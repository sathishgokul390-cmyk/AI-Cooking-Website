const express = require('express');
const recipeController = require('../controllers/recipeController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', recipeController.getAllRecipes);
router.get('/:id', recipeController.getRecipeById);
router.post('/', authMiddleware, recipeController.createRecipe);
router.post('/save', authMiddleware, recipeController.saveRecipe);
router.delete('/:recipeId', authMiddleware, recipeController.removeSavedRecipe);

module.exports = router;
