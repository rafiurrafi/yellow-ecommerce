import { FiHeart } from "react-icons/fi";
import "./product-card.style.scss";
const ProductCard = ({ product }) => {
  const { name, images, price } = product;
  return (
    <div className="product-card">
      <img src={images[0]} alt="" />
      <div className="d-flex justify-content-between align-items-start my-3">
        <div>
          <h4>{name}</h4>
          <p>
            ${price[0]} - <span>${price[1]}</span>
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