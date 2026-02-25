import EditForm from "@/components/EditForm";
import { getEmployee } from "@/lib/actions";


export default async function EmployeeEdit({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;

  const response = await getEmployee(id);

  const employee = response.data;

  return (
    <div>

      <EditForm employee={{
        id: employee._id.toString(),
        fullname: employee.fullname,
        position: employee.position,
        age: employee.age
      }} />


    </div>
  )
}
