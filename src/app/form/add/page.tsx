'use client';
import { Controller, useForm } from "react-hook-form";
import z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "@/lib/firestore";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";


const formSchema = z.object({
  fullname: z.string().min(5, 'Fullname must be at lease 5 characters '),
  position: z.string().min(5, 'Position must be at lease 5 characters '),
  age: z.coerce.number(),
});


type FormValues = z.infer<typeof formSchema>;

export default function AddForm() {

  const [loading, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: '',
      position: '',
      age: ''
    }
  },

  );

  const onSubmit = (data: FormValues) => {
    startTransition(async () => {
      try {
        await addDoc(collection(db, 'employees'), data);
        toast.success('Employee added successfully');
        router.back();
      } catch (err) {
        toast.error('Error adding employee');
      }

    })
  }


  return (
    <div>


      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-lg">
        <FieldSet>

          <FieldLegend>Add Form Page</FieldLegend>
          <FieldDescription>
            Add detail to add into Database
          </FieldDescription>

          <FieldGroup>


            <Controller
              name="fullname"
              control={form.control}

              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                >
                  <FieldLabel htmlFor="fullname">Fullname</FieldLabel>
                  <Input
                    aria-invalid={fieldState.invalid}
                    type="text"
                    id="fullname"
                    {...field}
                    placeholder="fullname"
                  />
                  {fieldState.invalid && <FieldError
                    errors={[fieldState.error]}
                  />}
                </Field>
              )}
            />
            <Controller
              name="position"
              control={form.control}

              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                >
                  <FieldLabel htmlFor="position">Position</FieldLabel>
                  <Input
                    aria-invalid={fieldState.invalid}
                    type="text"
                    id="position"
                    {...field}
                    placeholder="position"
                  />
                  {fieldState.invalid && <FieldError
                    errors={[fieldState.error]}
                  />}
                </Field>
              )}
            />
            <Controller
              name="age"
              control={form.control}

              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                >
                  <FieldLabel htmlFor="age">Age</FieldLabel>
                  <Input
                    aria-invalid={fieldState.invalid}
                    type="number"
                    id="age"
                    {...field}
                    placeholder="90"
                  />
                  {fieldState.invalid && <FieldError
                    errors={[fieldState.error]}
                  />}
                </Field>
              )}
            />













          </FieldGroup>


        </FieldSet>

        <Field className="mt-4" orientation={'horizontal'}>
          <Button
            onClick={() => form.reset()}
            type="button" variant={'outline'}>Reset</Button>
          <Button
            disabled={loading}
            type="submit">
            {loading ? <Spinner /> : 'Submit'}
          </Button>
        </Field>





      </form>









    </div>
  )
}
