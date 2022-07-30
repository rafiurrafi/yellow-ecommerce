import "./comment-item.style.scss";
const CommentItem = ({ comment: { name, imageUrl, message } }) => {
  console.log(name, imageUrl, message);
  return (
    <div className="comment-item">
      <div className="d-flex">
        <div className="comment-img me-4">
          <img src={imageUrl} alt="" />
        </div>
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <h3>{name}</h3>
            <div className="me-auto ms-4">start</div>
            <button>Reply</button>
          </div>
          <div>{message}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
