import { useState } from "react";
import Filter from "../../components/filter/filter.component";
import ProductCard from "../../components/product-card/product-card.component";
import Search from "../../components/search/search.component";
import SHOP_DATA from "../../service/fakeProductService";
const Shop = () => {
  const [products, setProducts] = [SHOP_DATA];
  const categoryNames = ["men", "women"];

  const handleSubmit = (index) => {
    console.log("hello");
  };
  return (
    <div className="shop">
      <h1 className="display-4 bg-gray py-4 text-center">Shop page</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Search />
            <Filter />
          </div>
          <div className="col-md-9">
            <div className="row">
              {products.map((product) => (
                <div className="col-md-6 col-lg-4" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
