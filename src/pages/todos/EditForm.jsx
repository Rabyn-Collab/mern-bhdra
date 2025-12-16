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
import { Formik } from "formik"
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group"
import { Checkbox } from "../../components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "../../components/ui/textarea"
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { updateTodo } from "./todoSlice"



const todoSchema = Yup.object({
  email: Yup.string().email().required(),
  username: Yup.string().min(3).required(),
  gender: Yup.string().required(),
  habits: Yup.array().min(1).required(),
  country: Yup.string().required(),
  message: Yup.string().min(10).max(500).required(),
});


export default function EditForm() {
  const { id } = useParams();
  const { todos } = useSelector((state) => state.todoSlice);
  const todo = todos.find((todo) => todo.id === id);
  const dispatch = useDispatch();
  const nav = useNavigate();



  return (
    <div >

      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Add Some Todo</CardTitle>
          <CardDescription>
            Enter your detail below to add todo
          </CardDescription>


        </CardHeader>
        <CardContent>


          <Formik
            initialValues={{
              email: todo.email,
              username: todo.username,
              gender: todo.gender,
              habits: todo.habits,
              country: todo.country,
              message: todo.message,

            }}

            onSubmit={(val) => {

              dispatch(updateTodo({
                ...val,
                id: todo.id
              }));


              nav(-1);


            }}
            validationSchema={todoSchema}

          >
            {({ handleChange, handleSubmit, values, errors, setFieldValue, touched }) => (
              <form onSubmit={handleSubmit}>

                <div className="flex flex-col gap-6">


                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      id="email"


                      placeholder="m@example.com"
                    />
                    {errors.email && touched.email && <p className="text-pink-500">{errors.email}</p>}
                  </div>








                  <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      id="username"
                      placeholder="JohnDoe"
                    />

                    {errors.username && touched.username && <p className="text-pink-500">{errors.username}</p>}

                  </div>


                  <div className="space-y-3">
                    <h4>Select Your Gender</h4>
                    <RadioGroup
                      name="gender"
                      onChange={handleChange}
                      defaultValue={values.gender}
                      className={'flex'}>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem
                          value="male" id="r1" />
                        <Label htmlFor="r1">Male</Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem
                          value="female" id="r2" />
                        <Label htmlFor="r2">Female</Label>
                      </div>

                    </RadioGroup>
                    {errors.gender && touched.gender && <p className="text-pink-500">{errors.gender}</p>}

                  </div>


                  <div className="space-y-3">
                    <h4>Select Your Habits</h4>
                    <div className="flex gap-2">
                      <Checkbox
                        checked={values.habits.includes('sleeping')}
                        onCheckedChange={(e) => {
                          if (e) {
                            setFieldValue('habits', [...values.habits, 'sleeping']);
                          } else {
                            setFieldValue('habits', values.habits.filter((item) => item !== 'sleeping'));

                          }
                        }}
                        name="habits" id="ch1" value="sleeping"

                      />
                      <Label htmlFor="ch1">Sleeping</Label>
                    </div>
                    <div className="flex gap-2">
                      <Checkbox name="habits" id="ch2"
                        value="coding"
                        checked={values.habits.includes('coding')}
                        onCheckedChange={(e) => {
                          if (e) {
                            setFieldValue('habits', [...values.habits, 'coding']);
                          } else {
                            setFieldValue('habits', values.habits.filter((item) => item !== 'coding'));

                          }
                        }}

                      />
                      <Label htmlFor="ch2">Coding</Label>
                    </div>
                    {errors.habits && touched.habits && <p className="text-pink-500">{errors.habits}</p>}


                  </div>




                  <div className="space-y-3">
                    <h4>Select Your Country</h4>
                    <Select
                      value={values.country}
                      onValueChange={(e) => setFieldValue('country', e)}
                    >
                      <SelectTrigger
                        className="w-[180px]">
                        <SelectValue
                          placeholder="Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Nepal">Nepal</SelectItem>
                        <SelectItem value="India">India</SelectItem>
                        <SelectItem value="China">China</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.country && touched.country && <p className="text-pink-500">{errors.country}</p>}
                  </div>



                  <div>
                    <Textarea
                      name="message"
                      onChange={handleChange}
                      value={values.message}
                      placeholder="Your Message" />
                    {errors.message && touched.message && <p className="text-pink-500">{errors.message}</p>}
                  </div>



                  <Button type="submit" className="w-full">
                    Submit
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



