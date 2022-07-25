import "./header.style.scss";
import * as Fc from "react-icons/fc";
import { BsFillPersonFill, BsSuitHeartFill } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
const Header = () => {
  return (
    <div className="header py-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo h2">Logo</div>
          <ul className="list-unstyled d-flex mb-0">
            <li className="mx-3">
              <a
                href=""
                className="text-decoration-none text-dark fw-semi-bold"
              >
                Home
              </a>
            </li>
            <li className="mx-3">
              <a
                href=""
                className="text-decoration-none text-dark fw-semi-bold"
              >
                Shop
              </a>
            </li>
            <li className="mx-3">
              <a
                href=""
                className="text-decoration-none text-dark fw-semi-bold"
              >
                Collection
              </a>
            </li>
            <li className="mx-3">
              <a
                href=""
                className="text-decoration-none text-dark fw-semi-bold"
              >
                Pages
              </a>
            </li>
            <li className="mx-3">
              <a
                href=""
                className="text-decoration-none text-dark fw-semi-bold"
              >
                Blog
              </a>
            </li>
            <li className="mx-3">
              <a
                href=""
                className="text-decoration-none text-dark fw-semi-bold"
              >
                Contact us
              </a>
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
