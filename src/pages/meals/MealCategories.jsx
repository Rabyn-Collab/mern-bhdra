import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router";
import { useApi } from "../../hooks/apiHooks";
import { getCategories } from "../../config/apis";

export default function MealCategories() {

  const [data, load, err] = useApi(getCategories);
  const nav = useNavigate();

  if (load) return <h1>Loading...</h1>
  if (err) return <h1 className="text-red-600">{err.data}</h1>

  return (
    <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 mb-10">
      {data && data.categories.map((item) => {
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
