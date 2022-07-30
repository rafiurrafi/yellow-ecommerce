import { useEffect, useState } from "react";
import Filter from "../../components/filter/filter.component";
import ProductCard from "../../components/product-card/product-card.component";
import Search from "../../components/search/search.component";
import SHOP_DATA from "../../service/fakeProductService";
const Shop = () => {
  const [products, setProducts] = [SHOP_DATA];
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleFilter = (filter) => {
    setCategoryFilter(filter);
  };
  const handleSearchQuery = (value) => {
    setSearchQuery(value);
  };

  const filteredProducts = categoryFilter.length
    ? products.filter((product) => categoryFilter.includes(product.tags))
    : products;
  const searchProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="shop">
      <h1 className="display-4 bg-gray py-4 text-center">Shop page</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Search onSearchQuery={handleSearchQuery} />
            <Filter onFilter={handleFilter} />
          </div>
          <div className="col-md-9">
            <div className="row">
              {searchProducts.map((product) => (
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
