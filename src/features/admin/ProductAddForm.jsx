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
import { useState } from "react"
import { useNavigate } from "react-router"
import * as Yup from "yup"
import { Spinner } from "../../components/ui/spinner.jsx"
import { toast } from "sonner"
import { Textarea } from "../../components/ui/textarea.jsx"




export default function ProductAddForm() {
  const nav = useNavigate();

  const [show, setShow] = useState(false);
  const handleShow = () => {

    setShow(!show)
  };
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
              image: ''
            }}

            onSubmit={async (val) => {


            }}


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

                  <Select>

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
                  </Select>


                  <Select>

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
                  </Select>






                  <div className="grid gap-2">

                    <div className="flex items-center">
                      <Label htmlFor="image">Upload an image</Label>
                    </div>
                    <Input
                      name='image'
                      onChange={(e) => {
                        const file = e.target.files[0];
                        setFieldValue('imagePreview', URL.createObjectURL(file));

                        setFieldValue('image', file);

                      }}


                      id="image" type="file" />
                    {touched.image && errors.image && <p className="text-red-500">{errors.image}</p>}
                    {values.imagePreview && !errors.image && <img src={values.imagePreview} alt="" />}


                  </div>


                </div>

                {/* <Button
                  disabled={isLoading}
                  type="submit" className="w-full mt-6">
                  {isLoading ? <Spinner /> : 'Sign Up'}

                </Button> */}
              </form>

            )}


          </Formik>

        </CardContent>

      </Card>
    </div>
  )
}