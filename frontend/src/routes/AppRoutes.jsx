import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Dashboard from '../pages/Dashboard/Dashboard';
import RecipeDetails from '../pages/RecipeDetails/RecipeDetails';
import AiGenerator from '../pages/AiGenerator/AiGenerator';
import MealPlanner from '../pages/MealPlanner/MealPlanner';
import Features from '../pages/Features/Features';
import About from '../pages/About/About';
import TrendingRecipes from '../pages/TrendingRecipe/TrendingRecipes';
import Favorites from '../pages/Favorites/Favorites';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth pages — no shared Navbar/Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* All other pages — shared Navbar + Footer */}
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/recipe" element={<RecipeDetails />} />
                <Route path="/ai" element={<AiGenerator />} />
                <Route path="/mealplanner" element={<MealPlanner />} />
                <Route path="/trendingRecipes" element={<TrendingRecipes />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/features" element={<Features />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
