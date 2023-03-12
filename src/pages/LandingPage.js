import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
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

      <form className="landing-page-form">
        <label>Applicant ID</label>
        <input type="text" name="applicantID" />
        <Link to="/main-page">
          <button type="submit">Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default LandingPage;
