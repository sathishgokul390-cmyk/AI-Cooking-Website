import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Discover from '../pages/Discover/Discover';
import MyIngredients from '../pages/MyIngredients/MyIngredients';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Dashboard from '../pages/Dashboard/Dashboard';
import RecipeDetails from '../pages/RecipeDetails/RecipeDetails';
import RecipeDetailsPage from '../pages/RecipeDetailsPage/RecipeDetailsPage';
import AiGenerator from '../pages/AiGenerator/AiGenerator';
import MealPlanner from '../pages/MealPlanner/MealPlanner';
import Features from '../pages/Features/Features';
import About from '../pages/About/About';
import TrendingRecipes from '../pages/TrendingRecipe/TrendingRecipes';
import Favorites from '../pages/Favorites/Favorites';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Testimonials from '../sections/Testimonials/Testimonials';
import HealthyRecipes from '../pages/HealthyRecipes/HealthyRecipes';
import LowCalorie from '../pages/HealthyRecipes/AllHealthyRecipes/LowCalorie';
import HighProtein from '../pages/HealthyRecipes/AllHealthyRecipes/HighProtein';
import LowCarb from '../pages/HealthyRecipes/AllHealthyRecipes/LowCarb';
import Vegan from '../pages/HealthyRecipes/AllHealthyRecipes/Vegan';
import GlutenFree from '../pages/HealthyRecipes/AllHealthyRecipes/GlutenFree';
import HeartHealthy from '../pages/HealthyRecipes/AllHealthyRecipes/HeartHealthy';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth pages � no shared Navbar/Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* All other pages � shared Navbar + Footer */}
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/discover' element={<Discover />} />
                <Route path='/myIngredients' element={<MyIngredients />} />
                <Route path='/about' element={<About />} />
                <Route path='/recipe' element={<RecipeDetails />} />
                <Route path='/recipeDetails' element={<RecipeDetailsPage />} />
                <Route path='/ai' element={<AiGenerator />} />
                <Route path='/healthyRecipe' element={<HealthyRecipes />} />
                <Route path='/mealplanner' element={<MealPlanner />} />
                <Route path='/trendingRecipes' element={<TrendingRecipes />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/features' element={<Features />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/testimonials' element={<Testimonials />} />


                {/* All Healthy Recipes */}
                {/* <Route path='/allRecipes' element={<AllRecipes />}/> */}
                <Route path='/lowCalorie' element={<LowCalorie />} />
                <Route path='/highProtein' element={<HighProtein />} />
                <Route path='/lowCarb' element={<LowCarb />} />
                <Route path='/vegan' element={<Vegan />} />
                <Route path='/glutenFree' element={<GlutenFree />} />
                <Route path='/heartHealthy' element={<HeartHealthy />} />
              </Routes>
              {/* <Footer /> */}
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
