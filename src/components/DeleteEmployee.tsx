'use client';

import { useTransition } from "react";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";
import { toast } from "sonner";
import { deleteDoc, doc } from "@firebase/firestore";
import { db } from "@/lib/firestore";


export default function DeleteEmployee({ id }: { id?: string }) {
  const [isLoading, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {

      try {

        await deleteDoc(doc(db, 'employees', id!));
        toast.success('Employee removed successfully');
      } catch (err) {
        toast.error('Something went wrong');

      }




    })
  }

  return (
    <>

      <Button disabled={isLoading} onClick={handleDelete}>
        {isLoading ? <Spinner /> : "Delete"}
      </Button>
    </>
  )
}
