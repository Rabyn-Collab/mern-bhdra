import EditForm from "@/components/EditForm";
import axios from "axios";

export default async function EmployeeEdit({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;

  const response = await axios.get(`https://6985b6ac6964f10bf2543623.mockapi.io/employees/${id}`);

  const employee = response.data;

  return (
    <div>

      <EditForm employee={employee} />


    </div>
  )
}
