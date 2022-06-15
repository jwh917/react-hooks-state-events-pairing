import React from "react";

function CommentRemoveButton({deleteCommentFunc}) {

  return (
    <div className="App">
      <button onClick={deleteCommentFunc}>X</button>
    </div>
  );
}

export default CommentRemoveButton;