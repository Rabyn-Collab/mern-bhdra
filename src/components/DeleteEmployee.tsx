'use client';

import { removemployee } from "@/lib/actions";
import { useTransition } from "react";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";
import { toast } from "sonner";


export default function DeleteEmployee({ id }: { id: string }) {
  const [isLoading, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      const res = await removemployee(id);

      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
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
