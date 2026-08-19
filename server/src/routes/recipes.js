const express = require('express');
const router = express.Router();
const controller = require('../controllers/recipesController');
const auth = require('../middleware/auth');

router.get('/', controller.getRecipes);
router.get('/favorites', auth, controller.getFavorites);
router.get('/:id', controller.getRecipeById);
router.post('/', auth, controller.createRecipe);
router.put('/:id', auth, controller.updateRecipe);
router.delete('/:id', auth, controller.deleteRecipe);
router.post('/:id/favorite', auth, controller.addFavorite);
router.delete('/:id/favorite', auth, controller.removeFavorite);

module.exports = router;
