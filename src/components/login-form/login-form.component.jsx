const LoginForm = () => {
  return (
    <div>
      <input type="text" className="form-control my-3" placeholder="Username" />

      <input type="text" className="form-control my-3" placeholder="Username" />

      <div className="d-flex justify-content-between my-3">
        <div>
          <input type="checkbox" id="remember" className="form-check-input" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <a href="#" className="text-decoration-none text-dark">
          Forget Password
        </a>
      </div>
      <button className="btn btn-outline-primary">Submit</button>
    </div>
  );
};

export default LoginForm;
