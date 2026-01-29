import { useGetProductsQuery } from "./productApi.js"

export default function AllProduct() {
  const { isLoading, data, error } = useGetProductsQuery();
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>{error.data?.message}</p>


  return (
    <div>
      {data.map((product) => {
        return <div key={product._id}>
          <p>{product.title}</p>

        </div>
      })}
    </div>
  )
}
