import { useContext, useState } from "react";
import { CommentContext } from "../../contexts/comment.context";
import CommentForm from "../comment-form/comment-form.component";
import CommentItem from "../comment-item/comment-item.component";

const Comment = () => {
  const { comments } = useContext(CommentContext);

  return (
    <div>
      <h3>Comment</h3>
      <div className="d-md-flex align-items-start">
        <div>
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
        <div>
          <CommentForm />
        </div>
      </div>
    </div>
  );
};

export default Comment;
