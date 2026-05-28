const axios = require('axios');

const generateRecipeFromIngredients = async (ingredients) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `Create a recipe using these ingredients: ${ingredients.join(', ')}. Return JSON with title, instructions, cookingTime, and servings.`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const content = response.data.choices[0].message.content;
    return JSON.parse(content);
  } catch (error) {
    console.error('OpenAI error:', error.message);
    throw new Error('Failed to generate recipe');
  }
};

module.exports = {
  generateRecipeFromIngredients,
};
