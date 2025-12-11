import { useState } from "react";
import TodoForm from "../todos/TodoForm";



export default function Home() {

  const [users, setUsers] = useState([]);


  console.log(users);
  return (
    <div>

      <TodoForm setUsers={setUsers} users={users} />



    </div>
  )
}
