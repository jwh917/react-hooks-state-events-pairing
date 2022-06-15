import React, {useState} from "react";
import CommentsButton from "./CommentsButton.js";
import Comment from "./Comment.js";
import CommentsListHeader from "./CommentsListHeader.js";
import CommentSearch from "./CommentSearch.js";

function CommentsList({commentsForVideo, commentsButton, handleCommentsButton}) {
  const [userCommentSearch, setUserCommentSearch] = useState("")

  const commentsFilterArray = commentsForVideo.filter((comment) => {
    if(userCommentSearch === ""){
      return comment
    }
    else{
      return comment.user.toLowerCase().includes(userCommentSearch.toLowerCase())
    }
})

  const displayedComments = commentsFilterArray.map((comment) => {
    return ((commentsButton === "Hide Comments") ?
      <Comment 
      key={comment.user}
      user={comment.user}
      comment={comment.comment}
      /> : ""
    )
  })

  function handleCommentSearch(event){
    setUserCommentSearch(event.target.value)
  }

  function handleCommentSort(event){
    console.log("Did you see that, the comments sorted from A-Z 😭")
  }

  return (
    <div className="App">
      <CommentsListHeader/>
      <CommentsButton commentsButton={commentsButton} handleCommentsButton={handleCommentsButton}/>
      <button onClick={handleCommentSort}>Sort Comments</button>
      <CommentSearch handleCommentSearch={handleCommentSearch}/>
      <br></br>
      {displayedComments}
    </div>
  );
}

export default CommentsList;