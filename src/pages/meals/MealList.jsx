import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router"

export default function MealList() {
  const [params, setParams] = useSearchParams();
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
  console.log(data);
  if (load) return <h1>Loading...</h1>

  if (err) return <h1 className="text-red-600">{err}</h1>
  return (
    <div>



    </div>
  )
}
