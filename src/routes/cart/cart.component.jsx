import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="cart">
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
