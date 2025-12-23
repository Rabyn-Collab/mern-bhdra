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
import * as Yup from "yup"
import { useAddNewsMutation } from "./newsApi"
import { Spinner } from "../../components/ui/spinner"
import toast from "react-hot-toast"
import { useNavigate } from "react-router"


export const valSchema = Yup.object({
  title: Yup.string().required(),
  detail: Yup.string().required(),
  author: Yup.string().required(),
})

export default function AddForm() {
  const [addNews, { isLoading }] = useAddNewsMutation();
  const nav = useNavigate();
  return (
    <div className="p-5">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Add News Form</CardTitle>
          <CardDescription>
            Enter news detail
          </CardDescription>

        </CardHeader>
        <CardContent>

          <Formik
            initialValues={{
              title: '',
              detail: '',
              author: ''
            }}

            onSubmit={async (val) => {
              try {
                await addNews(val).unwrap();
                toast.success('News added successfully');
                nav(-1);
              } catch (err) {
                console.log(err);
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
