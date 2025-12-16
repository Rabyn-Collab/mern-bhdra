import { useSelector } from "react-redux"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Edit } from "lucide-react";
import DeleteTodo from "../todos/DeleteTodo";
import { useNavigate } from "react-router";


export default function Home() {
  const { todos } = useSelector((state) => state.todoSlice);
  const nav = useNavigate();

  // const lists = [{ id: 1, name: 'ram' }, { id: 2, name: 'shyam' }];

  // const m = lists.map((li) => li.id === 1 ? { id: 1, name: 'rita' } : li);

  // console.log(m);

  return (
    <div className="mt-5 grid grid-cols-3 gap-5">

      {todos.map((todo, index) => {
        return <Card key={todo.id}>
          <CardHeader>
            <CardTitle>{todo.username}</CardTitle>
            <CardDescription>{todo.email}</CardDescription>
          </CardHeader>
          <CardContent className='text-sm'>
            <p>{todo.message}</p>
            <ol className='mt-4 flex list-decimal flex-col gap-2 pl-6'>
              {todo.habits.map((habit, index) => <li key={index}>{habit}</li>)}
            </ol>
          </CardContent>

          <CardFooter className={'flex flex-col justify-start items-start'}>
            <p>{todo.country}</p>
            <p>Gender:-{todo.gender}</p>
            <div className="mt-5">
              <Button
                onClick={() => nav(`/edit-todo/${todo.id}`)}
                variant={'ghost'}>
                <Edit />
              </Button>
              <DeleteTodo index={index} />

            </div>
          </CardFooter>

        </Card>
      })}




    </div>
  )
}



