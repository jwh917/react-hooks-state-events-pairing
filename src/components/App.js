import React, {useState} from "react";
import video from "../data/video.js";
import DisplayedVideo from "./DisplayedVideo.js";
import VideoInfo from "./VideoInfo.js";

function App() {
  const urlForVideo = video.embedUrl

  const mainInfoForVideo ={
    title: video.title,
    views: video.views,
    date: video.createdAt
  }

  const [upvoteButton, setUpvoteButton] = useState(video.upvotes)
  const [downvoteButton, setDownvoteButton] =  useState(video.downvotes)
  const [commentsButton, setCommentsButton] = useState("Hide Comments")
  const commentsForVideo = video.comments

  function handleUpvoteButton(event){
    setUpvoteButton(parseFloat(event.target.innerHTML) + 1)
  }

  function handleDownvoteButton(event){
    setDownvoteButton(parseFloat(event.target.innerHTML) + 1)
  }

  function handleCommentsButton(event){ 
    if(commentsButton === "Hide Comments"){
      setCommentsButton("Show Comments")
    }
    else{
      setCommentsButton("Hide Comments")
    }
  }

  return (
    <div className="App">
      <DisplayedVideo videoUrl={urlForVideo}/>
      <VideoInfo 
      mainInfoForVideo={mainInfoForVideo} 
      upvoteButton={upvoteButton} 
      downvoteButton={downvoteButton} 
      handleUpvoteButton={handleUpvoteButton} 
      handleDownvoteButton={handleDownvoteButton} 
      commentsButton={commentsButton} 
      handleCommentsButton={handleCommentsButton} 
      commentsForVideo={commentsForVideo}
      />
    </div>
  );
}

export default App;
