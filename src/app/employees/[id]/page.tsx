import axios from "axios";

interface UpdatePageProps {
  id: string;
}

export default async function UpdatePage({ params }: { params: Promise<UpdatePageProps> }) {
  const { id } = await params;

  const res = await axios.get(`https://6943678a69b12460f31474d4.mockapi.io/employess/${id}`);

  console.log(res.data);

  return (
    <div>



    </div>
  )
}
