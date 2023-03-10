import React from "react";
import { Dyte, Meeting, Videos } from "../components";

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="recorded">
        <Videos />
      </div>
      <div className="recorder">
        <Dyte />
      </div>
    </div>
  );
};

export default MainPage;
