import { useGetProductsQuery } from "../products/productApi"
import ProductCard from "../products/ProductCard";

export default function Home() {
  const { isLoading, error, data } = useGetProductsQuery();
  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1 className="text-pink-950">{error}</h1>
  return (
    <div>

      <h1>This is home page</h1>
      <ProductCard />



    </div>
  )
}
