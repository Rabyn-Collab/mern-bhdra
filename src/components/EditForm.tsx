'use client';
import { Employee } from "@/models/employeeInterface";
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
import { useTransition } from "react";
import { Formik } from "formik";
import { valSchema } from "@/app/form/add/page";
import { useRouter } from "next/navigation";
import { Spinner } from "./ui/spinner";
import { updateEmployee } from "@/lib/actions";
import { toast } from "sonner";

export default function EditForm({ employee }: { employee: Employee }) {

  const [loading, startTransition] = useTransition();
  const router = useRouter();
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
            fullname: employee.fullname,
            position: employee.position,
            age: employee.age
          }}

          onSubmit={(val) => {

            startTransition(async () => {
              const res = await updateEmployee({
                fullname: val.fullname,
                position: val.position,
                age: Number(val.age),
                id: employee.id
              });

              if (res.success) {
                toast.success(res.message);
                router.back();
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
                {loading ? <Spinner /> : "Update Employee"}
              </Button>
            </form>

          )}



        </Formik>




      </CardContent>

    </Card>
  )
}






