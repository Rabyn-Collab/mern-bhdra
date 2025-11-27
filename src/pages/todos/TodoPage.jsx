import { useState } from "react";

import { Input } from "@/components/ui/input";
import { TrashIcon } from "lucide-react";
import { v4 as uuidv4 } from 'uuid';
import { Button } from "@/components/ui/button";

export default function TodoPage() {

  const [todos, setTodos] = useState([]);

  const handleSubmit = (formData) => {
    const todoText = formData.get('todo');
    if (todoText === '') return;
    setTodos((prev) => [...prev, {
      label: todoText,
      id: uuidv4()
    }]);

  }
  const handleDelete = (id) => {
    setTodos(() => todos.filter(item => item.id !== id));
  }

  return (<div className="p-9">


    <form action={handleSubmit} className="flex flex-col max-w-sm space-y-3">

      <Input
        name="todo"
        className="border p-2" type="text" placeholder="add some todo" />

      <Button type="submit">Submit</Button>


    </form>
    <div className="mt-6">
      {todos.map((todo, index) => {
        return <div key={index} className="flex gap-2">
          <h1 >{`${index + 1}. ${todo.label}`}</h1>
          <Button
            onClick={() => handleDelete(todo.id)} variant="ghost">
            <TrashIcon color="red" />
          </Button>

        </div>
      })}

    </div>





  </div>
  )
}
