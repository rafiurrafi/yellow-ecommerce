import { useState } from "react";

const defaultFormField = {
  name: "",
  email: "",
  message: "",
};

const CommentForm = ({ onAddComment }) => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { name, email, message } = formFields;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment({ ...formFields, id: Math.random() * 100, replies: [] });
  };
  return (
    <div>
      <h4>Add a review</h4>
      <span>Your rating</span>
      <form onSubmit={handleSubmit}>
        <div className="d-flex mb-3">
          <input
            type="text"
            className="form-control me-3"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            className="form-control mb-3"
            name="message"
            value={message}
            onChange={handleChange}
            placeholder="message"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-outline-warning">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
