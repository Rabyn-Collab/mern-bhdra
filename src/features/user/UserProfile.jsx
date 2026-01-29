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
import { useGetUserQuery, useUpdateUserMutation } from "./userApi.js"
import { base } from "../../app/mainApi.js"


const registerScema = Yup.object({
  username: Yup.string().min(4).max(50).required("Username is required"),
  email: Yup.string().email().required("Email is required"),
  bio: Yup.string().min(10).max(200).required("Bio is required"),
  image: Yup.mixed().test(
    'fileType',
    'Unsupported File Format',
    (value) => {
      if (value) {
        return ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type)
      }
      return true
    }
  ).test('fileSize', 'File is too large (max 5MB)', (val) => {
    return val && val.size <= 5 * 1024 * 1024;
  })
})

export default function UserProfile() {
  const nav = useNavigate();
  const { user } = useSelector((state) => state.userSlice);

  const { isLoading, data, error } = useGetUserQuery(user.token);
  const [updateProfile, { isLoading: isLoad }] = useUpdateUserMutation();

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
              imagePreview: data.image
            }}

            onSubmit={async (val) => {
              const formData = new FormData();

              formData.append('username', val.username);
              formData.append('email', val.email);
              formData.append('bio', val.bio);

              try {

                if (val.image) {
                  formData.append('image', val.image);
                }

                await updateProfile({
                  body: formData,
                  token: user.token
                }).unwrap();
                toast.success('Profile updated successfully');
                nav(-1);


              } catch (err) {
                toast.error(err.data.message);

              }


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


                    {values.imagePreview && !errors.image && <img src={values.image ? values.imagePreview : `${base}/${values.imagePreview}`} alt="" />}


                  </div>


                </div>

                <Button
                  disabled={isLoad}
                  type="submit" className="w-full mt-6">
                  {isLoad ? <Spinner /> : 'Update'}

                </Button>
              </form>

            )}


          </Formik>

        </CardContent>

      </Card>
    </div>
  )
}