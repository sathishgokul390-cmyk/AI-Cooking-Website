const express = require('express');
const mealController = require('../controllers/mealController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, mealController.getMealPlans);
router.post('/create', authMiddleware, mealController.createMealPlan);
router.delete('/:id', authMiddleware, mealController.deleteMealPlan);

module.exports = router;
