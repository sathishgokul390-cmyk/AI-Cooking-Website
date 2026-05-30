# Deployment Guide — AI Cooking Platform

Complete guide for deploying the AI Cooking Platform to production.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Environment Setup](#environment-setup)
3. [Docker Deployment](#docker-deployment)
4. [Cloud Deployment](#cloud-deployment)
5. [Database Setup](#database-setup)
6. [Environment Variables](#environment-variables)
7. [CI/CD Pipeline](#cicd-pipeline)
8. [Monitoring & Logging](#monitoring--logging)
9. [Performance Optimization](#performance-optimization)
10. [Troubleshooting](#troubleshooting)

---

## Prerequisites

- Docker & Docker Compose
- Node.js 18+
- Python 3.9+
- Git
- MongoDB Atlas account (or local MongoDB)
- OpenAI API key
- Cloudinary account

---

## Environment Setup

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/AI-Cooking-Website.git
cd AI-Cooking-Website
```

### 2. Install Dependencies

**Frontend:**
```bash
cd frontend
npm install
```

**Backend:**
```bash
cd server
npm install
```

**AI Services:**
```bash
cd ai-services
pip install -r recipe-generator/requirements.txt
pip install -r ingredient-scanner/requirements.txt
pip install -r recommendation-engine/requirements.txt
pip install -r chatbot/requirements.txt
```

### 3. Create Environment Files

**Frontend (.env):**
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=AI Cooking Platform
```

**Backend (.env):**
```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/ai-cooking
JWT_SECRET=your_jwt_secret_key_here_min_32_chars
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
OPENAI_API_KEY=your_openai_key
```

---

## Docker Deployment

### Local Development with Docker

```bash
docker-compose -f docker/docker-compose.yml up
```

This starts:
- MongoDB on `localhost:27017`
- Backend API on `localhost:5000`
- Frontend on `localhost:3000`

### Production Deployment

```bash
# Build images
docker build -f docker/Dockerfile.client -t ai-cooking-frontend:latest .
docker build -f docker/Dockerfile.server -t ai-cooking-backend:latest .

# Push to Docker registry (e.g., Docker Hub)
docker tag ai-cooking-frontend:latest yourusername/ai-cooking-frontend:latest
docker push yourusername/ai-cooking-frontend:latest

docker tag ai-cooking-backend:latest yourusername/ai-cooking-backend:latest
docker push yourusername/ai-cooking-backend:latest
```

---

## Cloud Deployment

### Option 1: Vercel (Frontend)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from frontend directory
cd frontend
vercel
```

**vercel.json:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {
    "VITE_API_URL": "@api_url"
  }
}
```

### Option 2: Render (Backend)

1. Connect GitHub repository
2. Create new Web Service
3. Set environment variables
4. Deploy branch: `main`

### Option 3: Railway (Full Stack)

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

### Option 4: AWS (Docker + ECS)

```bash
# Create ECR repository
aws ecr create-repository --repository-name ai-cooking-backend

# Push Docker image
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com

docker tag ai-cooking-backend:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/ai-cooking-backend:latest
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/ai-cooking-backend:latest
```

---

## Database Setup

### MongoDB Atlas (Cloud)

1. Create account at https://www.mongodb.com/cloud/atlas
2. Create new cluster
3. Set up network access (whitelist IPs)
4. Create database user
5. Copy connection string
6. Update `MONGO_URI` in `.env`

### Local MongoDB

```bash
# Using Docker
docker run -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password123 mongo:6.0

# Connection string
mongodb://admin:password123@localhost:27017/ai-cooking
```

### Database Migration

```bash
# Create indexes (if using MongoDB)
db.recipes.createIndex({ "cuisine": 1, "mealType": 1 })
db.users.createIndex({ "email": 1 }, { unique: true })
db.savedRecipes.createIndex({ "userId": 1, "recipeId": 1 }, { unique: true })
```

---

## Environment Variables

### Frontend

```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=AI Cooking Platform
VITE_ENVIRONMENT=production
```

### Backend

```env
# Server
PORT=5000
NODE_ENV=production

# Database
MONGO_URI=mongodb+srv://...

# Auth
JWT_SECRET=min_32_character_random_string_here
JWT_EXPIRY=7d

# Third-party APIs
CLOUDINARY_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx
OPENAI_API_KEY=sk-...

# CORS
CORS_ORIGIN=https://example.com

# Rate Limiting
RATE_LIMIT_WINDOW=900000
RATE_LIMIT_MAX=100
```

---

## CI/CD Pipeline

### GitHub Actions Example

**.github/workflows/deploy.yml:**
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Build Docker images
        run: |
          docker build -f docker/Dockerfile.client -t ai-cooking-frontend:latest .
          docker build -f docker/Dockerfile.server -t ai-cooking-backend:latest .
      
      - name: Push to Docker Hub
        run: |
          echo ${{ secrets.DOCKER_PASSWORD }} | docker login -u ${{ secrets.DOCKER_USERNAME }} --password-stdin
          docker push ai-cooking-frontend:latest
          docker push ai-cooking-backend:latest
      
      - name: Deploy to Render
        run: curl -X POST ${{ secrets.RENDER_DEPLOY_HOOK }}
```

---

## Monitoring & Logging

### Application Monitoring

**Winston Logger Setup:**
```javascript
// server/src/config/logger.js
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

module.exports = logger;
```

### Error Tracking (Sentry)

```javascript
const Sentry = require("@sentry/node");

Sentry.init({ dsn: process.env.SENTRY_DSN });

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.errorHandler());
```

### Performance Monitoring (New Relic)

```bash
npm install newrelic
```

**newrelic.js:**
```javascript
exports.config = {
  app_name: ['AI Cooking Platform'],
  license_key: process.env.NEW_RELIC_LICENSE_KEY,
  logging: { level: 'info' }
};
```

---

## Performance Optimization

### Frontend

1. **Code Splitting:**
```tsx
const Dashboard = lazy(() => import('./pages/Dashboard'));
```

2. **Image Optimization:**
- Use WebP format
- Lazy load images
- Compress with tools like TinyPNG

3. **Caching:**
- Set appropriate Cache-Control headers
- Use service workers for offline support

### Backend

1. **Database Indexing:**
```javascript
db.recipes.createIndex({ "cuisine": 1 })
db.users.createIndex({ "email": 1 }, { unique: true })
```

2. **API Caching:**
```javascript
app.use(require('express-cache-middleware')({
  ttl: 3600 // 1 hour
}));
```

3. **Rate Limiting:**
```javascript
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use('/api/', limiter);
```

---

## Troubleshooting

### Common Issues

**MongoDB Connection Error:**
```bash
# Check connection string
# Verify IP whitelist in MongoDB Atlas
# Check credentials in .env
```

**API CORS Issues:**
```javascript
// Update CORS in backend/src/app.js
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));
```

**Docker Build Fails:**
```bash
# Clear Docker cache
docker system prune -a
docker build --no-cache -f docker/Dockerfile.server -t ai-cooking-backend:latest .
```

**High Memory Usage:**
```bash
# Check container logs
docker logs ai-cooking-backend

# Increase memory limit
docker run --memory="2g" ai-cooking-backend:latest
```

---

## Security Checklist

- [ ] All secrets in environment variables
- [ ] HTTPS enabled
- [ ] JWT tokens validated on all protected routes
- [ ] Input validation on all endpoints
- [ ] Rate limiting enabled
- [ ] CORS properly configured
- [ ] SQL/NoSQL injection prevention
- [ ] XSS protection headers set
- [ ] MongoDB credentials secured
- [ ] API keys rotated regularly

---

## Backup & Recovery

### MongoDB Backup

```bash
# Backup
mongodump --uri="mongodb+srv://username:password@cluster.mongodb.net/ai-cooking" --out ./backup

# Restore
mongorestore --uri="mongodb+srv://username:password@cluster.mongodb.net/ai-cooking" ./backup
```

### Application Backup

```bash
# Backup Docker volumes
docker run --rm -v mongodb_data:/data -v $(pwd):/backup alpine tar czf /backup/mongodb_backup.tar.gz /data
```

---

## Support

For deployment support, contact: support@example.com
