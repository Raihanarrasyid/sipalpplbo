import React from "react";

function HeroDestination() {
  return (
    <div>
      <div className="text-white relative h-screen flex justify-center items-center">
        <img
          data-aos="fade"
          src="/ampera.jpg"
          alt=""
          className="w-full h-full object-cover z-[-10] absolute"
        />
        <div className="absolute w-full h-full bg-black opacity-50 z-[-5]"></div>
        <div className="z-10 text-center flex flex-col gap-3">
          <h1 data-aos="zoom-in" className="text-6xl font-bold">
            Destination in Palembang
          </h1>
          <p data-aos="zoom-in" className="text-lg">
            Discover the beauty of Palembang and its surroundings
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroDestination;
