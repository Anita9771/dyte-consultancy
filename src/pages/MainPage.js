import React from "react";
import { useLocation } from 'react-router-dom';
import { Dyte, Videos } from "../components";

const MainPage = () => {
  const location = useLocation();
  const myData = location.state?.myData;
  // const name = localStorage.getItem(inputValueName);

  return (
    <div className="main-page">
      <section className="user-info">
        <p>{myData.name}</p>
        <p>{myData.email}</p>
      </section>
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
