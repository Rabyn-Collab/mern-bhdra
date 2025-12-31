import axios from "axios"

export default async function Home() {

  const res = await axios.get('https://dummyjson.com/products');

  const products = res.data.products;


  return (
    <div className="grid grid-cols-4 p-5 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">

      {products.map((product: any) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <img src={product.thumbnail} alt="" />
          <p>{product.description}</p>
        </div>
      ))}

    </div>
  )
}
