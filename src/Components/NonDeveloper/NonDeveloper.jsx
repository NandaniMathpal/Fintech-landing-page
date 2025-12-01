import React from 'react';
import "./nondeveloper.css";

const NonDeveloper = () => {
  const cards = [
    { 
        title: "Instant Pay Links", 
        desc: "Send smart links and get paid instantly — no website required." 
    },
    { 
        title: "Custom Payment Pages", 
        desc: "Build beautiful branded payment pages without writing any code." 
    },
    { 
        title: "Smart Pay Buttons", 
        desc: "Add a fast checkout button anywhere — copy & paste, done."
    }
  ];

  return (
    <div className="nc-wrapper">
      <div className="nc-header">
        <p className="nc-subtitle">Not a Developer?</p>
        <h1 className="nc-title">Explore Our No-Code Payment Tools</h1>
        <p className="nc-desc">Launch fast. Get paid faster. No coding needed.</p>
      </div>
      <div className="nc-card-container">
        {cards.map((card, i) => (
          <div key={i} className="nc-card">
            <div className="nc-icon-box">
              <img src={card.icon} alt="icon" className="nc-icon" />
            </div>
            <h2 className="nc-card-title">{card.title}</h2>
            <p className="nc-card-desc">{card.desc}</p>
            <button className="nc-btn">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NonDeveloper;
