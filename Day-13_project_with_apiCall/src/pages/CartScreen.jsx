import { useContext } from "react";
import { ProductStore } from "../context/ProductStore";
import CartCard from "../components/CartCard";



const CartScreen = () => {
    const {cartItems} = useContext(ProductStore);
  return (
    <div className="text-6xl grid grid-cols-1 gap-5 mt-5">
      {
        cartItems.map((elem)=>{
            return <CartCard key={elem.id} product={elem} />
        })
      }
    </div>
  )
}

export default CartScreen
