


export const getProducts = (req, res) => {
  return res.status(200).json({
    message: "List of products"
  })
}


export const createProduct = (req, res) => {
  console.log(req.titleUpper)
  return res.status(200).json({
    message: "Product created"
  })
}
