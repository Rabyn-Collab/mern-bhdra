import axios from "axios";

type Recipe = {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  difficulty: string;
  rating: number;
  reviewCount: number;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  caloriesPerServing: number;
  mealType: string[];
};

export default async function Home() {
  const response = await axios.get("https://dummyjson.com/recipes");
  const recipes: Recipe[] = response.data.recipes;

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">

      {/* Header */}
      <div className="text-center px-4 py-10 sm:py-14">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          🍽️ Global Recipe Collection
        </h1>
        <p className="text-gray-500 mt-3 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
          Discover {recipes.length}+ delicious recipes from around the world
        </p>
      </div>

      {/* Grid */}
      <div className="
        max-w-7xl 
        mx-auto 
        px-4 sm:px-6 lg:px-8 
        pb-14
        grid 
        gap-6 sm:gap-8
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4
      ">

        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="
              bg-white 
              rounded-2xl 
              shadow-md 
              hover:shadow-xl 
              transition-all 
              duration-300 
              overflow-hidden 
              group
              flex 
              flex-col
            "
          >

            {/* Image */}
            <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute top-3 right-3 bg-yellow-400 text-black text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full shadow">
                ⭐ {recipe.rating}
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 flex flex-col grow">

              <h2 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-1">
                {recipe.name}
              </h2>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-[10px] sm:text-xs bg-gray-200 px-2 py-1 rounded-full">
                  {recipe.cuisine}
                </span>

                <span className={`text-[10px] sm:text-xs px-2 py-1 rounded-full ${recipe.difficulty === "Easy"
                  ? "bg-green-100 text-green-700"
                  : recipe.difficulty === "Medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                  }`}>
                  {recipe.difficulty}
                </span>
              </div>

              {/* Info */}
              <div className="mt-3 text-xs sm:text-sm text-gray-600 space-y-1">
                <p>⏱ Prep: {recipe.prepTimeMinutes} min</p>
                <p>🔥 Cook: {recipe.cookTimeMinutes} min</p>
                <p>🍽 Servings: {recipe.servings}</p>
                <p>🔥 {recipe.caloriesPerServing} kcal</p>
              </div>

              {/* Meal Tags */}
              <div className="flex gap-2 mt-3 flex-wrap">
                {recipe.mealType.map((meal, index) => (
                  <span
                    key={index}
                    className="text-[10px] sm:text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                  >
                    {meal}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-auto pt-4">
                <p className="text-xs sm:text-sm text-gray-500 mb-3">
                  {recipe.reviewCount} reviews
                </p>

                <button className="
                  w-full 
                  bg-black 
                  text-white 
                  py-2 
                  rounded-lg 
                  text-sm 
                  font-medium 
                  hover:bg-gray-800 
                  transition
                ">
                  View Recipe
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}