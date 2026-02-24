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
import DeleteEmployee from "@/components/DeleteEmployee";
import { auth, currentUser } from "@clerk/nextjs/server";




export default async function Home() {

  const m = await currentUser();
  console.log(m?.firstName);
  const { isAuthenticated, getToken } = await auth();
  console.log(await getToken());

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

          <CardFooter className="flex justify-between">
            <Link href={`/employees/${employee.id}`}><Button>View</Button></Link>
            <div className="space-x-5">

              <Link href={`/form/edit/${employee.id}`}><Button>Edit</Button></Link>

              <DeleteEmployee id={`${employee.id}`} />
            </div>

          </CardFooter>
        </Card>
      ))}



    </div>
  )
}
