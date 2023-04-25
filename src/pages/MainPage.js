import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";
import { DyteGrid, DyteRecordingIndicator } from "@dytesdk/react-ui-kit";
import { useDyteClient, DyteProvider } from "@dytesdk/react-web-core";

const MainPage = () => {
  const [meeting, initMeeting] = useDyteClient();
  const location = useLocation();
  const myData = location.state?.myData;
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [
    "https://res.cloudinary.com/doy3ks7ls/video/upload/v1680075287/Intro_xb5ftf.mp4",
    "https://res.cloudinary.com/doy3ks7ls/video/upload/v1680075215/Question_1_rwml32.mp4",
    "https://res.cloudinary.com/doy3ks7ls/video/upload/v1680075219/Question_2_yeddjq.mp4",
    "https://res.cloudinary.com/doy3ks7ls/video/upload/v1680075219/Question_3_kqgbgw.mp4",
  ];

  const playNextVideo = () => {
    if (currentVideo < videos.length - 1) {
      setCurrentVideo(currentVideo + 1);
    }

    if (currentVideo === videos.length - 2) {
      const btnText = document.getElementById("playBtn");
      btnText.innerText = "Finish";
    }

    if (currentVideo === videos.length - 1) {
      meeting.leaveRoom();
      navigate("/success-page");
    }
  };

  const createMeeting = async () => {
    const response = await Axios.get(
      "https://dyte-async-backend.vercel.app/api/meeting"
    );

    const getBtn = document.getElementById("dyte-btn");
    getBtn.style.display = "none";
    const authToken = response.data;
    if (!authToken) {
      alert("Please pass an authToken to join a meeting.");
      return;
    }

    setCurrentVideo(currentVideo + 1);
    const btnText = document.getElementById("playBtn");
    btnText.style.display = "block";

    initMeeting({
      authToken,
      defaults: {
        audio: true,
        video: true,
      },
    }).then((meeting) => meeting.joinRoom());
  };

  return (
    <div className="main-page">
      <section className="user-info">
        <p>{myData.name}</p>
        <p>{myData.email}</p>
      </section>
      <div className="recorded">
        <div className="videos">
          <video className="video" src={videos[currentVideo]} controls></video>
          <button
            style={{ display: "none" }}
            id="playBtn"
            onClick={playNextVideo}
          >
            Next
          </button>
        </div>
      </div>
      <div className="recorder">
        <div className="dyte-meet">
          <button id="dyte-btn" className="dyte-btn" onClick={createMeeting}>
            GET STARTED
          </button>
          <DyteProvider value={meeting}>
            <DyteRecordingIndicator meeting={meeting} />
            <DyteGrid meeting={meeting} />
          </DyteProvider>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
