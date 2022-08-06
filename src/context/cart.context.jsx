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
const removeCartItem = (cartItems, itemToRemove) => {
  const existingItem = cartItems.find((item) => item.id === itemToRemove.id);
  if (existingItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToRemove.id);
  }
  // console.log(itemToRemove, existingItem);
  return cartItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

export const clearCartItem = (cartItems, itemToClear) => {
  return cartItems.filter((item) => item.id !== itemToClear.id);
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
  const removeItemFromCart = (itemToRemove) => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  };
  const clearItemFromCart = (itemToClear) => {
    setCartItems(clearCartItem(cartItems, itemToClear));
  };
  const value = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
