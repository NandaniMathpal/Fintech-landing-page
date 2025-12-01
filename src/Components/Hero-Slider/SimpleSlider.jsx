import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './SimpleSlider.css'
import FrictionlessPay from '../../assets/Frictionlesspay.png';
import interPay from '../../assets/interpay.png'
import easyPay from '../../assets/easy.png'

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="slider-container slider-dot">
      <Slider {...settings}>
        <div>
          <img src={FrictionlessPay} alt="" width='100%'/>
        </div>
        <div>
          <img src={interPay} alt="" width='100%' />
        </div>
        <div>
          <img src={easyPay} alt="" width='100%' />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
