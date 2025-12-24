import React from 'react'

export default function DrinkComponent({ drink }) {
  return (
    <div className="space-y-3">
      <h1 className="underline">{drink.strDrink}</h1>
      <img className="rounded-sm" src={drink.strDrinkThumb} alt={drink.strDrink} />

    </div>
  )
}
