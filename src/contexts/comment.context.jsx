import { createContext, useState } from "react";
const commentMain = [
  {
    id: 1,
    name: "Haseeba",
    email: "haseeba@yahool.mail",
    imageUrl: "/assets/profile/profile-1.jpg",
    message:
      "Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.",
    replies: [
      {
        id: 1,
        parentId: 1,
        name: "Sameeeya",
        email: "sameeya@yahool.mail",
        imageUrl: "/assets/profile/profile-2.jpg",
        message:
          "Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.",
      },
    ],
  },
];

export const CommentContext = createContext({ comments: [] });
const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState(commentMain);
  const [parentId, setParentId] = useState(0);
  const addReply = (id) => {
    console.log(id);
  };
  const addComment = (comment) => {
    const updates = [...comments];
    updates.push(comment);
    console.log(updates);
    setComments(updates);
  };
  const value = { comments, addComment, addReply };
  return (
    <CommentContext.Provider value={value}>{children}</CommentContext.Provider>
  );
};

export default CommentProvider;
