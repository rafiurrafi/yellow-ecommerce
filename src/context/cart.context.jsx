import { createContext, useState } from "react";

const addCartItem = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find((item) => item.id === itemToAdd.id);
  if (existingItem) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  cartItems: [],
  addItemsToCart: () => {},
});
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (itemToAdd) => {
    setCartItems(addCartItem(cartItems, itemToAdd));
  };
  const value = { cartItems, addItemToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
