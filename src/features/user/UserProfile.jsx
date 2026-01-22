import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Formik } from "formik"
import * as Yup from "yup"
import { Spinner } from "../../components/ui/spinner.jsx"
import { toast } from "sonner"
import { Textarea } from "../../components/ui/textarea.jsx"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"
import { useGetUserQuery } from "./userApi.js"
import { base } from "../../app/mainApi.js"


const registerScema = Yup.object({
  username: Yup.string().min(4).max(50).required("Username is required"),
  email: Yup.string().email().required("Email is required"),
  bio: Yup.string().min(10).max(200).required("Bio is required"),
  image: Yup.mixed().test(
    'fileType',
    'Unsupported File Format',
    (value) => value && ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'].includes(value.type)
  ).required("Image is required"),
})

export default function UserProfile() {
  const nav = useNavigate();
  const { user } = useSelector((state) => state.userSlice);

  const { isLoading, data, error } = useGetUserQuery(user.token);

  if (isLoading) return <div className="flex gap-4 items-center">
    <h3>Loading...</h3>
    <Spinner />
  </div>

  if (error) return <p className='text-red-500'>{error.data?.message}</p>;

  return (
    <div>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Update  your account</CardTitle>
          <CardDescription>
            Enter your details below to update  your account
          </CardDescription>

        </CardHeader>
        <CardContent>

          <Formik

            initialValues={{
              username: data.username,
              email: data.email,
              bio: data.bio,

              image: '',
              imagePreview: data.imagePreview
            }}

            onSubmit={async (val) => {


            }}

            validationSchema={registerScema}
          >


            {({ handleChange, handleSubmit, values, touched, errors, setFieldValue }) => (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">


                  <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      name='username'
                      onChange={handleChange}
                      value={values.username}
                      id="username"
                      type="text"
                      placeholder="John Doe"

                    />
                    {touched.username && errors.username && <p className="text-red-500">{errors.username}</p>}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      onChange={handleChange}
                      value={values.email}
                      name='email'
                      placeholder="m@example.com"

                    />
                    {touched.email && errors.email && <p className="text-red-500">{errors.email}</p>}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      type="text"
                      onChange={handleChange}
                      value={values.bio}
                      name='bio'
                      placeholder="something yourself"

                    />
                    {touched.bio && errors.bio && <p className="text-red-500">{errors.bio}</p>}
                  </div>






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
                    {values.imagePreview && !errors.image && <img src={`${base}/${values.imagePreview}`} alt="" />}


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