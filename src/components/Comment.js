import React, {useState} from "react";
import CommentInfo from "./CommentInfo";
import CommentUpDownVoteButton from "./CommentUpDownVoteButton";
import CommentRemoveButton from "./CommentRemoveButton";


function Comment({user, comment}) {
  const [commentUpVote, setCommentUpVote] = useState(0)
  const [commentDownVote, setCommentDownVote] = useState(0)
  const [deleteComment, setDeleteComment] = useState(false)


  function handleCommentUpvoteButton(event){
    setCommentUpVote(parseFloat(event.target.innerHTML) + 1)
  }

  function handleCommentDownvoteButton(event){
    setCommentDownVote(parseFloat(event.target.innerHTML) + 1)
  }

  function deleteCommentFunc(){
    setDeleteComment(true)
  }

  return (
    deleteComment ? "" : (<div className="App">
      <CommentInfo user={user} comment={comment}/>
      <CommentUpDownVoteButton commentUpVote={commentUpVote} commentDownVote={commentDownVote} handleCommentUpvoteButton={handleCommentUpvoteButton} handleCommentDownvoteButton={handleCommentDownvoteButton}/>
      <br></br>
      <CommentRemoveButton deleteCommentFunc={deleteCommentFunc}/>
    </div>)
  );
}

export default Comment;