/**
 * AI Service
 * Handles AI-related API calls (recipe generation, ingredient scanning, etc.)
 */

import api from './api';

export const aiService = {
  /**
   * Generate recipe using AI
   * @param {object} params - Generation parameters
   */
  async generateRecipe(params = {}) {
    return api.post('/ai/generate-recipe', params);
  },

  /**
   * Scan ingredients from image
   * @param {FormData} formData - Form data with image file
   */
  async scanIngredients(formData) {
    return api.request('/ai/scan-ingredients', {
      method: 'POST',
      headers: {}, // Remove Content-Type to let browser set it for FormData
      body: formData,
    });
  },

  /**
   * Get recipe recommendations
   * @param {array} ingredients - List of available ingredients
   * @param {object} preferences - User preferences
   */
  async getRecommendations(ingredients, preferences = {}) {
    return api.post('/ai/recommendations', {
      ingredients,
      preferences,
    });
  },

  /**
   * Get recipe suggestions based on user preferences
   * @param {object} params - Suggestion parameters
   */
  async getSuggestions(params = {}) {
    return api.post('/ai/suggestions', params);
  },

  /**
   * Analyze recipe nutrition
   * @param {string} recipeId - Recipe ID
   */
  async analyzeNutrition(recipeId) {
    return api.get(`/ai/nutrition/${recipeId}`);
  },

  /**
   * Get cooking tips
   * @param {string} recipeId - Recipe ID
   */
  async getCookingTips(recipeId) {
    return api.get(`/ai/tips/${recipeId}`);
  },

  /**
   * Get ingredient substitutes
   * @param {string} ingredient - Ingredient name
   */
  async getSubstitutes(ingredient) {
    return api.get(`/ai/substitutes?ingredient=${ingredient}`);
  },
};

export default aiService;
