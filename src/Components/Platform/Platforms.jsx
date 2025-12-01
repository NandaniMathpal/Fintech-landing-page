import React from "react";
import './platforms.css';

const Platforms = () => {
  return (
    <div className="third-section">

      <div className="container">
        <div className="first">
          <h1>
            $30M in benefits with <span>Startup Perks</span>
          </h1>
          <button>Know More</button>
        </div>
        <div className="sec">
          <img
            src="https://framerusercontent.com/images/DTsknBwbytFufaMMY9DpEpOTF2A.png?width=1396&height=674"
            alt="Startup Illustration"
          />
        </div>
      </div>

      <div className="pay-features">
        <h1>
          The all-in-one <span>Finance Platform</span> you've been looking for
        </h1>
        <div className="feature-links">
          <h3>With us, you can:</h3>
          <a href="/">Accept Payments</a>
          <a href="/">Make Payouts</a>
          <a href="/">Start Business Banking</a>
          <a href="/">Get Credits & Loans</a>
        </div>
      </div>
    </div>
  );
};

export default Platforms;
