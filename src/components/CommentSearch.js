import React from "react";

function CommentSearch({handleCommentSearch}) {

  return (
    <div className="App">
      <h3>User Comment Search</h3>
      <input type="search" onChange={handleCommentSearch}></input> 
    </div>
  );
}

export default CommentSearch;