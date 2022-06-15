import React from "react";

function CommentsButton({commentsButton, handleCommentsButton}) {

  return (
    <div className="App">
      <button onClick={handleCommentsButton}>{commentsButton}</button>  <br></br>
      <br></br>
    </div>
  );
}

export default CommentsButton;