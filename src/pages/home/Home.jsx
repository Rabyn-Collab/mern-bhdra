import React from 'react'
import MealCategories from '../meals/MealCategories'

export default function Home() {
  return (
    <div>



      <div className='flex items-center text-center'>
        <img src="https://www.themealdb.com/images/meal-icon.png" alt="" />
        <div className='space-y-3'>
          <h1 className='font-bold text-3xl'>Welcome to TheMealDB</h1>
          <p>Welcome to TheMealDB: An open, crowd-sourced database of recipes from around the world.
            We offer a free recipe API for anyone wanting to use it, with additional premium features if required.</p>
        </div>

        <img src="https://www.themealdb.com/images/meal-icon.png" alt="" />
      </div>


      <MealCategories />







    </div>
  )
}
