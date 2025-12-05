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


export default function TodoForm() {
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
              email: '',
              username: '',
              gender: 'male',
              habits: []
            }}

            onSubmit={(val) => {
              console.log(val);

            }}

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
                      type="email"
                      placeholder="m@example.com"
                    />
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
                  </div>


                  <div className="space-y-3">
                    <h4>Select Your Gender</h4>
                    <RadioGroup
                      name="gender"
                      onChange={handleChange}
                      defaultValue="male" className={'flex'}>
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

                  </div>


                  <div className="space-y-3">
                    <h4>Select Your Habits</h4>
                    <div className="flex gap-2">
                      <Checkbox
                        onChange={(e) => {
                          console.log(e);
                        }}
                        name="habits" id="ch1" value="sleeping"
                      // onChange={handleChange}
                      />
                      <Label htmlFor="ch1">Sleeping</Label>
                    </div>
                    <div className="flex gap-2">
                      <Checkbox name="habits" id="ch2"
                        value="coding"

                        onChange={(e) => {
                          console.log(e);
                        }}

                      />
                      <Label htmlFor="ch2">Coding</Label>
                    </div>


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



