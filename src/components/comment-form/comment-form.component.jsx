import { useContext, useState } from "react";
import { CommentContext } from "../../contexts/comment.context";
import { v4 as uuidv4 } from "uuid";
const defaultFormField = {
  name: "",
  email: "",
  message: "",
};

const CommentForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { addComment } = useContext(CommentContext);
  const { name, email, message } = formFields;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addComment({ ...formFields, id: uuidv4() });
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
