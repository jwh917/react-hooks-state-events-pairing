import React from "react";
import MainInfo from "./MainInfo.js";
import UpDownVoteButtons from "./UpDownVoteButtons.js";
import CommentsButton from "./CommentsButton.js";
import CommentsList from "./CommentsList.js";

function VideoInfo({
  mainInfoForVideo, 
  upvoteButton, 
  downvoteButton,
  handleUpvoteButton,
  handleDownvoteButton,
  commentsButton,
  handleCommentsButton,
  commentsForVideo
}) {

  return (
    <div className="App">
      <MainInfo mainInfoForVideo={mainInfoForVideo}/>
      <UpDownVoteButtons upvoteButton={upvoteButton} downvoteButton={downvoteButton} handleUpvoteButton={handleUpvoteButton} handleDownvoteButton={handleDownvoteButton}/>
      <CommentsButton commentsButton={commentsButton} handleCommentsButton={handleCommentsButton}/>
      <CommentsList commentsForVideo={commentsForVideo} commentsButton={commentsButton}/>
    </div>
  );
}

export default VideoInfo;