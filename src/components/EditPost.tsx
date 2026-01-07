'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Post } from "@/models/post";
import { db } from "@/utils/firebaseFirestore";
import { doc, updateDoc } from "@firebase/firestore";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";

export default function EditPost({ post }: { post: Post }) {

  const [isPending, startTransition] = useTransition();
  const router = useRouter();


  return (
    <div className="p-5">
      <Formik
        initialValues={{
          title: post.title,
          detail: post.detail,
          image: post.image
        }}
        onSubmit={(val) => {
          startTransition(async () => {
            try {
              await updateDoc(doc(db, 'posts', post.id), val);
              toast.success('Post added successfully');
              router.back();

            } catch (err: any) {
              toast.error(err.message);
            }
          })


        }}
      >


        {({ handleChange, handleSubmit, values }) => (

          <form onSubmit={handleSubmit} className="max-w-lg space-y-5">

            <div>
              <Input
                name="title"
                onChange={handleChange}
                value={values.title}
                placeholder="Title"
              />
            </div>
            <div>
              <Input
                value={values.detail}
                onChange={handleChange}
                name="detail"
                placeholder="Detail"
              />
            </div>
            <div>
              <Input
                value={values.image}
                onChange={handleChange}
                name="image"
                placeholder="Image"
              />
            </div>
            <Button
              disabled={isPending}
              type="submit">
              {isPending && <Spinner />}
              Submit</Button>
          </form>



        )}



      </Formik>





    </div>
  )
}
