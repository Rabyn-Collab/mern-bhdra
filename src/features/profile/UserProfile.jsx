import { useSelector } from "react-redux";
import OrderList from "../orders/OrderList";

export default function UserProfile() {
  const { user } = useSelector((state) => state.userSlice);
  return (
    <div className="grid grid-cols-2">
      <div>

      </div>
      <OrderList user={user} />


    </div>
  )
}
