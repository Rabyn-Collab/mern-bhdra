import { useParams } from "react-router"

export default function ProductDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1>This is product Detail</h1>


    </div>
  )
}
