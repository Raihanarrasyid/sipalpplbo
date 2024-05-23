import React from "react";

function HeroAbout() {
  return (
    <div>
      <div className="text-white relative h-screen flex justify-center items-center">
        <img
          data-aos="fade"
          src="/taritanggai.png"
          alt=""
          className="w-full h-full object-cover z-[-10] absolute"
        />
        <div className="absolute w-full h-full bg-black opacity-50 z-[-5]"></div>
        <div className="z-10 text-center flex flex-col gap-3">
          <h1 data-aos="zoom-in" className="text-6xl font-bold">
            What's on in Palembang
          </h1>
          <p data-aos="zoom-in" className="text-lg">
            From it's cultural heritage to it's culinary delights and everything
            in between
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroAbout;
