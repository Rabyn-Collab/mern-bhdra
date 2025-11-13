import { NavLink } from "react-router";

export default function Header() {
  return (
    <div>
      <NavLink to={'/'}>
        <h1 className="text-2xl">Some Logo</h1>
      </NavLink>


      <nav>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
      </nav>
      <hr />
    </div>
  )
}
