import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Videos = () => {
    const navigate = useNavigate();
    const [currentVideo, setCurrentVideo] = useState(0);
    const videos = [ 'https://www.w3schools.com/html/mov_bbb.mp4', 'https://www.youtube.com/watch?v=7fhtbd5NxW0', 'https://www.w3schools.com/html/mov_bbb.mp4' ];


    const playNextVideo = () => {
        if (currentVideo < videos.length - 1) {
          setCurrentVideo(currentVideo + 1);
        } 

        if (currentVideo === videos.length - 2) {
            const btnText = document.getElementById('playBtn');
            btnText.innerText = 'Finish';
        }

        if (currentVideo === videos.length - 1) {
            navigate('/success-page');
        }
      };

  return (
    <div>
      <h1>My Videos</h1>
      <video src={videos[currentVideo]} controls></video>
        <button id='playBtn' onClick={playNextVideo}>Next</button>
    </div>
  );
};

export default Videos;
