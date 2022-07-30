import CommentItem from "../comment-item/comment-item.component";
import image1 from "assets/profile/profile-1.jpg";
import image2 from "assets/profile/profile-1.jpg";
const comments = [
  {
    id: 1,
    name: "Haseeba",
    email: "haseeba@yahool.mail",
    imgageUrl: image1,
    message:
      "Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.",
    replies: [
      {
        id: 1,
        name: "Sameeeya",
        email: "sameeya@yahool.mail",
        imgageUrl: image2,
        message:
          "Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.",
      },
    ],
  },
];
const Comment = () => {
  return (
    <div>
      <h3>Comment</h3>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comment;
