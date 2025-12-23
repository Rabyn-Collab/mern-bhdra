import { useParams } from "react-router"
import EditForm from "./EditForm";
import { useGetNewsDetailQuery } from "./newsApi";

export default function EditPage() {
  const { id } = useParams();

  const { isLoading, error, data } = useGetNewsDetailQuery(id);

  if (isLoading) return <h1>Loading....</h1>
  if (error) return <p className='text-red-500'>{error.data}</p>

  console.log(data);

  return (
    <div>

      <EditForm product={data} />


    </div>
  )
}
