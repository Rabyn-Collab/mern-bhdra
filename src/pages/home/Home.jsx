import { useSelector } from "react-redux"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";


export default function Home() {


  const { todos } = useSelector((state) => state.todoSlice);



  return (
    <div className="mt-5 grid grid-cols-3 gap-5">

      {todos.map((todo) => {
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
          </CardFooter>

        </Card>
      })}




    </div>
  )
}



