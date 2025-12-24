import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="p-2 flex justify-between px-5 items-center">

      <h1 className="font-bold text-amber-600">App</h1>

      <nav className="space-x-5">
        <NavLink className={(e) => {
          if (e.isActive) {
            return "font-bold underline text-amber-600"
          } else {
            return "font-bold underline"
          }
        }} to={'/'}>Ordinary Drink</NavLink>
        <NavLink className={(e) => {
          if (e.isActive) {
            return "font-bold underline text-amber-600"
          } else {
            return "font-bold underline"
          }
        }} to={'/cocktail'}>Cocktail</NavLink>
      </nav>

    </div>
  )
}
