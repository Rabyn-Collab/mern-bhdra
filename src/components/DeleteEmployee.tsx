'use client';

import { removeEmployee } from "@/lib/actions";
import { useTransition } from "react";
import { Button } from "./ui/button";
import { Trash2Icon } from "lucide-react";
import toast from "react-hot-toast";
import { Spinner } from "./ui/spinner";



export default function DeleteEmployee({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  const handleRemove = () => {
    startTransition(async () => {
      try {
        await removeEmployee(id);
        toast.success('Employee removed successfully');
      } catch (err) {
        toast.error('Something went wrong',);

      }

    });
  }

  return (
    <div>

      {isPending ? <Button disabled variant={'ghost'}>
        <Spinner /> loading
      </Button> : <Button onClick={handleRemove} variant={'ghost'}>
        <Trash2Icon />
      </Button>}



    </div>

  )
}
