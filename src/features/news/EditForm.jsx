import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Formik } from "formik"
import { Spinner } from "../../components/ui/spinner"
import toast from "react-hot-toast"
import { useNavigate } from "react-router"
import { valSchema } from "./AddForm"
import { useUpdateNewsMutation } from "./newsApi"



export default function EditForm({ product }) {
  const [updateNews, { isLoading }] = useUpdateNewsMutation();

  const nav = useNavigate();
  return (
    <div className="p-5">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Update News Form</CardTitle>
          <CardDescription>
            Enter news detail
          </CardDescription>

        </CardHeader>
        <CardContent>

          <Formik
            initialValues={{
              title: product.title,
              detail: product.detail,
              author: product.author
            }}

            onSubmit={async (val) => {
              try {
                await updateNews({
                  id: product.id,
                  body: val
                }).unwrap();
                toast.success('News updated successfully');
                nav(-1);
              } catch (err) {
                toast.error(err.data);
              }

            }}

            validationSchema={valSchema}
          >
            {({ handleChange, values, errors, touched, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">


                  <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="Title"
                      name='title'
                      onChange={handleChange}
                      value={values.title}
                    />
                    {errors.title && touched.title && <p className="text-red-500">{errors.title}</p>}
                  </div>



                  <div className="grid gap-2">
                    <Label htmlFor="detail">Detail</Label>
                    <Textarea
                      id="detail"
                      placeholder="Detail"
                      name='detail'
                      onChange={handleChange}
                      value={values.detail}
                    />
                    {errors.detail && touched.detail && <p className="text-red-500">{errors.detail}</p>}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="author">Author</Label>
                    <Input
                      id="author"
                      placeholder="Author"
                      name='author'
                      onChange={handleChange}
                      value={values.author}
                    />
                    {errors.author && touched.author && <p className="text-red-500">{errors.author}</p>}
                  </div>


                </div>

                {isLoading ? <Button disabled={isLoading} type="submit" className="w-full mt-5">
                  <Spinner /> Submit
                </Button> : <Button type="submit" className="w-full mt-5">
                  Submit
                </Button>}


              </form>

            )}
          </Formik>







        </CardContent>

      </Card>
    </div>
  )
}
