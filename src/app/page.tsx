import { Employee } from "@/models/employee";
import axios from "axios";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { Button } from "@/components/ui/button";




export default async function Home() {

  const response = await axios.get('https://6985b6ac6964f10bf2543623.mockapi.io/employees');

  const employees = response.data;


  return (
    <div className=" grid grid-cols-4 gap-5">

      {employees.map((employee: Employee) => (
        <Card key={employee.id}>
          <CardHeader>
            <CardTitle>{employee.fullname}</CardTitle>
            <CardDescription>{employee.position}</CardDescription>
            <CardAction>{employee.age}</CardAction>
          </CardHeader>

          <CardFooter>
            <Link href={`/employees/${employee.id}`}><Button>View</Button></Link>
          </CardFooter>
        </Card>
      ))}



    </div>
  )
}
