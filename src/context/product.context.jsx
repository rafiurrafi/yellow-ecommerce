import { createContext, useState } from "react";
import fakeProductService from "../service/fakeProductService";

export const ProductContext = createContext({
  products: [],
});
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(fakeProductService);
  const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
