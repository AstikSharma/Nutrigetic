import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

function Testimonials() {
  const isScreenSmaller = useMediaQuery({
    query: '(min-width:900px)'
  });

  const testimonialData = [
    "Hi I am Astik Sharma The Pro Coder As well as a web developer Hi I am Astik Sharma The Pro Coder As well as a web developer Hi I am Astik Sharma The Pro Coder As well as a web developer Hi I am Astik Sharma The Pro Coder As well as a web developer Hi I am Astik Sharma The Pro Coder As well as a web developer",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Hi I am Astik Sharma The Pro Coder As well as a web developer Hi I am Astik Sharma The Pro Coder As well as a web developer Hi I am Astik Sharma The Pro Coder As well as a web developer",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Hi I am Astik Sharma The Pro Coder As well as a web developer Hi I am Astik Sharma The Pro Coder As well as a web developer Hi I am Astik Sharma The Pro Coder As well as a web developer Hi I am Astik Sharma The Pro Coder As well as a web developer Hi I am Astik Sharma The Pro Coder As well as a web developer",
    "Hi I am Astik Sharma The Pro Coder As well as a web developer Hi I am Astik Sharma The Pro Coder As well as a web developer Hi I am Astik Sharma The Pro Coder As well as a web developer Hi I am Astik Sharma The Pro Coder As well as a web developer Hi I am Astik Sharma The Pro Coder As well as a web developer",

  ];

  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!isScreenSmaller) {
      setAutoplay(false);
    }
  }, [isScreenSmaller]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 2000,
    arrows: false,
  };
  const testimonialStyle = {
    color: "white",
    fontSize: "2rem",
    width: "80%",
    margin: "0 auto",
    textAlign:"center",
  };

  const headingStyle = {
    color: "white",
    width: "70%",
    margin: "0 auto",
    textAlign: "center"
  };
  const limitWords = (text, limit) => {
    const words = text.split(' ');
    return words.slice(0, limit).join(' ');
  };
  return (
    <div className="Testimonial-container" >
      <div className="Testimonial-overlay"></div>
      <div className="Testimonial-content" style={{ position: 'relative', zIndex: 2 }}>
        <p style={headingStyle}>What do my clients say about me</p>
        <Slider {...settings}>
          {testimonialData.map((testimonial, index) => (
            <div key={index} >
              <p style={testimonialStyle}>{!isScreenSmaller ? limitWords(testimonial, 40) : testimonial}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
