import { ColorButton } from "../common/buttons/button.component";
import { FaHeart } from "react-icons/fa";
import "./product-details.style.scss";
import { useEffect, useState } from "react";
const ProductDetails = ({ product }) => {
  const { name, price, description, images, colors, sizes } = product;
  const [selectedColor, setSelectedColor] = useState("red");
  const [selectedSize, setSelectedSize] = useState("s");
  const [selectedImg, setSelectedImg] = useState(images[0]);
  const handleSelectColor = (color) => {
    setSelectedColor(color);
  };
  useEffect(() => {
    const index = colors.indexOf(selectedColor);
    setSelectedImg(images[index]);
  }, [selectedColor]);
  console.log(selectedImg);
  return (
    <div className="product-details my-5">
      <div className="container">
        <div className="row gx-5">
          <div className="col-6">
            <img src={selectedImg} alt="Product not found" />
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
                {colors.map((color) => (
                  <ColorButton
                    color={color}
                    key={color}
                    selectedColor={selectedColor}
                    onSelectColor={handleSelectColor}
                  />
                ))}
              </div>
              <div className="details-size ms-5">
                <h4>Size</h4>
                {sizes.map((size) => (
                  <button
                    className={`${
                      selectedSize === size ? "active" : ""
                    } me-2 d-inline-block`}
                    key={size}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <div className="d-flex mt-4 align-items-center">
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
