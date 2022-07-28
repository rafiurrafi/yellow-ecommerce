import { useState } from "react";
import Filter from "../../components/filter/filter.component";
import ProductCard from "../../components/product-card/product-card.component";
import Search from "../../components/search/search.component";
import SHOP_DATA from "../../service/fakeProductService";
const Shop = () => {
  const [products, setProducts] = useState(SHOP_DATA);
  const [filterInput, setFilterInput] = useState({});
  console.log(filterInput);
  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setFilterInput({ ...filterInput, [name]: value });
  };
  return (
    <div className="shop">
      <h1 className="display-4 bg-gray py-4 text-center">Shop page</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Search />
            <Filter />
            <input
              type="checkbox"
              name="men"
              value="men"
              onChange={handleSubmit}
            />
            <input
              type="checkbox"
              name="women"
              value="women"
              onChange={handleSubmit}
            />
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
