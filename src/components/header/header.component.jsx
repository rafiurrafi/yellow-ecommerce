import "./header.style.scss";
import * as Fc from "react-icons/fc";
import { BsFillPersonFill, BsSuitHeartFill } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header py-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo h2">Logo</div>
          <ul className="list-unstyled d-flex mb-0">
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
                to="/collection"
                className="text-decoration-none text-dark fw-semi-bold"
              >
                Collection
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
                to="/blog"
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
            <div className="btn">
              <GiShoppingCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
