#!/usr/bin/env node
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/ai-cooking';

async function ensureCollectionsAndIndexes(db) {
  const existing = await db.listCollections().toArray();
  const names = existing.map((c) => c.name);

  const required = ['users', 'recipes', 'meals', 'grocery'];

  for (const name of required) {
    if (!names.includes(name)) {
      await db.createCollection(name);
      console.log(`Created collection: ${name}`);
    } else {
      console.log(`Collection exists: ${name}`);
    }
  }

  // Indexes
  try {
    await db.collection('users').createIndex({ email: 1 }, { unique: true });
    console.log('Ensured index: users.email (unique)');
  } catch (err) {
    console.warn('Could not create users.email index:', err.message);
  }

  try {
    await db.collection('recipes').createIndex({ cuisine: 1, mealType: 1 });
    console.log('Ensured index: recipes.cuisine+mealType');
  } catch (err) {
    console.warn('Could not create recipes index:', err.message);
  }
}

async function seedDemoData(db) {
  const users = db.collection('users');
  const recipes = db.collection('recipes');

  const existingUsers = await users.countDocuments();
  if (existingUsers === 0) {
    await users.insertOne({
      name: 'Demo User',
      email: 'demo@example.com',
      password: 'password-not-real',
      createdAt: new Date(),
    });
    console.log('Inserted demo user');
  } else {
    console.log('Users collection already has documents; skipping demo seed');
  }

  const existingRecipes = await recipes.countDocuments();
  if (existingRecipes === 0) {
    await recipes.insertOne({
      title: 'Demo Pancakes',
      cuisine: 'International',
      mealType: 'Breakfast',
      ingredients: ['flour', 'egg', 'milk'],
      instructions: 'Mix and cook.',
      createdAt: new Date(),
    });
    console.log('Inserted demo recipe');
  } else {
    console.log('Recipes collection already has documents; skipping demo seed');
  }
}

async function main() {
  console.log('Connecting to MongoDB:', uri.replace(/(\/\/).*(@)/, '$1***$2'));
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection.db;

    await ensureCollectionsAndIndexes(db);

    if (process.env.SEED === 'true') {
      console.log('SEED=true detected — inserting demo data');
      await seedDemoData(db);
    }

    console.log('✅ Database initialization complete');
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('❌ Database initialization failed:', err);
    process.exit(1);
  }
}

main();
