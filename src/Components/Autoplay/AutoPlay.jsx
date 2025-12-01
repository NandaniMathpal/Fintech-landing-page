import React from "react";
import Slider from "react-slick";
import './Autoplay.css'

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false
  };
  return (
    <div className="slider-container brand-slider">
      <Slider {...settings}>
        <div>
          <img className="zerodha" src="https://www.thefinancepoint.com/wp-content/uploads/2023/01/Zerodha-Review-1024x585.jpg" alt="" />
        </div>
        <div>
          <img className="swiggy" src="https://www.bing.com/th/id/OIP.a4I8ZrsMHFG9G73bw-MKdAHaHa?w=227&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
        </div>
        <div>
            <img className="bookmyshow" src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png" alt="" />
        </div>
        <div>
            <img className="niit" src="https://tse4.mm.bing.net/th/id/OIP.486uD1sRhOPokMzL4P-PTwHaCt?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
        </div>
        <div>
            <img className="nyka" src="https://tse2.mm.bing.net/th/id/OIP.uaW039svW6AN1RmIoL345AHaCb?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
        </div>
        <div>
            <img className="curefit" src="https://www.pngfind.com/pngs/m/682-6829885_cure-fit-logo-vector-hd-png-download.png" alt="" />
        </div>
        <div>
          <img className="zerodha" src="https://www.thefinancepoint.com/wp-content/uploads/2023/01/Zerodha-Review-1024x585.jpg" alt="" />
        </div>
        <div>
          <img className="swiggy" src="https://www.bing.com/th/id/OIP.a4I8ZrsMHFG9G73bw-MKdAHaHa?w=227&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
        </div>
        <div>
            <img className="bookmyshow" src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png" alt="" />
        </div>
        <div>
            <img className="niit" src="https://tse4.mm.bing.net/th/id/OIP.486uD1sRhOPokMzL4P-PTwHaCt?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
        </div>
        <div>
            <img className="nyka" src="https://tse2.mm.bing.net/th/id/OIP.uaW039svW6AN1RmIoL345AHaCb?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
        </div>
        <div>
            <img className="curefit" src="https://www.pngfind.com/pngs/m/682-6829885_cure-fit-logo-vector-hd-png-download.png" alt="" />
        </div>
        </Slider>
    </div>
  );
}

export default AutoPlay;
