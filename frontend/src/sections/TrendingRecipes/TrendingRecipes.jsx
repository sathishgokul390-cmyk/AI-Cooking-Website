import RecipeCard from '../../components/recipe/RecipeCard'

export default function TrendingRecipes() {
  const recipes = [
    {
      title: 'Spicy Egg Fried Rice',
      time: '20 mins',
      calories: '320 kcal',
      image:
        'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Creamy Pasta Bowl',
      time: '25 mins',
      calories: '450 kcal',
      image:
        'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <section className='max-w-7xl mx-auto px-6 py-20'>
      <h2 className='text-4xl font-bold mb-10'>Trending Recipes</h2>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </section>
  )
}