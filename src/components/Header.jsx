import { LucideShoppingBag } from "lucide-react";
import DropdownMenuButton from "./DropDownMenuButton.jsx";
import { Button } from "./ui/button.jsx";
import { NavLink } from "react-router";
import { useSelector } from "react-redux";

export default function Header() {
  const { user } = useSelector((state) => state.userSlice);
  return (
    <div className="flex items-center bg-black  text-white px-10 py-3 justify-between">

      <div className="flex gap-3">

        <LucideShoppingBag className="h-7 w-7" />
        <h2>Web Shop</h2>

      </div>

      <div>


        {user ? <DropdownMenuButton user={user} /> : <div className="flex gap-3">
          <NavLink to="/login">
            <Button variant="text">Login</Button>
          </NavLink>

          <NavLink to={'/register'}>
            <Button variant="outline" className="text-green-600">Sign Up</Button>
          </NavLink>



        </div>}



      </div>





    </div>
  )
}
