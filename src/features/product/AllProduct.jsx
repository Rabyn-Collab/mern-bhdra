import { useNavigate, useSearchParams } from "react-router";
import { base } from "../../app/mainApi.js";
import { getRating } from "../../lib/rating.js";
import { useGetProductsQuery } from "./productApi.js"
import { Button } from "../../components/ui/button.jsx";
import { useEffect } from "react";

export default function AllProduct() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;

  const nav = useNavigate();
  const { isLoading, data, error } = useGetProductsQuery({
    page: Number(page)
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page])
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>{error.data?.message}</p>




  return (
    <div>
      <div className="grid grid-cols-5 gap-5">
        {data.products.map((product) => {
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


      <div className="flex gap-5 my-4">
        <Button
          onClick={() => setSearchParams({ page: Number(page) - 1 })}

          disabled={Number(page) === 1}
        >Prev</Button>
        <h1>{page}</h1>
        <Button
          onClick={() => setSearchParams({ page: Number(page) + 1 })}
          disabled={Number(page) === data.totalPages}
        >Next</Button>
      </div>



    </div>
  )
}
