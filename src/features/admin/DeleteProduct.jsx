import { useSelector } from 'react-redux';
import { Button } from '../../components/ui/button.jsx'
import { TrashIcon } from 'lucide-react'
import { useRemoveProductMutation } from '../product/productApi.js';
import { Spinner } from '../../components/ui/spinner.jsx';
import { toast } from 'sonner';

export default function DeleteProduct({ id }) {
  const { user } = useSelector((state) => state.userSlice);
  const [removeProduct, { isLoading }] = useRemoveProductMutation();
  const handleRemove = async () => {
    try {
      await removeProduct({ id, token: user.token }).unwrap();
      toast.success('Product deleted successfully');
    } catch (err) {
      toast.error(err.data.message);

    }

  }
  return (
    <div>

      <Button
        onClick={() => handleRemove()}
        disabled={isLoading}
        variant='ghost'>
        {isLoading ? <Spinner /> : <TrashIcon />}

      </Button>
    </div>
  )
}
