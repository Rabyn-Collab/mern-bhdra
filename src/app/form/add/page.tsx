'use client';

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
import { Spinner } from "@/components/ui/spinner";
import { addEmployee } from "@/lib/actions"
import { Formik } from "formik";
import { useTransition } from "react";
import { toast } from "sonner";
import * as Yup from "yup"


const valSchema = Yup.object({
  fullname: Yup.string().required("Fullname is required"),
  position: Yup.string().required("Position is required"),
  age: Yup.number().required("Age is required"),
});



export default function AddEmployee() {

  const [loading, startTransition] = useTransition();
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Add Employee</CardTitle>
        <CardDescription>
          Enter employee details
        </CardDescription>

      </CardHeader>
      <CardContent>



        <Formik
          initialValues={{
            fullname: '',
            position: '',
            age: ''
          }}

          onSubmit={(val) => {

            startTransition(async () => {
              const res = await addEmployee({
                fullname: val.fullname,
                position: val.position,
                age: Number(val.age)
              });

              if (res.success) {
                toast.success(res.message);
              } else {
                toast.error(res.message);
              }
            })

          }}

          validationSchema={valSchema}
        >


          {({ handleChange, handleSubmit, values, errors, touched }) => (

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">


                <div className="grid gap-2">
                  <Label htmlFor="fullname">Fullname</Label>
                  <Input
                    onChange={handleChange}
                    value={values.fullname}
                    name="fullname"
                    id="fullname"
                    type="text"
                    placeholder="John Doe"

                  />
                  {touched.fullname && errors.fullname && <p className="text-red-500">{errors.fullname}</p>}
                </div>


                <div className="grid gap-2">
                  <Label htmlFor="position">Position</Label>
                  <Input
                    onChange={handleChange}
                    value={values.position}
                    name="position"
                    id="position"
                    type="text"
                    placeholder="Software Engineer"

                  />
                  {touched.position && errors.position && <p className="text-red-500">{errors.position}</p>}
                </div>


                <div className="grid gap-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    onChange={handleChange}
                    value={values.age}
                    name="age"
                    id="age"
                    type="number"
                    placeholder="25"

                  />
                  {touched.age && errors.age && <p className="text-red-500">{errors.age}</p>}
                </div>






              </div>


              <Button
                disabled={loading}
                type="submit" className="w-full mt-5">
                {loading ? <Spinner /> : "Add Employee"}
              </Button>
            </form>

          )}



        </Formik>




      </CardContent>

    </Card>
  )
}





