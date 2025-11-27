import { useGetProductsQuery } from "../products/productApi"
import ProductCard from "../products/ProductCard";
import ProductCardSkeleton from "../products/ProductCardSkeleton";

export default function Home() {
  const { isLoading, error, data } = useGetProductsQuery();
  if (isLoading) return <div className="grid grid-cols-4 gap-6 mt-4 items-start">
    <ProductCardSkeleton />
    <ProductCardSkeleton />
    <ProductCardSkeleton />
    <ProductCardSkeleton />
    <ProductCardSkeleton />
    <ProductCardSkeleton />
    <ProductCardSkeleton />
    <ProductCardSkeleton />
  </div>

  if (error) return <h1 className="text-pink-950">{error}</h1>

  return (
    <div>


      <h1>Welcome To Shop Online</h1>
      <div className="grid grid-cols-4 gap-6 mt-4 items-start">
        {data.products.map((product) => {
          return <ProductCard key={product._id} product={product} />
        })}
      </div>


      {/* <ChildCompo label={'hello jee'} age={90}>
        <h1>sello jee</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt, vero sit quas tempora assumenda possimus. Unde accusamus, provident at voluptatem eius sunt quae ducimus exercitationem animi nemo facilis placeat.</p>
      </ChildCompo> */}

    </div>
  )
}



// function ChildCompo({ label, age, children }) {
//   return (
//     <div>
//       {children}

//       <h1>{label}</h1>
//       <p>{age}</p>

//     </div>
//   )
// }

