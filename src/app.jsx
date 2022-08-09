import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import Cart from "./routes/cart/cart.component";
import Checkout from "./routes/checkout/checkout.component";
import Home from "./routes/home/home.component";
import Layout from "./routes/layout/layout.component";
import ProductSingle from "./routes/product-single/product-single.component";
import Shop from "./routes/shop/shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="authentication" element={<Authentication />} />
        <Route path="products/:productId" element={<ProductSingle />} />
      </Route>
    </Routes>
  );
};

export default App;
