const RegisterForm = () => {
  return (
    <div className="register-form">
      <div>
        <input
          type="text"
          className="form-control my-3"
          placeholder="Dispaly Name"
        />
        <input
          type="text"
          className="form-control my-3"
          placeholder="Username"
        />
        <input
          type="text"
          className="form-control my-3"
          placeholder="Password"
        />

        <input
          type="text"
          className="form-control my-3"
          placeholder="Confirm Password"
        />

        <button className="btn btn-outline-primary">Submit</button>
      </div>
    </div>
  );
};

export default RegisterForm;
