import React from "react";
import Slider from "react-slick";
import './testimonials.css'
import { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      img: "https://th.bing.com/th/id/OIP.QC4vnGCZ_aFOnvGvgmPIZwHaFC?w=225&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      name: "Nischay AG",
      role: "Co-founder, Jar",
      text:
        "Razorpay made payroll management unbelievably easy. We saved 500+ hours and cut operational costs massively."
    },
    {
      img: "https://media.istockphoto.com/id/163641915/photo/professional-woman-portrait.jpg?s=612x612&w=0&k=20&c=nynHHHm2ptjLsPv6apuCaEtM5B3EUenU02Dh_8QKvNc=",
      name: "Aditya Shankar",
      role: "Co-founder, Doubtnut",
      text:
        "Our payments scaled effortlessly. Razorpay handled everything during our fastest growth phases."
    },
    {
      img: "https://keensight.com/wp-content/uploads/2024/10/Pauline-Cauche.jpg",
      name: "Neha Tandon Sharma",
      role: "Founder, Isadora Life",
      text:
        "A complete transformation in how we manage vendor payouts. Smooth, fast and reliable."
    }
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const i = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(i);
  }, [paused, testimonials.length]);

  return (
    
    <div className="ts-main">

      <div className="ts-left-right">

      <div className="ts-slider">
        {testimonials.map((t, i) => {
          const isActive = i === index;

          return (
            <div
              key={i}
              className={`ts-card ${isActive ? "active" : "inactive"}`}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <img src={t.img} className="ts-img" alt="testimonial" />

              {/* Always visible overlay */}
              <div className="ts-overlay">
                <p className="ts-text">{t.text}</p>
                <h3 className="ts-name">{t.name}</h3>
                <p className="ts-role">{t.role}</p>
              </div>
              </div>
          );
          })}
        </div>

      {/* RIGHT: CONTENT SECTION */}
      <div className="ts-right">
        <h2>Why do leading businesses trust us?</h2>
        <p>
          Our platform is designed to help companies move faster, deliver better
          experiences, and scale effortlessly.
        </p>

        <ul>
          <li>✔ 99.9% uptime – reliable infrastructure</li>
          <li>✔ Built-in automation tools</li>
          <li>✔ Easy integration with existing systems</li>
          <li>✔ Used by 30,000+ companies</li>
        </ul>

        <button className="ts-btn">Know More</button>
      </div>
    </div>
    </div>
);
}

export default Testimonials;