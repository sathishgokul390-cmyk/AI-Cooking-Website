# API Documentation — AI Cooking Platform

Complete REST API reference for the AI Cooking Platform backend.

## Base URL

```
http://localhost:5000/api
```

---

## Authentication

All protected endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <JWT_TOKEN>
```

Tokens are obtained via the `/api/auth/login` or `/api/auth/register` endpoints.

---

## Authentication Endpoints

### Register User
**POST** `/auth/register`

Create a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (201):**
```json
{
  "user": {
    "id": "user_id_123",
    "email": "john@example.com",
    "name": "John Doe"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### Login User
**POST** `/auth/login`

Authenticate and receive JWT token.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "user": {
    "id": "user_id_123",
    "email": "john@example.com",
    "name": "John Doe"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### Get User Profile
**GET** `/auth/profile`

**Headers:**
```
Authorization: Bearer <TOKEN>
```

**Response (200):**
```json
{
  "_id": "user_id_123",
  "name": "John Doe",
  "email": "john@example.com",
  "avatar": "https://example.com/avatar.jpg",
  "preferences": {
    "diet": "vegetarian",
    "allergies": ["nuts", "dairy"],
    "cuisines": ["Italian", "Asian"]
  },
  "savedRecipes": ["recipe_id_1", "recipe_id_2"]
}
```

---

## Recipe Endpoints

### Get All Recipes
**GET** `/recipes`

**Query Parameters:**
- `limit` (optional): Max results (default: 50)
- `cuisine` (optional): Filter by cuisine
- `mealType` (optional): Filter by meal type
- `difficulty` (optional): Filter by difficulty

**Response (200):**
```json
[
  {
    "_id": "recipe_id_1",
    "title": "Pasta Carbonara",
    "description": "Classic Italian pasta...",
    "cookingTime": 20,
    "servings": 4,
    "difficulty": "Easy",
    "cuisine": "Italian",
    "mealType": "Dinner",
    "rating": 4.8,
    "reviews": 320,
    "image": "https://example.com/recipe.jpg"
  }
]
```

---

### Get Recipe by ID
**GET** `/recipes/:id`

**Response (200):**
```json
{
  "_id": "recipe_id_1",
  "title": "Pasta Carbonara",
  "description": "Classic Italian pasta...",
  "ingredients": [
    {
      "name": "pasta",
      "quantity": 400,
      "unit": "g"
    }
  ],
  "instructions": [
    "Boil water...",
    "Cook pasta..."
  ],
  "cookingTime": 20,
  "servings": 4,
  "difficulty": "Easy",
  "nutrition": {
    "calories": 450,
    "protein": 15,
    "fat": 20,
    "carbs": 50
  }
}
```

---

### Create Recipe
**POST** `/recipes`

**Headers:**
```
Authorization: Bearer <TOKEN>
Content-Type: application/json
```

**Request Body:**
```json
{
  "title": "Homemade Pizza",
  "description": "Delicious homemade pizza",
  "ingredients": [
    { "name": "flour", "quantity": 500, "unit": "g" },
    { "name": "tomato sauce", "quantity": 200, "unit": "ml" }
  ],
  "instructions": ["Mix dough", "Add toppings", "Bake"],
  "cookingTime": 30,
  "servings": 2,
  "difficulty": "Medium",
  "cuisine": "Italian",
  "mealType": "Dinner"
}
```

**Response (201):**
```json
{
  "_id": "recipe_id_new",
  "title": "Homemade Pizza",
  ...
}
```

---

### Save Recipe
**POST** `/recipes/save`

**Headers:**
```
Authorization: Bearer <TOKEN>
```

**Request Body:**
```json
{
  "recipeId": "recipe_id_1"
}
```

**Response (201):**
```json
{
  "message": "Recipe saved",
  "saved": {
    "_id": "saved_recipe_id",
    "userId": "user_id_123",
    "recipeId": "recipe_id_1",
    "folder": "Saved"
  }
}
```

---

### Remove Saved Recipe
**DELETE** `/recipes/:recipeId`

**Headers:**
```
Authorization: Bearer <TOKEN>
```

**Response (200):**
```json
{
  "message": "Recipe removed"
}
```

---

## AI Endpoints

### Generate Recipe from Ingredients
**POST** `/ai/generate`

**Headers:**
```
Authorization: Bearer <TOKEN>
Content-Type: application/json
```

**Request Body:**
```json
{
  "ingredients": ["chicken", "tomato", "garlic"],
  "cuisine": "Italian",
  "diet": "vegetarian",
  "cookingTime": 30,
  "caloriesTarget": 500
}
```

**Response (200):**
```json
{
  "title": "Tomato Garlic Chicken Pasta",
  "description": "Delicious pasta with fresh tomatoes...",
  "ingredients": [...],
  "instructions": [...],
  "cookingTime": 25,
  "servings": 4,
  "nutrition": {
    "calories": 480,
    "protein": 35,
    "fat": 15,
    "carbs": 50
  }
}
```

---

### Get Recommendations
**POST** `/ai/recommend`

**Headers:**
```
Authorization: Bearer <TOKEN>
```

**Request Body:**
```json
{
  "preferences": {
    "cuisines": ["Italian", "Spanish"],
    "difficulty": "Easy",
    "maxCookingTime": 30,
    "allergies": ["nuts"]
  }
}
```

**Response (200):**
```json
[
  {
    "_id": "recipe_id_1",
    "title": "Pasta Carbonara",
    "score": 0.95
  }
]
```

---

### Analyze Image
**POST** `/ai/analyze-image`

**Headers:**
```
Authorization: Bearer <TOKEN>
Content-Type: multipart/form-data
```

**Form Data:**
- `image` (file): Food image

**Response (200):**
```json
{
  "ingredients": [
    { "name": "tomato", "confidence": 0.92 },
    { "name": "basil", "confidence": 0.88 }
  ],
  "recipes": [...]
}
```

---

### Get Nutrition Info
**POST** `/ai/nutrition`

**Headers:**
```
Authorization: Bearer <TOKEN>
```

**Request Body:**
```json
{
  "ingredients": ["100g chicken", "50g olive oil", "200g tomato"]
}
```

**Response (200):**
```json
{
  "calories": 450,
  "protein": 35,
  "fat": 20,
  "carbs": 30,
  "fiber": 5,
  "sugar": 8,
  "sodium": 500
}
```

---

## Meal Planner Endpoints

### Get Meal Plans
**GET** `/meals`

**Headers:**
```
Authorization: Bearer <TOKEN>
```

**Response (200):**
```json
[
  {
    "_id": "meal_plan_id",
    "date": "2026-05-28",
    "recipes": [
      {
        "mealType": "Breakfast",
        "recipe": { ...recipe object... }
      }
    ],
    "nutritionGoals": {
      "calories": 2000,
      "protein": 100
    }
  }
]
```

---

### Create Meal Plan
**POST** `/meals/create`

**Headers:**
```
Authorization: Bearer <TOKEN>
```

**Request Body:**
```json
{
  "date": "2026-05-28",
  "recipes": [
    {
      "mealType": "Breakfast",
      "recipe": "recipe_id_1"
    },
    {
      "mealType": "Lunch",
      "recipe": "recipe_id_2"
    }
  ],
  "nutritionGoals": {
    "calories": 2000,
    "protein": 100
  }
}
```

**Response (201):**
```json
{
  "message": "Meal plan created",
  "mealPlan": { ...meal plan object... }
}
```

---

### Delete Meal Plan
**DELETE** `/meals/:id`

**Headers:**
```
Authorization: Bearer <TOKEN>
```

**Response (200):**
```json
{
  "message": "Meal plan deleted"
}
```

---

## Grocery Endpoints

### Get Grocery List
**GET** `/grocery`

**Headers:**
```
Authorization: Bearer <TOKEN>
```

**Response (200):**
```json
{
  "items": [
    {
      "name": "Chicken Breast",
      "quantity": 1,
      "unit": "kg",
      "category": "Meat",
      "checked": false
    }
  ]
}
```

---

### Create Grocery List
**POST** `/grocery/create`

**Headers:**
```
Authorization: Bearer <TOKEN>
```

**Request Body:**
```json
{
  "items": [
    { "name": "Tomato", "quantity": 3, "unit": "pieces" },
    { "name": "Garlic", "quantity": 2, "unit": "pieces" }
  ]
}
```

**Response (201):**
```json
{
  "message": "Grocery list created",
  "items": [...]
}
```

---

### Update Grocery Item
**PUT** `/grocery/:id`

**Headers:**
```
Authorization: Bearer <TOKEN>
```

**Request Body:**
```json
{
  "quantity": 2,
  "checked": true
}
```

**Response (200):**
```json
{
  "message": "Grocery item updated"
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "message": "Invalid email or password"
}
```

### 401 Unauthorized
```json
{
  "message": "No token provided"
}
```

### 404 Not Found
```json
{
  "message": "Recipe not found"
}
```

### 500 Internal Server Error
```json
{
  "error": {
    "status": 500,
    "message": "Internal Server Error"
  }
}
```

---

## Rate Limiting

- **Free tier:** 100 requests/hour
- **Pro tier:** 1000 requests/hour
- **Enterprise:** Unlimited

---

## Webhooks

(Coming soon)

---

## Changelog

**v1.0.0** - May 2026
- Initial API release
- Auth, recipes, AI, meals, grocery endpoints
