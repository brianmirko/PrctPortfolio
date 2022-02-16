import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video src={coverVideo} className="video" autoPlay loop muted />
      <h1>Name Last Name</h1>
      <p>Developer | Designer | Content Creator | Entrepeneur</p>
    </div>
  );
};

export default Cover;
