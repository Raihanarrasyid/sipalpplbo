import React, { useState } from "react";
import Slider from "react-slick";

const images = [
  "/ampera.jpg",
  "/bkb.png",
  "/ki.jpg",
  "/amanzi.jpg",
  "/amanzi.png",
  "/kemaro.jpg",
  "/kemaro2.jpg",
];

function Part() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    cssEase: "linear",
  };

  return (
    <div className="w-[90%] mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index + 1}>
            <img src={image} alt="" className="w-full h-[35rem] object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Part;
