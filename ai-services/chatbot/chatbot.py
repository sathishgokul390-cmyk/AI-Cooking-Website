import os
import json
from dotenv import load_dotenv
import openai

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")


class CookingChatbot:
    """
    AI-powered cooking assistant chatbot.
    Provides recipe help, cooking tips, ingredient substitutions, and guidance.
    """
    
    def __init__(self):
        self.conversation_history = []
        self.system_prompt = self._load_system_prompt()
    
    def _load_system_prompt(self) -> str:
        """
        Load the chatbot's system prompt defining its behavior.
        """
        return """
        You are "Chef AI", an expert cooking assistant with knowledge of:
        - 1000+ recipes from various cuisines
        - Ingredient substitutions and nutritional information
        - Cooking techniques and methods
        - Dietary restrictions and allergies
        - Kitchen equipment and best practices
        
        Your personality:
        - Helpful and encouraging
        - Patient and non-judgmental
        - Creative yet practical
        - Passionate about food and cooking
        
        When users ask:
        1. Recipe questions → Provide detailed steps and tips
        2. Ingredient issues → Suggest substitutions or workarounds
        3. Cooking problems → Offer solutions and explanations
        4. Nutrition queries → Give accurate dietary information
        
        Always be supportive and make cooking fun!
        """
    
    def chat(self, user_message: str) -> dict:
        """
        Process user message and generate AI response.
        
        Args:
            user_message: User's input message
        
        Returns:
            Dictionary with AI response and metadata
        """
        try:
            # Add user message to history
            self.conversation_history.append({
                "role": "user",
                "content": user_message
            })
            
            # Get AI response
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                system=self.system_prompt,
                messages=self.conversation_history,
                temperature=0.7,
                max_tokens=1000
            )
            
            assistant_message = response.choices[0].message.content
            
            # Add to history
            self.conversation_history.append({
                "role": "assistant",
                "content": assistant_message
            })
            
            return {
                "success": True,
                "message": assistant_message,
                "tokens_used": response.usage.total_tokens
            }
        except Exception as e:
            return {
                "success": False,
                "error": str(e),
                "message": "Sorry, I encountered an error. Please try again."
            }
    
    def reset_conversation(self):
        """
        Clear conversation history for new chat session.
        """
        self.conversation_history = []
    
    def get_recipe_help(self, recipe_name: str) -> dict:
        """
        Get specific help for a recipe.
        """
        prompt = f"I need help cooking {recipe_name}. Can you guide me?"
        return self.chat(prompt)
    
    def suggest_cooking_method(self, ingredients: List[str], time_limit: int = None) -> dict:
        """
        Suggest a cooking method for given ingredients.
        """
        time_text = f" in under {time_limit} minutes" if time_limit else ""
        prompt = f"Can you suggest a cooking method using {', '.join(ingredients)}{time_text}?"
        return self.chat(prompt)
    
    def get_substitution_advice(self, ingredient: str) -> dict:
        """
        Get substitution suggestions for an ingredient.
        """
        prompt = f"I don't have {ingredient}. What are good substitutes for {ingredient}?"
        return self.chat(prompt)
    
    def get_nutrition_info(self, recipe_name: str) -> dict:
        """
        Get nutritional information about a recipe.
        """
        prompt = f"Can you tell me the approximate nutritional information for {recipe_name}?"
        return self.chat(prompt)


if __name__ == "__main__":
    chatbot = CookingChatbot()
    
    # Test conversation
    response1 = chatbot.chat("Hello! I want to make pasta but I'm a beginner.")
    print("Assistant:", response1["message"])
    
    response2 = chatbot.chat("What if I don't have garlic?")
    print("Assistant:", response2["message"])
