# Server-Frontend Connection Setup Guide

## ✅ What's Been Configured

### Frontend API Services Created:
1. **api.js** - Base API client with fetch for all HTTP requests
2. **authService.js** - Authentication (login, register, profile, logout)
3. **recipeService.js** - Recipe management (CRUD, search, favorites)
4. **aiService.js** - AI features (generate recipes, scan ingredients, recommendations)

### Frontend Environment:
- **Frontend/.env** - Configure API endpoint (defaults to `http://localhost:5000/api`)

### Backend Services:
- Server running on port 5000
- CORS enabled (allows all origins for development)
- Endpoints: `/api/auth`, `/api/recipes`, `/api/ai`, `/api/meals`, `/api/grocery`

### Authentication Context Updated:
- Integrated with authService
- Handles login/register/logout through API calls
- Stores JWT token in localStorage

---

## 🚀 Quick Start

### 1. **Start MongoDB**
```bash
# If using MongoDB locally
mongod
```

### 2. **Start Backend Server**
```bash
cd server
npm install
npm start
```
✅ Server should run on: `http://localhost:5000`

### 3. **Start Frontend**
```bash
cd frontend
npm install
npm start
```
✅ Frontend should run on: `http://localhost:3000`

---

## 📡 Testing the Connection

### Test Backend Health:
```bash
curl http://localhost:5000/api/health
# Expected response: { "status": "ok", "message": "AI Cooking Backend is running" }
```

### Test from Frontend Console:
```javascript
import api from './services/api';

// Test health check
api.get('/health').then(res => console.log(res));

// Test register
import authService from './services/authService';
authService.register('test@example.com', 'password123', 'Test User')
  .then(res => console.log('Register success:', res))
  .catch(err => console.error('Register error:', err));

// Test login
authService.login('test@example.com', 'password123')
  .then(res => console.log('Login success:', res))
  .catch(err => console.error('Login error:', err));
```

---

## 🔧 Environment Variables

### Server (.env):
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/cookai
JWT_SECRET=your_jwt_secret_key_here
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
OPENAI_API_KEY=your_openai_key
```

### Frontend (.env):
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

---

## 🛠️ Using the Services

### Authentication Example:
```javascript
import authService from './services/authService';

// Login
const { token, user } = await authService.login('user@example.com', 'password');

// Get profile (requires token)
const profile = await authService.getProfile();

// Logout
authService.logout();
```

### Recipe Service Example:
```javascript
import recipeService from './services/recipeService';

// Get all recipes
const recipes = await recipeService.getRecipes();

// Search recipes
const results = await recipeService.searchRecipes('pasta');

// Get recipe details
const recipe = await recipeService.getRecipeById('recipe-id');

// Add to favorites
await recipeService.addToFavorites('recipe-id');
```

### AI Service Example:
```javascript
import aiService from './services/aiService';

// Generate recipe
const recipe = await aiService.generateRecipe({
  ingredients: ['chicken', 'rice', 'tomato'],
  cuisine: 'Italian',
  difficulty: 'easy'
});

// Get recommendations
const recommendations = await aiService.getRecommendations(['chicken', 'tomato']);

// Scan ingredients from image
const formData = new FormData();
formData.append('image', imageFile);
const scanned = await aiService.scanIngredients(formData);
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| `CORS error` | Check backend has `cors()` middleware enabled (it does) |
| `Cannot read property 'token' of undefined` | Ensure backend is returning `{ token, user }` in auth endpoints |
| `API not responding` | Check backend is running on port 5000 and MongoDB is connected |
| `401 Unauthorized` | Token might be expired or missing; try logging in again |
| `Headers already sent` | Check middleware order in backend (cors should be first) |

---

## ✨ Next Steps

1. **Test the connection** using the examples above
2. **Update React components** to use the services:
   ```javascript
   import authService from '../services/authService';
   import recipeService from '../services/recipeService';
   
   // Use in components with useEffect, useState, etc.
   ```
3. **Handle errors** with try/catch or .catch()
4. **Add loading states** and error boundaries
5. **Implement token refresh** logic if needed
