import { useGetDrinksByCategoryQuery } from "../drinks/drinkApi"
import DrinkComponent from "./DrinkComponent";

export default function CocktailDrink() {
  const { isLoading, error, data } = useGetDrinksByCategoryQuery('cocktail');
  if (isLoading) return <h1>Loading...</h1>
  if (error) return <p className="text-red-500">{error.data}</p>


  return (
    <div className="p-5 grid grid-cols-4 gap-5">

      {data.drinks.map((drink) => {
        return <DrinkComponent key={drink.idDrink} drink={drink} />
      })}


    </div>
  )
}
