import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "../../components/ui/button"
import { Trash2Icon } from "lucide-react"
import { useRemoveNewsMutation } from "./newsApi"
import toast from "react-hot-toast";
import { Spinner } from "../../components/ui/spinner";
export default function DeleteNews({ id }) {
  const [removeNews, { isLoading }] = useRemoveNewsMutation();

  const handeleRemove = async () => {
    try {
      await removeNews(id).unwrap();
      toast.success('News deleted successfully');
    } catch (err) {
      toast.error(err.data);
    }
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {isLoading ? <Button disabled variant='ghost'>
          <Spinner />
        </Button> : <Button variant='ghost'>
          <Trash2Icon />
        </Button>}

      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handeleRemove}
          >Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
