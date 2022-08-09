import { createContext, useEffect, useState } from "react";

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
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
  cartCount: 0,
});
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 19,
      name: "Shirt 10",
      description: "",
      price: [40, 16],
      rating: 1,
      color: ["red", "black", "blue"],
      size: { small: "s", medium: "m", large: "l" },
      images: ["/assets/10.jpg"],
      tags: "women",
      categories: [],
      additionalInfo: "",
      reviews: [],
      quantity: 3,
    },
  ]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);
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
    cartTotal,
    cartCount,
  };
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (acc, item) => (acc += item.quantity * item.price[1]),
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (acc, item) => (acc += item.quantity),
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
