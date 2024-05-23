import React from "react";

function HeroTips() {
  return (
    <>
      <div className="text-white relative h-screen flex justify-center items-center">
        <img
          data-aos="fade"
          src="/travel.jpg"
          alt=""
          className="w-full h-full object-cover z-[-10] absolute"
        />
        <div className="absolute w-full h-full bg-black opacity-50 z-[-5]"></div>
        <div className="z-10 text-center flex flex-col gap-3">
          <h1 data-aos="zoom-in" className="text-6xl font-bold">
            Practical tips for travellers
          </h1>
          <p data-aos="zoom-in" className="text-lg">
            As you prepare for your next adventure, here are some tips to help
            you along the way.
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroTips;
