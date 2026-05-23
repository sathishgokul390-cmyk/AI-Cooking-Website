import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Dashboard from '../pages/Dashboard/Dashboard'
import RecipeDetails from '../pages/RecipeDetails/RecipeDetails'
import AiGenerator from '../pages/AiGenerator/AiGenerator';
import Features from '../pages/Features/Features'
import About from '../pages/About/About'
// import TrendingRecipes from '../sections/TrendingRecipes/TrendingRecipes'
import TrendingRecipes from '../pages/TrendingRecipe/TrendingRecipes';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        {/* navbar */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/recipe' element={<RecipeDetails />} />
        <Route path='/aiGenerate' element={<AiGenerator />} />
        <Route path='/trendingRecipes' element={<TrendingRecipes />} />
        <Route path='/features' element={<Features />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}