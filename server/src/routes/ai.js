const express = require('express');
const router = express.Router();
const controller = require('../controllers/aiController');
const auth = require('../middleware/auth');

router.post('/generate-recipe', auth, controller.generateRecipe);
router.post('/scan-ingredients', auth, controller.scanIngredients);
router.post('/recommendations', auth, controller.getRecommendations);
router.post('/suggestions', auth, controller.getSuggestions);
router.get('/nutrition/:id', auth, controller.analyzeNutrition);
router.get('/tips/:id', auth, controller.getCookingTips);
router.get('/substitutes', auth, controller.getSubstitutes);

module.exports = router;
