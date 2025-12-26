import { useGetDrinksByCategoryQuery } from "../drinks/drinkApi"
import DrinkComponent from "../drinks/DrinkComponent";
import DrinkComponentSkeleton from "../drinks/DrinkComponentSkeleton";

export default function Home() {
  const { isLoading, error, data } = useGetDrinksByCategoryQuery('Ordinary_Drink');
  if (isLoading) return <DrinkComponentSkeleton />
  if (error) return <p className="text-red-500">{error.data}</p>

  console.log(data);
  return (
    <div className="p-5 grid grid-cols-4 gap-5">

      {data.drinks.map((drink) => {
        return <DrinkComponent key={drink.idDrink} drink={drink} />
      })}


    </div >
  )
}
