import Comment from "../../components/comment/comment.component";
import ProductDetails from "../../components/product-details/product-details.component";
import fakeProductService from "../../service/fakeProductService";
const ProductSingle = () => {
  return (
    <div className="container">
      <h1 className="text-center bg-gray py-3 mb-5">Product details</h1>
      <ProductDetails product={fakeProductService[0]} />
      <Comment />
    </div>
  );
};

export default ProductSingle;
