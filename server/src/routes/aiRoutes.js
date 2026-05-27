const express = require('express');
const aiController = require('../controllers/aiController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/generate', authMiddleware, aiController.generateRecipe);
router.post('/recommend', authMiddleware, aiController.getRecommendations);
router.post('/analyze-image', authMiddleware, aiController.analyzeImage);
router.post('/nutrition', authMiddleware, aiController.getNutrition);

module.exports = router;
