import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Videos = () => {
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [
    "https://res.cloudinary.com/doy3ks7ls/video/upload/v1680075287/Intro_xb5ftf.mp4",
    "https://res.cloudinary.com/doy3ks7ls/video/upload/v1680075215/Question_1_rwml32.mp4",
    "https://res.cloudinary.com/doy3ks7ls/video/upload/v1680075219/Question_2_yeddjq.mp4",
    "https://res.cloudinary.com/doy3ks7ls/video/upload/v1680075219/Question_3_kqgbgw.mp4"

  ];

  const playNextVideo = () => {
    if (currentVideo < videos.length - 1) {
      setCurrentVideo(currentVideo + 1);
    }

    if (currentVideo === videos.length - 3) {
      const btnText = document.getElementById("playBtn");
      btnText.style.display = "block";
    }

    if (currentVideo === videos.length - 2) {
      const btnText = document.getElementById("playBtn");
      btnText.innerText = "Finish";
      alert("Ensure to end the meeting after answering the final question before you click on the finish button!")
    }

    // if (currentVideo === videos.length - 3) {
      
    // }

    if (currentVideo === videos.length - 1) {
      navigate("/success-page");
    }
  };

  return (
    <div className="videos">
      {/* <h1>My Videos</h1> */}
      <video className="video" src={videos[currentVideo]} controls></video>
      <button style={{ display: "none"}} id="playBtn" onClick={playNextVideo}>
        Next
      </button>
    </div>
  );
};

export default Videos;
