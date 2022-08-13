import { useContext } from "react";
import { HeaderContext } from "../../context/header-menu.context";
import { FaSearch } from "react-icons/fa";
import "./menu-modal.style.scss";
const MenuModal = () => {
  const { isMenuOpen } = useContext(HeaderContext);
  return (
    <div className={`${isMenuOpen ? "active" : ""} menu-modal`}>
      <div className="d-flex justify-content-between align-items-center menu-input">
        <input type="text" placeholder="Search" />
        <FaSearch />
      </div>
    </div>
  );
};

export default MenuModal;
