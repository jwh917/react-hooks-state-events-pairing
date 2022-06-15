import React from "react";
import MainVideoInfo from "./MainVideoInfo.js";
import UpDownVoteButtons from "./UpDownVoteButtons.js";
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
      <MainVideoInfo mainInfoForVideo={mainInfoForVideo}/>
      <UpDownVoteButtons upvoteButton={upvoteButton} downvoteButton={downvoteButton} handleUpvoteButton={handleUpvoteButton} handleDownvoteButton={handleDownvoteButton}/>
      <CommentsList commentsForVideo={commentsForVideo} commentsButton={commentsButton} handleCommentsButton={handleCommentsButton}/>
    </div>
  );
}

export default VideoInfo;