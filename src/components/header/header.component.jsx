import "./header.style.scss";
import * as Fc from "react-icons/fc";
import { BsFillPersonFill, BsSuitHeartFill } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cart.context";
import { FaTimes, FaBars } from "react-icons/fa";
import { HeaderContext } from "../../context/header-menu.context";

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(HeaderContext);
  const { cartItems } = useContext(CartContext);
  return (
    <div className="header py-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo h2">Logo</div>
          <ul className="list-unstyled d-none d-md-flex mb-0">
            <li className="mx-3">
              <Link
                to="/"
                className="text-decoration-none text-dark fw-semi-bold"
              >
                Home
              </Link>
            </li>
            <li className="mx-3">
              <Link
                to="/shop"
                className="text-decoration-none text-dark fw-semi-bold"
              >
                Shop
              </Link>
            </li>
            <li className="mx-3">
              <Link
                to="/pages"
                className="text-decoration-none text-dark fw-semi-bold"
              >
                Pages
              </Link>
            </li>
            <li className="mx-3">
              <Link
                to="/"
                className="text-decoration-none text-dark fw-semi-bold"
              >
                Blog
              </Link>
            </li>
            <li className="mx-3">
              <Link
                to="/contact-us"
                className="text-decoration-none text-dark fw-semi-bold"
              >
                Contact us
              </Link>
            </li>
          </ul>
          <div className="side-nav">
            <button className="btn">
              <Fc.FcSearch />
            </button>
            <div className="btn">
              <BsFillPersonFill />
            </div>
            <div className="btn">
              <BsSuitHeartFill />
            </div>
            <Link to="/cart" className="btn cart-btn">
              <GiShoppingCart />
              {cartItems.length > 0 && (
                <div className="cart-count">{cartItems.length}</div>
              )}
            </Link>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="header-cross d-block d-md-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
