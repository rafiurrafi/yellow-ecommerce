import image from "../../assets/profile-p.jpg";
const CommentContent = ({ name, imageUrl, message }) => {
  return (
    <div className="d-flex mb-4">
      <div className="comment-img me-4">
        <img src={imageUrl ? imageUrl : image} alt="" />
      </div>
      <div style={{ flex: 1 }}>
        <div className="d-flex justify-content-between align-items-center">
          <h3>{name}</h3>
          <div className="me-auto ms-4">start</div>
          <button className="btn btn-outline-primary">Reply</button>
        </div>
        <div>{message}</div>
      </div>
    </div>
  );
};

export default CommentContent;
