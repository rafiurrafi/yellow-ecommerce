import { FiHeart } from "react-icons/fi";
import "./product-card.style.scss";
const ProductCard = () => {
  return (
    <div className="product-card">
      <img src="assets/1.jpg" alt="" />
      <div className="d-flex justify-content-between align-items-start my-3">
        <div>
          <h4>Shirt 1</h4>
          <p>
            $1000 - <span>$999</span>
          </p>
        </div>
        <button>
          <FiHeart />
        </button>
      </div>
      <button className="btn btn-outline-primary d-block w-100">
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
