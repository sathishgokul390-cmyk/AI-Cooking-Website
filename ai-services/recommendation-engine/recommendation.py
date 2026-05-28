import json
import numpy as np
from typing import List, Dict
from dotenv import load_dotenv

load_dotenv()


class RecommendationEngine:
    """
    Personalized recipe recommendation system using collaborative filtering
    and content-based filtering.
    """
    
    def __init__(self):
        self.user_preferences = {}
        self.recipe_database = []
        self.similarity_matrix = None
    
    def load_recipes(self, recipes: List[Dict]) -> bool:
        """
        Load recipe database.
        """
        try:
            self.recipe_database = recipes
            self._build_similarity_matrix()
            return True
        except Exception as e:
            print(f"Error loading recipes: {e}")
            return False
    
    def _build_similarity_matrix(self):
        """
        Build similarity matrix between recipes using content-based features.
        """
        n = len(self.recipe_database)
        self.similarity_matrix = np.zeros((n, n))
        
        for i in range(n):
            for j in range(i, n):
                similarity = self._calculate_recipe_similarity(
                    self.recipe_database[i],
                    self.recipe_database[j]
                )
                self.similarity_matrix[i][j] = similarity
                self.similarity_matrix[j][i] = similarity
    
    def _calculate_recipe_similarity(self, recipe1: Dict, recipe2: Dict) -> float:
        """
        Calculate similarity between two recipes (0-1).
        Considers: cuisine, mealType, difficulty, ingredients overlap
        """
        similarity = 0.0
        
        # Cuisine similarity
        if recipe1.get("cuisine") == recipe2.get("cuisine"):
            similarity += 0.3
        
        # Meal type similarity
        if recipe1.get("mealType") == recipe2.get("mealType"):
            similarity += 0.2
        
        # Difficulty similarity
        if recipe1.get("difficulty") == recipe2.get("difficulty"):
            similarity += 0.2
        
        # Ingredients overlap
        ingredients1 = set(recipe1.get("ingredients", []))
        ingredients2 = set(recipe2.get("ingredients", []))
        if ingredients1 and ingredients2:
            overlap = len(ingredients1 & ingredients2) / len(ingredients1 | ingredients2)
            similarity += overlap * 0.3
        
        return min(similarity, 1.0)
    
    def get_recommendations(
        self,
        user_id: str,
        preferences: Dict,
        n_recommendations: int = 10
    ) -> List[Dict]:
        """
        Get personalized recipe recommendations.
        
        Args:
            user_id: User identifier
            preferences: User preferences (diet, cuisines, allergies, etc.)
            n_recommendations: Number of recommendations
        
        Returns:
            List of recommended recipes
        """
        recommendations = []
        
        for recipe in self.recipe_database:
            score = self._calculate_recipe_score(recipe, preferences)
            recommendations.append({
                "recipe": recipe,
                "score": score
            })
        
        # Sort by score and return top N
        recommendations.sort(key=lambda x: x["score"], reverse=True)
        return [r["recipe"] for r in recommendations[:n_recommendations]]
    
    def _calculate_recipe_score(self, recipe: Dict, preferences: Dict) -> float:
        """
        Calculate recommendation score for a recipe based on user preferences.
        """
        score = 0.0
        
        # Cuisine preference
        if preferences.get("cuisines"):
            if recipe.get("cuisine") in preferences.get("cuisines", []):
                score += 0.3
        
        # Meal type preference
        if preferences.get("mealType"):
            if recipe.get("mealType") == preferences.get("mealType"):
                score += 0.2
        
        # Difficulty level
        if preferences.get("difficulty"):
            if recipe.get("difficulty") == preferences.get("difficulty"):
                score += 0.2
        
        # Allergies avoidance
        allergies = preferences.get("allergies", [])
        recipe_ingredients = recipe.get("ingredients", [])
        has_allergen = any(allergen in recipe_ingredients for allergen in allergies)
        if not has_allergen:
            score += 0.2
        
        # Cooking time preference
        if preferences.get("maxCookingTime"):
            if recipe.get("cookingTime", 0) <= preferences.get("maxCookingTime"):
                score += 0.1
        
        return min(score, 1.0)
    
    def track_user_rating(self, user_id: str, recipe_id: str, rating: float):
        """
        Track user recipe ratings for collaborative filtering.
        """
        if user_id not in self.user_preferences:
            self.user_preferences[user_id] = {}
        
        self.user_preferences[user_id][recipe_id] = rating
    
    def get_similar_recipes(
        self,
        recipe_id: str,
        n_similar: int = 5
    ) -> List[Dict]:
        """
        Get recipes similar to a given recipe.
        """
        try:
            recipe_idx = next(
                i for i, r in enumerate(self.recipe_database)
                if r.get("id") == recipe_id
            )
            
            similarities = self.similarity_matrix[recipe_idx]
            top_indices = np.argsort(similarities)[-n_similar-1:-1][::-1]
            
            return [
                self.recipe_database[i] for i in top_indices
                if i != recipe_idx
            ]
        except Exception as e:
            print(f"Error getting similar recipes: {e}")
            return []


if __name__ == "__main__":
    engine = RecommendationEngine()
    
    # Test data
    test_recipes = [
        {
            "id": 1,
            "title": "Pasta Carbonara",
            "cuisine": "Italian",
            "mealType": "Dinner",
            "difficulty": "Easy",
            "cookingTime": 20,
            "ingredients": ["pasta", "bacon", "eggs", "parmesan"]
        },
        {
            "id": 2,
            "title": "Chicken Tikka Masala",
            "cuisine": "Indian",
            "mealType": "Dinner",
            "difficulty": "Medium",
            "cookingTime": 45,
            "ingredients": ["chicken", "yogurt", "tomato", "spices"]
        }
    ]
    
    engine.load_recipes(test_recipes)
    
    preferences = {
        "cuisines": ["Italian", "Spanish"],
        "difficulty": "Easy",
        "maxCookingTime": 30
    }
    
    recommendations = engine.get_recommendations("user123", preferences, n_recommendations=5)
    print(json.dumps([r for r in recommendations], indent=2, default=str))
