import React from "react";

function CommentInfo({user, comment}) {

  return (
    <div className="App">
    <h3>{user}</h3>
    <p>{comment}</p>
    </div>
  );
}

export default CommentInfo;