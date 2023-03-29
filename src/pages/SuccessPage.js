import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  const anotherResponse = () => {
    navigate("/");
  };

  return (
    <div className="success-page">
      <h2>Goodluck!!</h2>
      <h2>Your Response has been recorded!</h2>
      <br />

      <i>
        <h3 style={{ cursor: "pointer" }} onClick={anotherResponse}>
          Submit another response
        </h3>
      </i>
    </div>
  );
};

export default SuccessPage;
