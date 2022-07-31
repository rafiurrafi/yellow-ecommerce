import { Routes, Route } from "react-router-dom";
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
        <Route path="products-single" element={<ProductSingle />} />
      </Route>
    </Routes>
  );
};

export default App;
