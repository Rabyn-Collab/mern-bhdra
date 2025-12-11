import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="p-2 flex justify-between px-5 items-center">

      <h1 className="font-bold text-amber-600">App</h1>
      <NavLink className="font-bold underline" to={'/add-todo'}>Add Todo</NavLink>
    </div>
  )
}
