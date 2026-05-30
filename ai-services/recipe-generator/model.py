import os
import json
from dotenv import load_dotenv
import openai

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")


def generate_recipe(ingredients: list, cuisine: str = "", diet: str = "") -> dict:
    """
    Generate a recipe using OpenAI API based on ingredients and preferences.
    
    Args:
        ingredients: List of ingredient names
        cuisine: Cuisine type (optional)
        diet: Diet preference (optional)
    
    Returns:
        Dictionary with recipe details
    """
    try:
        prompt = f"""
        Create a detailed recipe using these ingredients: {', '.join(ingredients)}.
        
        Cuisine: {cuisine if cuisine else "Any"}
        Diet preference: {diet if diet else "No restrictions"}
        
        Return a JSON object with:
        - title (string)
        - description (string)
        - ingredients (array of objects with name, quantity, unit)
        - instructions (array of strings)
        - cookingTime (number in minutes)
        - servings (number)
        - difficulty (Easy/Medium/Hard)
        - nutrition (object with calories, protein, fat, carbs)
        
        Format: Valid JSON only, no markdown.
        """
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7,
        )
        
        recipe_text = response.choices[0].message.content
        recipe = json.loads(recipe_text)
        
        return {"success": True, "data": recipe}
    except json.JSONDecodeError:
        return {"success": False, "error": "Invalid JSON response from AI"}
    except Exception as e:
        return {"success": False, "error": str(e)}


def suggest_substitutions(ingredient: str) -> dict:
    """
    Suggest ingredient substitutions using AI.
    """
    try:
        prompt = f"""
        Suggest 5 healthy substitutes for {ingredient} in cooking.
        Return a JSON array with objects containing:
        - substitute (name of substitute)
        - reason (why it's a good alternative)
        - ratio (how much to use compared to original)
        
        Format: Valid JSON only.
        """
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7,
        )
        
        subs_text = response.choices[0].message.content
        substitutes = json.loads(subs_text)
        
        return {"success": True, "data": substitutes}
    except Exception as e:
        return {"success": False, "error": str(e)}


if __name__ == "__main__":
    result = generate_recipe(
        ingredients=["chicken", "tomato", "garlic"],
        cuisine="Italian",
        diet="vegetarian"
    )
    print(json.dumps(result, indent=2))
