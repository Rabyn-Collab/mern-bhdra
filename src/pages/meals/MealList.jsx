import { useNavigate, useSearchParams } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { useApi } from "../../hooks/apiHooks";
import { getMealList } from "../../config/apis";

export default function MealList() {
  const [params, setParams] = useSearchParams();
  const nav = useNavigate();
  const [data, load, err] = useApi(getMealList, {
    c: params.get('category')
  })


  if (load) return <h1>Loading...</h1>

  if (err) return <h1 className="text-red-600">{err.data}</h1>
  return (
    <div className="my-10 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 justify-items-center gap-11">


      {data && data.meals.map((meal) => {
        return <div
          onClick={() => nav(`/meal/${meal.idMeal}`)}
          key={meal.idMeal} className="space-y-4 cursor-pointer">
          <h1 className="text-center">{meal.strMeal}</h1>
          <Avatar>
            <AvatarImage src={meal.strMealThumb} />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
        </div>
      })}




    </div>
  )
}
