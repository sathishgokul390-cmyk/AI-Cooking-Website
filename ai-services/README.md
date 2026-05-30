# AI Services — Microservices for AI Cooking Platform

This folder contains independent AI microservices for recipe generation, ingredient recognition, recommendations, and chatbot functionality.

## Services Overview

### 1. Recipe Generator
**Location:** `recipe-generator/`

Generates personalized recipes using OpenAI API based on ingredients and preferences.

**Files:**
- `model.py` — Main recipe generation logic
- `prompts/recipe_prompts.py` — AI prompts for recipe generation
- `requirements.txt` — Dependencies

**Usage:**
```python
from recipe_generator.model import generate_recipe

recipe = generate_recipe(
    ingredients=["chicken", "tomato", "garlic"],
    cuisine="Italian",
    diet="vegetarian"
)
```

**Features:**
- Generate recipes from ingredients
- Suggest ingredient substitutions
- Create meal variations
- Nutritional calculations

---

### 2. Ingredient Scanner
**Location:** `ingredient-scanner/`

Uses computer vision to detect ingredients from food images.

**Files:**
- `scanner.py` — Main scanning logic
- `vision_model.py` — Vision model wrappers (TensorFlow, PyTorch, AWS, Google)
- `requirements.txt` — Dependencies

**Usage:**
```python
from ingredient_scanner.scanner import IngredientScanner

scanner = IngredientScanner()
result = scanner.scan_image("food_image.jpg")
recipes = scanner.get_recipes_from_ingredients(result["ingredients"])
```

**Supported Backends:**
- TensorFlow/Keras (MobileNet, ResNet)
- PyTorch (ResNet, EfficientNet)
- AWS Rekognition
- Google Cloud Vision

---

### 3. Recommendation Engine
**Location:** `recommendation-engine/`

Provides personalized recipe recommendations using collaborative and content-based filtering.

**Files:**
- `recommendation.py` — Recommendation algorithms
- `requirements.txt` — Dependencies

**Usage:**
```python
from recommendation_engine.recommendation import RecommendationEngine

engine = RecommendationEngine()
engine.load_recipes(recipes_list)

preferences = {
    "cuisines": ["Italian", "Spanish"],
    "difficulty": "Easy",
    "maxCookingTime": 30
}

recommendations = engine.get_recommendations("user123", preferences)
```

**Features:**
- Personalized recommendations
- Content-based filtering
- Collaborative filtering
- Similar recipe suggestions

---

### 4. Chatbot
**Location:** `chatbot/`

AI-powered cooking assistant for recipe help, ingredient substitutions, and cooking guidance.

**Files:**
- `chatbot.py` — Main chatbot logic
- `prompts/chatbot_prompts.py` — Chatbot system prompts
- `requirements.txt` — Dependencies

**Usage:**
```python
from chatbot.chatbot import CookingChatbot

chatbot = CookingChatbot()

response = chatbot.chat("How do I make pasta carbonara?")
print(response["message"])

# Specialized methods
help_response = chatbot.get_recipe_help("Chicken Tikka Masala")
substitution = chatbot.get_substitution_advice("garlic")
nutrition = chatbot.get_nutrition_info("Caesar Salad")
```

**Features:**
- Multi-turn conversations
- Recipe guidance
- Ingredient substitutions
- Nutritional information
- Cooking tips and techniques

---

## Installation

### Install all dependencies:
```bash
cd ai-services

# Recipe Generator
pip install -r recipe-generator/requirements.txt

# Ingredient Scanner
pip install -r ingredient-scanner/requirements.txt

# Recommendation Engine
pip install -r recommendation-engine/requirements.txt

# Chatbot
pip install -r chatbot/requirements.txt
```

### Or install everything:
```bash
pip install -r <(cat */requirements.txt | sort | uniq)
```

---

## Environment Variables

Create a `.env` file in the root directory with:

```env
OPENAI_API_KEY=your_openai_key
VISION_API_KEY=your_vision_api_key

# AWS (optional)
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret

# Google Cloud (optional)
GOOGLE_APPLICATION_CREDENTIALS=path/to/credentials.json

# Vision Backend
VISION_BACKEND=tensorflow  # or pytorch, aws, google
```

---

## Architecture

```
ai-services/
├── recipe-generator/          # OpenAI-powered recipe generation
│   ├── model.py
│   ├── prompts/
│   └── requirements.txt
│
├── ingredient-scanner/        # Computer vision for ingredient detection
│   ├── scanner.py
│   ├── vision_model.py
│   └── requirements.txt
│
├── recommendation-engine/     # ML-based recommendations
│   ├── recommendation.py
│   └── requirements.txt
│
└── chatbot/                   # Conversational AI assistant
    ├── chatbot.py
    ├── prompts/
    └── requirements.txt
```

---

## Integration with Backend

Each service can be called from the Express backend:

```javascript
// backend/src/services/openaiService.js
const { generateRecipeFromIngredients } = require('../../ai-services/recipe-generator/model.py');

// backend/src/controllers/aiController.js
exports.generateRecipe = async (req, res) => {
  const recipe = await generateRecipeFromIngredients(ingredients);
  res.json(recipe);
};
```

---

## Performance Optimization

- **Recipe Generator:** Cache API responses for common ingredients
- **Ingredient Scanner:** Use image compression before processing
- **Recommendation Engine:** Pre-compute similarity matrices
- **Chatbot:** Implement conversation caching for common questions

---

## Future Enhancements

- [ ] Fine-tune models on cooking-specific datasets
- [ ] Add voice input/output to chatbot
- [ ] Implement real-time cooking guidance with computer vision
- [ ] Add user feedback loop for continuous improvement
- [ ] Support for 50+ languages
- [ ] Mobile app integration
- [ ] AR-based cooking assistant

---

## License

Part of AI Cooking Platform — All rights reserved.
