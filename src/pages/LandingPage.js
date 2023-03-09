import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to DYTE consultancy</h1>

      <h3>
        We are a team of highly skilled and experienced professionals who are
        passionate about helping you achieve your goals.
      </h3>

      <p>Enter your details below to get started</p>

      <form className="landing-page-form">
        <label>Applicant ID</label>
        <input type="text" name="applicantID" placeholder="Your ID" />
        <button type="submit">
            <Link to='/main-page' >Submit</Link>
            </button>
      </form>
    </div>
  );
};

export default LandingPage;
