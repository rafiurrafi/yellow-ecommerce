import { useState } from "react";
import CommentForm from "../comment-form/comment-form.component";
import CommentItem from "../comment-item/comment-item.component";

const commentMain = [
  {
    id: 1,
    name: "Haseeba",
    email: "haseeba@yahool.mail",
    imageUrl: "assets/profile/profile-1.jpg",
    message:
      "Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.",
    replies: [
      {
        id: 1,
        name: "Sameeeya",
        email: "sameeya@yahool.mail",
        imageUrl: "assets/profile/profile-2.jpg",
        message:
          "Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.",
      },
    ],
  },
];
const Comment = () => {
  const [comments, setComments] = useState(commentMain);
  const addComment = (comment) => {
    const updates = [...comments];
    updates.push(comment);
    setComments(updates);
  };
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
          <CommentForm onAddComment={addComment} />
        </div>
      </div>
    </div>
  );
};

export default Comment;
