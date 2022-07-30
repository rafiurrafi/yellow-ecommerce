import ProductCard from "../product-card/product-card.component";
import PRODUCTS from "../../service/fakeProductService";
import { useState } from "react";
import { Link } from "react-router-dom";
const FeaturedProducts = () => {
  const [products, setProducts] = useState(PRODUCTS);
  const [showCat, setShowTag] = useState("men");
  const filteredProducts = products.filter(
    (product) => product.tags === showCat
  );

  return (
    <div className="featured-products my-5">
      <h3 className="display-4  text-center">Featured products</h3>
      <div className="d-flex justify-content-center my-3">
        <button className="btn me-4" onClick={() => setShowTag("men")}>
          Men
        </button>
        <button className="btn me-4" onClick={() => setShowTag("women")}>
          Women
        </button>
        <button className="btn me-4" onClick={() => setShowTag("bags")}>
          Bags
        </button>
        <button className="btn " onClick={() => setShowTag("kids")}>
          Kids
        </button>
      </div>
      <div className="container my-5">
        <div className="row ">
          {filteredProducts
            .filter((_, id) => id < 4)
            .map((product) => (
              <div key={product.id} className="col-md-4 col-lg-3">
                <ProductCard product={product} />
              </div>
            ))}
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-secondary px-5 py-2">Discover more</button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
