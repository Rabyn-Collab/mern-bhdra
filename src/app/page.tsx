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
import { auth, currentUser } from "@clerk/nextjs/server";
import { getEmployees } from "@/lib/actions";
import { EmployeeInterface } from "@/models/employeeInterface";
import DeleteEmployee from "@/components/DeleteEmployee";




export default async function Home() {

  // const m = await currentUser();
  // console.log(m?.firstName);
  // const { isAuthenticated, getToken } = await auth();
  // console.log(await getToken());

  const response = await getEmployees();

  const employees = response.data || [];


  return (
    <div className=" grid grid-cols-4 gap-5">

      {employees.map((employee: EmployeeInterface) => (
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
