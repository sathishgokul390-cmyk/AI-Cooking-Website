const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validatePassword = (password) => {
  return password.length >= 8;
};

const validateRecipe = (recipe) => {
  return (
    recipe.title &&
    recipe.ingredients &&
    recipe.instructions &&
    Array.isArray(recipe.ingredients) &&
    Array.isArray(recipe.instructions)
  );
};

module.exports = {
  validateEmail,
  validatePassword,
  validateRecipe,
};
