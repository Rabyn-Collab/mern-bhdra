import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useState } from "react";

export default function AddToCart({ product }) {
  const [qty, setQty] = useState(1);

  const increment = () => setQty(qty + 1);
  const decrement = () => setQty(qty - 1);
  return (
    <div className="space-y-5">

      <div className="flex gap-4">
        <Button onClick={decrement}>
          <MinusIcon />
        </Button>

        <h3>{qty}</h3>
        <Button onClick={increment}>
          <PlusIcon />
        </Button>

      </div>

      <Button size="lg" className={'bg-green-600'}>Add To Cart</Button>



    </div>
  )
}
