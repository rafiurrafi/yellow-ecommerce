import ProductCard from "../product-card/product-card.component";

const FeaturedProducts = () => {
  return (
    <div className="featured-products my-5">
      <h3 className="display-4  text-center">Featured products</h3>
      <div className="d-flex justify-content-center my-3">
        <button className="btn me-4">Men</button>
        <button className="btn">Women</button>
      </div>
      <div className="container">
        <div>
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
