import { useState } from "react";
import LoginForm from "../../components/login-form/login-form.component";
import "./authentication.style.scss";
const Authentication = () => {
  const [showLogin, setShowLogin] = useState("login");
  const renderComponent = () => {
    if (showLogin === "login") return <LoginForm />;
    else if (showLogin === "register") return <h1>Register</h1>;
  };
  return (
    <div className="authentication container">
      <div className="text-center">
        <button
          onClick={() => setShowLogin("login")}
          className={showLogin === "login" ? "btn btn-primary" : "btn"}
        >
          Login
        </button>{" "}
        |
        <button
          onClick={() => setShowLogin("register")}
          className={showLogin === "register" ? "btn btn-primary" : "btn"}
        >
          Register
        </button>
      </div>
      <div className="auth-form">{renderComponent()}</div>
    </div>
  );
};

export default Authentication;
