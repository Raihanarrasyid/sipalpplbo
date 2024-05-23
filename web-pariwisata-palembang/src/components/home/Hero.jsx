import React from "react";
import footage from "@/assets/footage.mp4";

function Hero() {
  return (
    <div className="text-white relative h-screen flex justify-center items-center">
      <video
        className="w-full h-full object-cover z-[-10] absolute"
        src={footage}
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute w-full h-full bg-black opacity-50 z-[-5]"></div>
      <div className="z-10 text-center flex flex-col gap-3">
        <p data-aos="zoom-in" className="text-lg">
          Togetherness - Wong Kito Galo
        </p>
        <h1 data-aos="zoom-in" className="text-6xl font-bold">
          The Oldest City in Indonesia
        </h1>
      </div>
    </div>
  );
}

export default Hero;
