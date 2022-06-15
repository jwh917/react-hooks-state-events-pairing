import React from "react";

function CommentUpDownVoteButton({commentUpVote, commentDownVote, handleCommentUpvoteButton, handleCommentDownvoteButton}) {

  return (
    <div className="App">
      <button onClick={handleCommentUpvoteButton}>{commentUpVote} 👍</button> <button onClick={handleCommentDownvoteButton}>{commentDownVote} 👎</button>
    </div>
  );
}

export default CommentUpDownVoteButton;