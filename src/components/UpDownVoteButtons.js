import React from "react";

function UpDownVoteButtons({
  upvoteButton, 
  downvoteButton,
  handleUpvoteButton,
  handleDownvoteButton
}) {

  return (
    <div className="App">
      <button onClick={handleUpvoteButton}>{upvoteButton} 👍</button> <button onClick={handleDownvoteButton}>{downvoteButton} 👎</button>
    </div>
  );
}

export default UpDownVoteButtons;