import { useNavigate } from "react-router";
import { base } from "../../app/mainApi.js";
import { getRating } from "../../lib/rating.js";
import { useGetProductsQuery } from "./productApi.js"

export default function AllProduct() {
  const nav = useNavigate();
  const { isLoading, data, error } = useGetProductsQuery();
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>{error.data?.message}</p>


  return (
    <div className="grid grid-cols-5 gap-5">
      {data.map((product) => {
        return <div
          onClick={() => nav(`/product/${product._id}`)}
          key={product._id} className="shadow-lg hover:shadow-xl space-y-2 cursor-pointer">
          <img
            className="h-60 object-cover w-full"
            src={`${base}/${product.image[0]}`} alt="" />
          <div className="p-2">
            <p className="font-semibold">{product.title}</p>
            <p className="text-red-500">Rs.{product.price}</p>
            <p>{getRating(product.rating)}</p>

          </div>


        </div>
      })}
    </div>
  )
}
