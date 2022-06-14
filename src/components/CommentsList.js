import React from "react";
import Comment from "./Comment.js";

function CommentsList({commentsForVideo, commentsButton}) {

  const displayedComments = commentsForVideo.map((comment) => {
    return ((commentsButton === "Hide Comments") ?
      <Comment 
      key={comment.user}
      user={comment.user}
      comment={comment.comment}
      /> : ""
    )
  })

  return (
    <div className="App">
      {displayedComments}
    </div>
  );
}

export default CommentsList;