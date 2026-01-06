'use client';

import { useTransition } from "react";
import { Button } from "./ui/button";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/utils/firebaseFirestore";
import toast from "react-hot-toast";
import { Spinner } from "./ui/spinner";

export default function DeletePost({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = async () => {
    startTransition(async () => {
      try {
        await deleteDoc(doc(db, 'posts', id));
        toast.success('Post deleted successfully');
      } catch (err: any) {
        toast.error(err.message);
      }
    })
  }


  return (
    <div>


      <Button disabled={isPending} onClick={handleDelete}>
        {isPending && <Spinner />}
        Delete</Button>



    </div>
  )
}
