import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoOne from '../assets/istockphoto-1289259333-640_adpp_is.mp4'

const Videos = () => {
    const navigate = useNavigate();
    const [currentVideo, setCurrentVideo] = useState(0);
    const videos = [ 'https://res.cloudinary.com/doy3ks7ls/video/upload/v1678440368/istockphoto-1324423859-640_adpp_is_tshpzg.mp4', 'https://res.cloudinary.com/doy3ks7ls/video/upload/v1678440372/istockphoto-1289259333-640_adpp_is_ydy6k9.mp4' ];


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
    <div className='videos'>
      {/* <h1>My Videos</h1> */}
      <video className='video' src={videos[currentVideo]} controls></video>
        <button id='playBtn' onClick={playNextVideo}>Next</button>
    </div>
  );
};

export default Videos;
