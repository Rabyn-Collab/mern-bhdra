import { Formik } from "formik";
import { Textarea } from "../../components/ui/textarea.jsx";
import { Button } from "../../components/ui/button.jsx";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import * as Yup from "yup";


const reviewSchema = Yup.object({
  rating: Yup.number().required("Rating is required"),
  comment: Yup.string().required("Comment is required"),
});



export default function ReviewForm() {
  return (
    <div className="mt-5">


      <h3 className="mb-5">Add a review</h3>

      <Formik
        initialValues={{
          rating: '',
          comment: ''
        }}

        onSubmit={(val) => {

        }}

        validationSchema={reviewSchema}

      >

        {({ setFieldValue, handleSubmit, values, handleChange, errors, touched }) => (
          <form
            onSubmit={handleSubmit}
            className="space-y-5 max-w-xl">

            <Select
              name="rating"
              onValueChange={(e) => setFieldValue("rating", e)}
            >
              <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="Select a something" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="1">VeryBad</SelectItem>
                  <SelectItem value="2">Bad</SelectItem>
                  <SelectItem value="3">Good</SelectItem>
                  <SelectItem value="4">Very Good</SelectItem>
                  <SelectItem value="5">Excellent</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.rating && touched.rating && <p className="text-red-500">{errors.rating}</p>}

            <Textarea
              value={values.comment}
              onChange={handleChange}
              name="comment"
              placeholder="Write your review" />
            {errors.comment && touched.comment && <p className="text-red-500">{errors.comment}</p>}
            <Button type="submit">Submit</Button>

          </form>
        )}

      </Formik>




    </div>
  )
}
