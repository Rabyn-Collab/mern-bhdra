'use client';
import { Controller, useForm } from "react-hook-form";
import z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const formSchema = z.object({
  fullname: z.string().min(5, 'Fullname must be at lease 5 characters '),
  email: z.email(),
  file: z
    .instanceof(File, { message: 'File is required' })
    .refine((file) => file.size <= 2 * 1024 * 1024, 'File size must be less than 2MB')
    .refine((file) => ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'].includes(file.type), 'Only .jpeg and .png files are allowed'),
});


type FormValues = z.infer<typeof formSchema>;

export default function AddForm() {

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: '',
      email: '',
    }
  },

  );

  const onSubmit = (data: FormValues) => {
    console.log(data);
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
              name="email"
              control={form.control}

              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                >
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    aria-invalid={fieldState.invalid}
                    type="email"
                    id="email"
                    {...field}
                    placeholder="@example.com"
                  />
                  {fieldState.invalid && <FieldError
                    errors={[fieldState.error]}
                  />}
                </Field>
              )}
            />




            <Controller
              name="file"
              control={form.control}


              render={({ field, fieldState }) => {
                return <Field
                  data-invalid={fieldState.invalid}
                >
                  <FieldLabel htmlFor="file">Select Image</FieldLabel>
                  <Input
                    aria-invalid={fieldState.invalid}
                    type="file"
                    id="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      field.onChange(file)
                    }}

                  />
                  {fieldState.invalid && <FieldError
                    errors={[fieldState.error]}
                  />}

                  {field.value && !fieldState.invalid && !fieldState.error && (
                    <img className="mt-2 w-32 h-32 object-cover" src={URL.createObjectURL(field.value)} alt="Preview" />
                  )}
                </Field>
              }}
            />







          </FieldGroup>


        </FieldSet>

        <Field className="mt-4" orientation={'horizontal'}>
          <Button
            onClick={() => form.reset()}
            type="button" variant={'outline'}>Reset</Button>
          <Button type="submit">Submit</Button>
        </Field>





      </form>









    </div>
  )
}
