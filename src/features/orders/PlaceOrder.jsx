import { useDispatch, useSelector } from "react-redux";
import { base } from "../../app/mainApi.js";
import { Button } from "../../components/ui/button.jsx";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import { removeSingle, setCart } from "../carts/cartSlice.js";

export default function PlaceOrder() {
  const dispatch = useDispatch();

  const { cart } = useSelector(state => state.cartSlice);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);



  return (
    <>

      {cart.length === 0 ? <p className=" text-2xl">Cart is empty</p> :
        <div className="grid grid-cols-2">

          <div>

            {cart.map((product) => {
              return <div key={product.id} className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-5 ">
                  <img className="w-20" src={`${base}/${product.image[0]}`} alt="" />
                  <p>{product.title}</p>

                </div>

                <div className="flex gap-5 items-center">

                  <Button

                    onClick={() => dispatch(setCart({ ...product, quantity: product.quantity - 1 }))}
                    disabled={product.quantity === 1}

                    variant="outline">
                    <MinusIcon />
                  </Button>


                  <p>{product.quantity}</p>

                  <Button

                    onClick={() => dispatch(setCart({ ...product, quantity: product.quantity + 1 }))}
                    disabled={product.quantity === product.stock}

                    variant="outline">  <PlusIcon /></Button>



                </div>
                <div className="flex items-center gap-5">

                  <p>Rs.{product.price}</p>
                  <Button
                    onClick={() => dispatch(removeSingle(product))}
                    variant="outline">
                    <TrashIcon />
                  </Button>

                </div>



              </div>

            })}


          </div>

          <div className="place-self-center space-y-2">
            <h3>Total Rs.{total}</h3>
            <Button>Place an Order</Button>
          </div>



        </div>
      }
    </>
  )
}
