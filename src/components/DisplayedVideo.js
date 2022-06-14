import React from "react";

function DisplayedVideo({videoUrl}) {

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    </div>
  );
}

export default DisplayedVideo;