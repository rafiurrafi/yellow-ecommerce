import { useContext } from "react";
import { GiFlatStar } from "react-icons/gi";
import image from "../../assets/profile-p.jpg";
import { CommentContext } from "../../contexts/comment.context";
const CommentContent = ({ comment }) => {
  const { parentId, imageUrl, name, message } = comment;

  return (
    <div className="d-flex mb-4">
      <div className="comment-img me-4">
        <img src={imageUrl ? imageUrl : image} alt="" />
      </div>
      <div style={{ flex: 1 }}>
        <div className="d-flex justify-content-between align-items-center">
          <h3>{name}</h3>
          <div className="me-4 ms-4">
            <span className="me-1">
              <GiFlatStar />
            </span>
            <span className="me-1">
              <GiFlatStar />
            </span>
            <span className="me-1">
              <GiFlatStar />
            </span>
            <span className="me-1">
              <GiFlatStar />
            </span>
            <span>
              <GiFlatStar />
            </span>
          </div>
        </div>
        <div>{message}</div>
      </div>
    </div>
  );
};

export default CommentContent;
