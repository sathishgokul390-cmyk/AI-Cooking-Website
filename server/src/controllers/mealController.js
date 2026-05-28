const MealPlan = require('../models/MealPlan');

exports.createMealPlan = async (req, res) => {
  try {
    const { date, recipes } = req.body;
    const userId = req.user.userId;

    const mealPlan = new MealPlan({ userId, date, recipes });
    await mealPlan.save();

    res.status(201).json({ message: 'Meal plan created', mealPlan });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMealPlans = async (req, res) => {
  try {
    const userId = req.user.userId;
    const mealPlans = await MealPlan.find({ userId }).populate('recipes.recipe');

    res.json(mealPlans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteMealPlan = async (req, res) => {
  try {
    const { id } = req.params;
    await MealPlan.findByIdAndDelete(id);

    res.json({ message: 'Meal plan deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
