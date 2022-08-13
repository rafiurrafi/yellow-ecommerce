import "./menu-modal.style.scss";
const MenuModal = ({ isActive }) => {
  return (
    <div className={`${isActive ? "active" : ""} menu-modal`}>Content</div>
  );
};

export default MenuModal;
