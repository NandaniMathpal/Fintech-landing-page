import React from "react";
import "./stackcard.css";

const StackCard = ({ img, title, desc }) => {
  return (
    <div className="stack-inner-card">
      <div className="stack-card-img">
        <img src={img} alt={title} />
      </div>

      <div className="stack-card-content">
        <h3>{title}</h3>
        <p>{desc}</p>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default StackCard;
