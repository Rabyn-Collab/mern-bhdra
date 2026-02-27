import EditForm from "@/components/EditForm";
import { db } from "@/lib/firestore";
import { doc, getDoc } from "@firebase/firestore";


export default async function EmployeeEdit({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;

  const response = await getDoc(doc(db, 'employees', id));

  const employee = response.data() ?? {};

  return (
    <div>

      <EditForm employee={{
        id: response.id,
        fullname: employee.fullname,
        position: employee.position,
        age: employee.age
      }} />


    </div>
  )
}
