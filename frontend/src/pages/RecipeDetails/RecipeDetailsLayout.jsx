import "./RecipeDetails.css";

import RecipeHeroSection from "../../sections/RecipeDetailsSections/RecipeHeroSection";
import RecipeInfoSection from "../../sections/RecipeDetailsSections/RecipeInfoSection";
import IngredientsSection from "../../sections/RecipeDetailsSections/IngredientsSection";
import InstructionsSection from "../../sections/RecipeDetailsSections/InstructionsSection";
import NutritionSection from "../../sections/RecipeDetailsSections/NutritionSection";
import AIchefTipsSection from "../../sections/RecipeDetailsSections/AIchefTipsSection";
import BestServedSection from "../../sections/RecipeDetailsSections/BestServedSection";
import RelatedRecipesSection from "../../sections/RecipeDetailsSections/RelatedRecipesSection";

function RecipeDetailsLayout() {
  return (
    <div className="recipe-details-page">
      <RecipeHeroSection />
      <RecipeInfoSection />
      <div className="recipe-content-grid">
        <IngredientsSection />
        <InstructionsSection />
        <NutritionSection />
      </div>

      <div className="bottom-sections">
        <AIchefTipsSection />
        <BestServedSection />
        <RelatedRecipesSection />
      </div>
    </div>
  );
}

export default RecipeDetailsLayout;