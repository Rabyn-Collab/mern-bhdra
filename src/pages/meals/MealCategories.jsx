import axios from "axios";
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router";

export default function MealCategories() {

  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();
  const nav = useNavigate();


  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setLoad(false);
      setData(response.data.categories);
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
    <div className="grid grid-cols-3 gap-5 mb-10">
      {data && data.map((item) => {
        return <Card key={item.idCategory} className='overflow-hidden pt-0'>
          <CardContent className='px-0'>
            <img
              src={item.strCategoryThumb}
              alt='Banner'
              className='aspect-video w-92 object-cover'
            />
          </CardContent>
          <CardHeader>
            <CardTitle>{item.strCategory}</CardTitle>
            <CardDescription className={'line-clamp-3'}>
              {item.strCategoryDescription}
            </CardDescription>
          </CardHeader>
          <CardFooter className='gap-3 max-sm:flex-col max-sm:items-stretch'>
            <Button onClick={() => nav(`meal-list?category=${item.strCategory}`)}>Explore More</Button>

          </CardFooter>
        </Card>

      })}







    </div>
  )
}
