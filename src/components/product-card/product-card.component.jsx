import { useContext } from "react";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import "./product-card.style.scss";
const ProductCard = ({ product }) => {
  const { id, name, images, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const handleAddCartItem = () => {
    addItemToCart(product);
  };
  return (
    <div className="product-card">
      <Link to={`/products/${id}`} className="text-dark text-decoration-none">
        <img src={images[0]} alt="" />
      </Link>
      <div className="d-flex justify-content-between align-items-start my-3">
        <div>
          <Link
            to={`/products/${id}`}
            className="text-dark text-decoration-none"
          >
            <h4>{name}</h4>
          </Link>
          <p className="price">
            ${price[0]} -{" "}
            <small>
              <del>${price[1]}</del>
            </small>
          </p>
        </div>
        <button>
          <FiHeart />
        </button>
      </div>
      <button
        onClick={handleAddCartItem}
        className="btn btn-outline-primary d-block w-100"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
