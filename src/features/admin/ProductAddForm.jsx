import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Formik } from "formik"
import { useNavigate } from "react-router"
import * as Yup from "yup"
import { Spinner } from "../../components/ui/spinner.jsx"
import { toast } from "sonner"
import { Textarea } from "../../components/ui/textarea.jsx"
import { useRef } from "react"
import { useCreateProductMutation } from "../product/productApi.js"
import { useSelector } from "react-redux"


const productSchema = Yup.object({
  title: Yup.string().min(4).max(50).required("Title is required"),
  detail: Yup.string().min(10).max(200).required("Detail is required"),
  brand: Yup.string().required("Brand is required"),
  price: Yup.number().required("Price is required"),
  category: Yup.string().required("Category is required"),
  stock: Yup.number().required("Stock is required"),
  image: Yup.mixed()
    .test('fileType', 'Unsupported File Format', (values) => {
      return values.length > 0 && values.some((value) => {
        return ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type)
      })

    })

    .required("Image is required"),
})

export default function ProductAddForm() {
  const { user } = useSelector((state) => state.userSlice);

  const [addProduct, { isLoading }] = useCreateProductMutation();
  const nav = useNavigate();
  const inputRef = useRef(null);


  return (
    <div>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Product Add Form</CardTitle>
          <CardDescription>
            Add a new product
          </CardDescription>

        </CardHeader>
        <CardContent>

          <Formik

            initialValues={{
              title: '',
              detail: '',
              brand: '',
              price: '',
              category: '',
              stock: '',
              image: '',
              imagePreview: ''
            }}

            onSubmit={async (val) => {
              const formData = new FormData();
              formData.append('title', val.title);
              formData.append('detail', val.detail);
              formData.append('brand', val.brand);
              formData.append('price', val.price);
              formData.append('category', val.category);
              formData.append('stock', val.stock);


              val.image.forEach((image) => {
                formData.append('image', image);
              })
              try {



                await addProduct({
                  body: formData,
                  token: user.token
                }).unwrap();
                toast.success("Product added successfully");

              } catch (err) {
                toast.error(err.data.message);

              }


            }}

            validationSchema={productSchema}


          >


            {({ handleChange, handleSubmit, values, touched, errors, setFieldValue }) => (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">


                  <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      name='title'
                      onChange={handleChange}
                      value={values.title}
                      id="title"
                      type="text"
                      placeholder="Title"

                    />
                    {touched.title && errors.title && <p className="text-red-500">{errors.title}</p>}
                  </div>


                  <div className="grid gap-2">
                    <Label htmlFor="detail">Detail</Label>
                    <Textarea
                      id="detail"
                      type="text"
                      onChange={handleChange}
                      value={values.detail}
                      name='detail'
                      placeholder="product detail"

                    />
                    {touched.detail && errors.detail && <p className="text-red-500">{errors.detail}</p>}
                  </div>




                  <div className="grid gap-2">
                    <Label htmlFor="price">Price</Label>
                    <Input
                      name='price'
                      onChange={handleChange}
                      value={values.price}
                      id="price"
                      type="number"
                      placeholder="Price"
                    />
                    {touched.price && errors.price && <p className="text-red-500">{errors.price}</p>}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="stock">Stock</Label>
                    <Input
                      name='stock'
                      onChange={handleChange}
                      value={values.stock}
                      id="stock"
                      type="number"
                      placeholder="Stock"
                    />
                    {touched.stock && errors.stock && <p className="text-red-500">{errors.stock}</p>}
                  </div>

                  <Select
                    onValueChange={(e) => setFieldValue('brand', e)}
                  >

                    <SelectTrigger >
                      <SelectValue placeholder="Please Select a Brand" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="apple">apple</SelectItem>
                      <SelectItem value="samsung">samsung</SelectItem>
                      <SelectItem value="nike">nike</SelectItem>
                      <SelectItem value="addidas">addidas</SelectItem>
                      <SelectItem value="puma">puma</SelectItem>
                      <SelectItem value="tanishq">tanishq</SelectItem>
                      <SelectItem value="kfc">kfc</SelectItem>
                    </SelectContent>
                    {touched.brand && errors.brand && <p className="text-red-500">{errors.brand}</p>}
                  </Select>



                  <Select
                    onValueChange={(e) => setFieldValue('category', e)}
                  >

                    <SelectTrigger >
                      <SelectValue placeholder="Please Select a Category" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="men's clothing">men's clothing</SelectItem>
                      <SelectItem value="women's clothing">women's clothing</SelectItem>
                      <SelectItem value="jewelery">jewelery</SelectItem>
                      <SelectItem value="electronics">electronics</SelectItem>
                      <SelectItem value="food">food</SelectItem>
                    </SelectContent>
                    {touched.category && errors.category && <p className="text-red-500">{errors.category}</p>}
                  </Select>







                  <div className="grid gap-2">

                    <div className="flex items-center">
                      <Label htmlFor="image">Upload an image</Label>
                    </div>
                    <Input
                      id="image"
                      ref={inputRef}
                      className={'hidden'}
                      name="image"
                      type="file"
                      multiple
                      onChange={(e) => {
                        if (!e.target.files) return;

                        const filesArray = Array.from(e.target.files);
                        const imageUrls = filesArray.map((file) =>
                          URL.createObjectURL(file)
                        );
                        setFieldValue("imagePreview", imageUrls);
                        setFieldValue("image", filesArray);

                      }}
                    />
                    <Label
                      htmlFor="image"
                      className="inline-flex cursor-pointer items-center rounded-md border px-4 py-2 text-sm hover:bg-muted"
                    >
                      Choose images
                    </Label>

                    {touched.image && errors.image && <p className="text-red-500">{errors.image}</p>}

                    {values.imagePreview.length > 0 && !errors.image && (
                      <div className="flex flex-wrap gap-2">
                        {values.imagePreview.map((url, index) => (
                          <div key={index} className="relative">
                            <img
                              src={url}
                              alt={`Image ${index}`}
                              className="w-32 h-32 object-cover rounded border"
                            />

                            <button
                              type="button"
                              onClick={() => {
                                const updatedUrls = values.imagePreview.filter(
                                  (_, i) => i !== index
                                );
                                const updatedImages = values.image.filter(
                                  (_, i) => i !== index
                                );

                                setFieldValue("imagePreview", updatedUrls);
                                setFieldValue("image", updatedImages);
                              }}
                              className="absolute top-1 right-1 bg-red-500 text-white w-6 h-6 rounded-full text-xs"
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                    )}


                  </div>


                </div>

                <Button
                  disabled={isLoading}
                  type="submit" className="w-full mt-6">
                  {isLoading ? <Spinner /> : 'Submit'}

                </Button>
              </form>

            )}


          </Formik>

        </CardContent>

      </Card>
    </div>
  )
}