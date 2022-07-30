import CommentContent from "../comment-content/comment-content.component";
import "./comment-item.style.scss";
const CommentItem = ({ comment }) => {
  const { name, imageUrl, message } = comment;
  return (
    <div className="comment-item">
      <CommentContent {...comment} />
      <div className="comment-inner mt-5">
        {comment?.replies.map((reply) => (
          <CommentContent {...reply} />
        ))}
      </div>
    </div>
  );
};

export default CommentItem;
