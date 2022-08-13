import { useContext } from "react";
import { HeaderContext } from "../../context/header-menu.context";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaPinterest,
  FaSearch,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import "./menu-modal.style.scss";
import { Link } from "react-router-dom";
const MenuModal = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(HeaderContext);
  return (
    <div className={`${isMenuOpen ? "active" : ""} menu-modal`}>
      <div className="menu-model-content">
        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-cross d-flex justify-content-center align-items-center"
          >
            <FaTimes />
          </div>
        )}
        <div className="d-flex justify-content-between align-items-center menu-input">
          <input type="text" placeholder="Search" className="ps-4" />
          <FaSearch />
        </div>
        <div className="modal-menus my-4 px-4">
          <Link
            className="d-block text-decoration-none text-dark fw-bold my-4"
            to="/"
          >
            Home
          </Link>
          <Link
            className="d-block text-decoration-none text-dark fw-bold my-4"
            to="/"
          >
            Shop
          </Link>
          <Link
            className="d-block text-decoration-none text-dark fw-bold my-4"
            to="/"
          >
            Pages
          </Link>
          <Link
            className="d-block text-decoration-none text-dark fw-bold my-4"
            to="/"
          >
            Blog
          </Link>
          <Link
            className="d-block text-decoration-none text-dark fw-bold my-4"
            to="/"
          >
            Contact Us
          </Link>
        </div>
        <div className="modal-inputs px-4 my-4">
          <h6 className="fw-bold">Choose Language</h6>
          <select name="" id="" className="form-select">
            <option value="">Arabic</option>
            <option value="">English</option>
            <option value="">Russian</option>
            <option value="">Bangla</option>
          </select>
          <h6 className="fw-bold mt-4">Choose Currency</h6>
          <select name="" id="" className="form-select">
            <option value="">EUR</option>
            <option value="">USD</option>
            <option value="">BDT</option>
          </select>
        </div>
        <div className="py-5 px-4">
          <div className="mb-2">
            <FaPhone /> <span className="ms-5"> (1245) 2456 012</span>
          </div>
          <div className="mb-2">
            <FaEnvelope /> <span className="ms-5">info@domain.com</span>
          </div>
          <div className="modal-socials">
            <a href="#" className="me-4 text-dark">
              <FaFacebook />
            </a>
            <a href="#" className="me-4 text-dark">
              <FaInstagram />
            </a>
            <a href="#" className="me-4 text-dark">
              <FaTwitter />
            </a>
            <a href="#" className="text-dark">
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
