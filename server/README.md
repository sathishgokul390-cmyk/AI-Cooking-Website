# AI Cooking Platform — Backend

Express.js + MongoDB backend for the AI Cooking Platform.

## Quick Start

```bash
cd server
npm install
npm run dev
```

Server runs on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` — User registration
- `POST /api/auth/login` — User login
- `GET /api/auth/profile` — Get user profile (requires token)

### Recipes
- `GET /api/recipes` — Get all recipes
- `GET /api/recipes/:id` — Get recipe details
- `POST /api/recipes` — Create recipe (requires token)
- `POST /api/recipes/save` — Save recipe (requires token)
- `DELETE /api/recipes/:recipeId` — Remove saved recipe (requires token)

### AI Features
- `POST /api/ai/generate` — Generate recipe from ingredients (requires token)
- `POST /api/ai/recommend` — Get recipe recommendations (requires token)
- `POST /api/ai/analyze-image` — Analyze food image (requires token)
- `POST /api/ai/nutrition` — Get nutrition info (requires token)

### Meal Planner
- `GET /api/meals` — Get meal plans (requires token)
- `POST /api/meals/create` — Create meal plan (requires token)
- `DELETE /api/meals/:id` — Delete meal plan (requires token)

### Grocery
- `GET /api/grocery` — Get grocery list (requires token)
- `POST /api/grocery/create` — Create grocery list (requires token)
- `PUT /api/grocery/:id` — Update grocery item (requires token)

## Environment Variables

Copy `.env.example` to `.env` and fill in your values:
- `PORT` — Server port (default: 5000)
- `MONGO_URI` — MongoDB connection string
- `JWT_SECRET` — Secret key for JWT tokens
- `CLOUDINARY_NAME` — Cloudinary account name
- `CLOUDINARY_API_KEY` — Cloudinary API key
- `CLOUDINARY_API_SECRET` — Cloudinary API secret
- `OPENAI_API_KEY` — OpenAI API key

## Project Structure

```
server/
├── src/
│   ├── config/        — Database and third-party configs
│   ├── controllers/   — Request handlers
│   ├── middleware/    — Express middleware
│   ├── models/        — MongoDB schemas
│   ├── routes/        — API routes
│   ├── services/      — Business logic (OpenAI, recommendations, etc.)
│   ├── utils/         — Helper functions
│   ├── app.js         — Express app setup
│   └── server.js      — Server entry point
├── .env               — Environment variables
├── package.json
└── nodemon.json       — Nodemon config
```

## Technologies

- **Express.js** — Web framework
- **MongoDB** — NoSQL database
- **Mongoose** — MongoDB ODM
- **JWT** — Authentication
- **bcryptjs** — Password hashing
- **Cloudinary** — Image storage
- **OpenAI API** — Recipe generation
- **Multer** — File uploads

## Development

Install dependencies:
```bash
npm install
```

Run dev server (with auto-reload):
```bash
npm run dev
```

Production:
```bash
npm start
```
