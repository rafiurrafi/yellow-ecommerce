import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./cart.style.scss";
const Cart = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  return (
    <div className="cart-page">
      <div className="container py-5">
        <h3 className="fw-normal">Your Cart Itmes</h3>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price(U)</th>
                <th>Qnty</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr className="align-middle" key={item.id}>
                  <td>
                    <img src={item.images[0]} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price[1]}</td>
                  <td>
                    <button onClick={() => removeItemFromCart(item)}>-</button>{" "}
                    {item.quantity}{" "}
                    <button onClick={() => addItemToCart(item)}>+</button>
                  </td>
                  <td>{item.quantity * item.price[1]} </td>
                  <td>
                    <button className="btn">X</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
