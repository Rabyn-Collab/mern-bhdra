import React from 'react'
import { useNavigate } from 'react-router'

export default function DrinkComponent({ drink }) {
  const nav = useNavigate();
  return (
    <div
      onClick={() => nav(`/drink/${drink.idDrink}`)}
      className="space-y-3 cursor-pointer">
      <h1 className="underline">{drink.strDrink}</h1>
      <img className="rounded-sm" src={drink.strDrinkThumb} alt={drink.strDrink} />

    </div>
  )
}
