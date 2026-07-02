import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const IngredientsContext = createContext(null);
const STORAGE_KEY = 'savory-my-ingredients';

const DEFAULT_INGREDIENTS = ['Tomato', 'Onion', 'Egg', 'Spinach', 'Chicken', 'Garlic'];

export function IngredientsProvider({ children }) {
  const [ingredients, setIngredients] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_INGREDIENTS;
    } catch {
      return DEFAULT_INGREDIENTS;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ingredients));
  }, [ingredients]);

  const addIngredient = (name) => {
    const clean = name.trim();
    if (!clean) return;
    setIngredients((prev) =>
      prev.some((i) => i.toLowerCase() === clean.toLowerCase()) ? prev : [...prev, clean]
    );
  };

  const removeIngredient = (name) => {
    setIngredients((prev) => prev.filter((i) => i !== name));
  };

  const value = useMemo(
    () => ({ ingredients, addIngredient, removeIngredient }),
    [ingredients]
  );

  return <IngredientsContext.Provider value={value}>{children}</IngredientsContext.Provider>;
}

export const useIngredients = () => useContext(IngredientsContext);
