import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Formik } from "formik"





export default function ProductAddForm() {
  return (
    <div>

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Product Create</CardTitle>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={{
              title: '',
              detail: '',
              price: '',
              category: '',
              brand: '',
              image: '',
              imageReview: '',
            }}
            onSubmit={(val) => {
              console.log(val);

            }}
          >
            {({ handleChange, handleSubmit, errors, touched, setFieldValue, values }) => (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">

                  <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      name="title"
                      onChange={handleChange}
                      value={values.title}
                      id="title"
                      type="text"
                      placeholder="product title"
                    />
                    {touched.title && errors.title && <p className="text-red-500">{errors.title}</p>}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="detail">Detail</Label>
                    <Textarea
                      name="detail"
                      onChange={handleChange}
                      value={values.detail}
                      id="detail"
                      type="text"
                      placeholder="product detail"
                    />
                    {touched.detail && errors.detail && <p className="text-red-500">{errors.detail}</p>}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="price">Price</Label>
                    <Input
                      name="price"
                      onChange={handleChange}
                      value={values.price}
                      id="price"
                      type="number"
                      placeholder="product price"
                    />
                    {touched.price && errors.price && <p className="text-red-500">{errors.price}</p>}
                  </div>

                  <Select
                    name="category"
                    onValueChange={(value) => setFieldValue('category', value)}
                  >
                    <SelectTrigger
                      className="w-full">
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="food">Food</SelectItem>
                        <SelectItem value="clothes">Clothes</SelectItem>
                        <SelectItem value="tech">Tech</SelectItem>
                        <SelectItem value="jewellery">Jewellery</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <Select
                    name="brand"
                    onValueChange={(value) => setFieldValue('brand', value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a brand" />
                    </SelectTrigger>
                    <SelectContent>

                      <SelectGroup>
                        <SelectItem value="addidas">Addidas</SelectItem>
                        <SelectItem value="samsung">Samsung</SelectItem>
                        <SelectItem value="tanishq">Tanishq</SelectItem>
                        <SelectItem value="kfc">Kfc</SelectItem>
                        <SelectItem value="iphone">Iphone</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>


                  <div className="grid gap-2">
                    <Label htmlFor="image">Select an image</Label>
                    <Input
                      name="image"
                      onChange={(e) => {

                      }}

                      id="image"
                      type="file"

                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Submi
                  </Button>

                </div>

              </form>


            )}
          </Formik>







        </CardContent>

      </Card>



    </div>
  )
}




