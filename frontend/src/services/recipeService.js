/**
 * Recipe Service
 * Handles recipe-related API calls
 */

import api from './api';

export const recipeService = {
  /**
   * Get all recipes
   * @param {object} params - Query parameters (page, limit, category, etc.)
   */
  async getRecipes(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = queryString ? `/recipes?${queryString}` : '/recipes';
    return api.get(endpoint);
  },

  /**
   * Get recipe by ID
   * @param {string} id - Recipe ID
   */
  async getRecipeById(id) {
    return api.get(`/recipes/${id}`);
  },

  /**
   * Create a new recipe
   * @param {object} recipeData - Recipe data
   */
  async createRecipe(recipeData) {
    return api.post('/recipes', recipeData);
  },

  /**
   * Update recipe
   * @param {string} id - Recipe ID
   * @param {object} recipeData - Updated recipe data
   */
  async updateRecipe(id, recipeData) {
    return api.put(`/recipes/${id}`, recipeData);
  },

  /**
   * Delete recipe
   * @param {string} id - Recipe ID
   */
  async deleteRecipe(id) {
    return api.delete(`/recipes/${id}`);
  },

  /**
   * Get recipes by category
   * @param {string} category - Category name
   */
  async getRecipesByCategory(category) {
    return api.get(`/recipes?category=${category}`);
  },

  /**
   * Search recipes
   * @param {string} query - Search query
   */
  async searchRecipes(query) {
    return api.get(`/recipes?search=${query}`);
  },

  /**
   * Get trending recipes
   */
  async getTrendingRecipes() {
    return api.get('/recipes?trending=true');
  },

  /**
   * Get favorite recipes
   */
  async getFavoriteRecipes() {
    return api.get('/recipes/favorites');
  },

  /**
   * Add recipe to favorites
   * @param {string} recipeId - Recipe ID
   */
  async addToFavorites(recipeId) {
    return api.post(`/recipes/${recipeId}/favorite`);
  },

  /**
   * Remove recipe from favorites
   * @param {string} recipeId - Recipe ID
   */
  async removeFromFavorites(recipeId) {
    return api.delete(`/recipes/${recipeId}/favorite`);
  },
};

export default recipeService;
