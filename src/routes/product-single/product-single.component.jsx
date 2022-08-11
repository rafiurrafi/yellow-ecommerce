import { useContext } from "react";
import { useParams } from "react-router-dom";
import Comment from "../../components/comment/comment.component";
import ProductDetails from "../../components/product-details/product-details.component";
import { ProductContext } from "../../context/product.context";
import CommentProvider from "../../contexts/comment.context";
const ProductSingle = () => {
  const { products } = useContext(ProductContext);
  const { productId } = useParams();
  const product = products.find((p) => p.id === +productId);
  return (
    <div className="container">
      <h1 className="text-center bg-gray py-3 mb-5">Product details</h1>
      <ProductDetails product={product} />
      <CommentProvider>
        <Comment />
      </CommentProvider>
    </div>
  );
};

export default ProductSingle;
