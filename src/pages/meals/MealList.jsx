import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";

export default function MealList() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();
  const nav = useNavigate();


  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {
        params: { c: params.get('category') }
      });
      setLoad(false);

      setData(response.data.meals);
    } catch (err) {
      setLoad(false);
      setErr(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (load) return <h1>Loading...</h1>

  if (err) return <h1 className="text-red-600">{err}</h1>
  return (
    <div className="my-10 grid grid-cols-4 justify-items-center gap-11">


      {data && data.map((meal) => {
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
