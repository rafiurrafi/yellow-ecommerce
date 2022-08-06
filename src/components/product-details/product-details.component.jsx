import { ColorButton } from "../common/buttons/button.component";
import { FaHeart } from "react-icons/fa";
import "./product-details.style.scss";
const ProductDetails = ({ product }) => {
  const { name, price, description, images } = product;
  console.log(product);
  return (
    <div className="product-details my-5">
      <div className="container">
        <div className="row gx-5">
          <div className="col-6">
            <img src={images[0]} alt="Product not found" />
            <img src="https://im.ge/i/FNfuca" alt="Product not found" />
          </div>
          <div className="col-6">
            <h3 className="h3 mb-3">{name}</h3>
            <p className="product-details-price">
              <span>${price[0]}</span>{" "}
              <small className="ms-4">
                <del>${price[1]}</del>
              </small>
            </p>
            <div className="ratings my-4"></div>
            <p className="product-details-content">{description} </p>
            <div className="d-flex">
              <div className="details-color">
                <h4>Color</h4>
                <ColorButton color="black" />
                <span className="me-3">G</span>
                <span className="me-3">B</span>
              </div>
              <div className="details-size ms-5">
                <h4>Size</h4>
                <button className="me-3 d-inline-block">S</button>
                <button className="me-3 d-inline-block">L</button>
                <button className="me-3 d-inline-block">XL</button>
              </div>
            </div>
            <div className="d-flex mt-4 align-items-center">
              <div>
                <span>-</span>
                <span>0</span>
                <span>+</span>
              </div>
              <div className="mx-3">
                <button className="btn btn-primary">Add to cart</button>
              </div>
              <div>
                <FaHeart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
