const express = require('express');
const groceryController = require('../controllers/groceryController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, groceryController.getGroceryList);
router.post('/create', authMiddleware, groceryController.createGroceryList);
router.put('/:id', authMiddleware, groceryController.updateGroceryItem);

module.exports = router;
