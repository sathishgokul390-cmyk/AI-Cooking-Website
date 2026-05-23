export default function RecipeCard({ recipe }) {
  return (
    <div className='bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300'>
      <img
        src={recipe.image}
        alt={recipe.title}
        className='w-full h-60 object-cover'
      />

      <div className='p-6'>
        <h3 className='text-2xl font-semibold mb-3'>
          {recipe.title}
        </h3>

        <div className='flex justify-between text-slate-400 mb-4'>
          <span>{recipe.time}</span>
          <span>{recipe.calories}</span>
        </div>

        <button className='w-full bg-orange-500 hover:bg-orange-400 py-3 rounded-2xl'>
          View Recipe
        </button>
      </div>
    </div>
  )
}