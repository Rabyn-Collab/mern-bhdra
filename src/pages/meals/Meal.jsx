import { useParams } from 'react-router'
import { useApi } from '../../hooks/apiHooks';
import { getMeal } from '../../config/apis';

export default function Meal() {
  const { id } = useParams();

  const [data, load, err] = useApi(getMeal, { i: id })

  if (load) return <h1>Loading...</h1>

  if (err) return <h1 className="text-red-600">{err.data}</h1>

  return (
    <div className='my-10'>

      {data && data.meals.map((meal) => {
        const urlId = meal.strYoutube.split('=')[1];

        return <div key={meal.idMeal} className='space-y-4'>
          <h1>{meal.strMeal}</h1>

          <div className='grid grid-cols-2 gap-5'>
            <iframe
              allowFullScreen
              className='w-full h-[400px]'
              src={`https://www.youtube.com/embed/${urlId}`}>
            </iframe>
            <img className='h-[400px] w-full object-cover' src={meal.strMealThumb} alt="" />

          </div>

          <div className='flex gap-10 divide-x-4 divide-indigo-500'>
            <div className='pr-2'>
              <h1 className='mb-2'>Ingredients</h1>
              {Object.keys(meal).map((key) => {
                if (key.includes('strIngredient')) {
                  return <p key={key}>{meal[key]}</p>
                }
              })}

            </div>

            <div className='pr-2'>
              <h1 className='mb-2'>Measures</h1>

              {Object.keys(meal).map((key) => {
                if (key.includes('strMeasure')) {
                  return <p key={key}>{meal[key]}</p>
                }
              })}
            </div>

            <div>
              <p>{meal.strInstructions}</p>
            </div>
          </div>










        </div>
      })}





    </div>
  )
}
