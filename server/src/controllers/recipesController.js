const Recipe = require('../models/Recipe');
const User = require('../models/User');

exports.getRecipes = async (req, res) => {
  const { category, search, trending } = req.query;
  const filter = {};
  if (category) filter.category = category;
  if (trending === 'true') filter.trending = true;
  if (search) filter.title = { $regex: search, $options: 'i' };
  const result = await Recipe.find(filter).populate('createdBy', 'name email');
  res.json(result);
};

exports.getRecipeById = async (req, res) => {
  const r = await Recipe.findById(req.params.id).populate('createdBy', 'name email');
  if (!r) return res.status(404).json({ message: 'Recipe not found' });
  res.json(r);
};

exports.createRecipe = async (req, res) => {
  const data = req.body;
  data.createdBy = req.user.id;
  const recipe = await Recipe.create(data);
  res.status(201).json(recipe);
};

exports.updateRecipe = async (req, res) => {
  const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
  res.json(recipe);
};

exports.deleteRecipe = async (req, res) => {
  const recipe = await Recipe.findByIdAndDelete(req.params.id);
  if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
  res.json({ message: 'Deleted' });
};

exports.getFavorites = async (req, res) => {
  const user = await User.findById(req.user.id).populate('favorites');
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user.favorites || []);
};

exports.addFavorite = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  user.favorites = user.favorites || [];
  if (!user.favorites.includes(req.params.id)) user.favorites.push(req.params.id);
  await user.save();
  res.json({ favorites: user.favorites });
};

exports.removeFavorite = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  user.favorites = (user.favorites || []).filter(id => id.toString() !== req.params.id);
  await user.save();
  res.json({ favorites: user.favorites });
};
