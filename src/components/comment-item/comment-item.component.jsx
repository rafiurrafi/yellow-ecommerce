import CommentContent from "../comment-content/comment-content.component";
import "./comment-item.style.scss";
const CommentItem = ({ comment }) => {
  return (
    <div className="comment-item mb-5">
      <CommentContent comment={comment} />
      {comment.replies && (
        <div className="comment-inner mt-5">
          {comment?.replies.map((reply) => (
            <CommentContent key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentItem;
