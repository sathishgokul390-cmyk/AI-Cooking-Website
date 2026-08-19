exports.generateRecipe = async (req, res) => {
  const params = req.body || {};
  const recipe = {
    id: `${Date.now()}`,
    title: params.title || 'AI Generated Dish',
    ingredients: params.ingredients || ['1 cup water', '1 tsp salt'],
    steps: ['Mix ingredients', 'Cook for 10 minutes'],
  };
  res.json({ recipe });
};

exports.scanIngredients = async (req, res) => {
  // In a real implementation we'd parse the image; here we return a stub
  res.json({ ingredients: ['tomato', 'onion', 'garlic'] });
};

exports.getRecommendations = async (req, res) => {
  const { ingredients = [] } = req.body || {};
  // Return simple mock recommendations
  res.json({ recommendations: [{ id: 'rec1', title: 'Tomato Pasta', match: 0.9 }] });
};

exports.getSuggestions = async (req, res) => {
  res.json({ suggestions: ['Try adding basil', 'Use fresh garlic'] });
};

exports.analyzeNutrition = async (req, res) => {
  res.json({ calories: 250, protein: 8, fat: 10 });
};

exports.getCookingTips = async (req, res) => {
  res.json({ tips: ['Preheat pan', 'Let it rest for 5 minutes'] });
};

exports.getSubstitutes = async (req, res) => {
  const ingredient = req.query.ingredient || '';
  res.json({ substitutes: [`${ingredient} substitute 1`, `${ingredient} substitute 2`] });
};
