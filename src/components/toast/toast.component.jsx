import "./toast.style.scss";
const Toast = ({ children, isActive }) => {
  return (
    <div
      className={`${
        isActive ? "active" : ""
      } toasts  bg-success py-4 px-5 d-inline-block text-white`}
    >
      {children}
    </div>
  );
};

export default Toast;
