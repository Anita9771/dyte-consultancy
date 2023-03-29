import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [inputValueName, setInputValueName] = useState("");
  const [inputValueEmail, setInputValueEmail] = useState("");
  const dataToStore = { name: inputValueName, email: inputValueEmail };


  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/main-page", { state: { myData: dataToStore } });
  };

  function handleChangeName(event) {
    setInputValueName(event.target.value);
  }

  function handleChangeEmail(event) {
    setInputValueEmail(event.target.value);
  }

  return (
    <div className="landing-page">
      <h1>Welcome to DYTE consulting</h1>

      <p>
        We are a team of highly skilled and experienced professionals who are{" "}
        <br />
        passionate about helping you achieve your goals.
      </p>

      <p>
        <b>Enter your details below to get started!</b>
      </p>

      <form onSubmit={handleSubmit} className="landing-page-form">
        <input onChange={handleChangeName} value={inputValueName}  type="text" name="name" placeholder="Full Name" required/>
        <input onChange={handleChangeEmail} value={inputValueEmail} type="email" name="emailID" placeholder="Email ID" required/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LandingPage;
