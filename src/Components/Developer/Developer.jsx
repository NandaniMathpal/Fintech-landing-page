import React from "react";
import "./developer.css";

const techs = ["Java", "Python", "Node.js", "Go", "PHP", "cURL", "Ruby"];

const features = [
  {
    title: "Integrations",
    desc: "Integrate payments seamlessly using SDKs and plugins.",
  },
  {
    title: "API Reference",
    desc: "Well-structured docs to build faster and smarter.",
  },
  {
    title: "Webhooks",
    desc: "Receive real-time updates for payment events.",
  },
];

const Developer = () => {
  return (
    <div className="dev-section">

      <div className="tech-strip">
        <div className="tech-loop">
          {techs.concat(techs).map((tech, idx) => (
            <span key={idx}>{tech}</span>
          ))}
        </div>
      </div>

      <div className="dev-hero">
        <h2 className="hero-subtitle fade-up">Razorpay is built</h2>
        <h1 className="hero-title fade-up delay">
          &lt;for developers by developers&gt;
        </h1>
        <p className="hero-desc fade-up delay2">
          Build, integrate, and scale your payments effortlessly with
          developer-first tools, APIs, and libraries. Try a live demo below!
        </p>

        <div className="code-box fade-up delay3">
          <code>
            <pre>
{`// Initialize Razorpay Payment
const options = {
  key: "YOUR_KEY",
  amount: 1000,
  currency: "INR",
  name: "Acme Corp",
};
const rzp = new Razorpay(options);
rzp.open();`}
            </pre>
          </code>
          <button className="try-btn">Try It Yourself →</button>
        </div>
      </div>

      <div className="dev-cards">
        {features.map((f, idx) => (
          <div key={idx} className="dev-card compact">
            
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <a href="/">Explore Docs →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developer;
