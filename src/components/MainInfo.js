import React from "react";

function MainInfo({mainInfoForVideo}) {

  return (
    <div className="App">
      <h1>{mainInfoForVideo.title}</h1>
      <p>{mainInfoForVideo.views} Views | Uploaded: {mainInfoForVideo.date}</p>
    </div>
  );
}

export default MainInfo;