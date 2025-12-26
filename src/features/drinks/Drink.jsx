import React from 'react'
import { useParams } from 'react-router'
import { useGetDrinkDetailsQuery } from './drinkApi';
import { Skeleton } from '../../components/ui/skeleton';

export default function Drink() {
  const { id } = useParams();
  const { isLoading, error, data, isFetching } = useGetDrinkDetailsQuery(id, {
    // pollingInterval: 1000,
  });
  if (isLoading || isFetching) return <div className='space-y-4 p-5'>
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-[200px] w-[250px]" />
    <div className='space-y-2'>
      <Skeleton className="h-4 w-[450px]" />
      <Skeleton className="h-4 w-[450px]" />
    </div>
  </div>
  if (error) return <p className="text-red-500">{error.data}</p>



  return (
    <div className='p-5'>

      {data.drinks.map((drink) => {
        return <div key={drink.idDrink} className='space-y-4'>




          <h1>{drink.strDrink}</h1>
          <img className='h-60' src={drink.strDrinkThumb} alt="" />
          <p>{drink.strInstructions}</p>

        </div>
      })}
    </div>
  )
}
