import React from "react";

function Facts() {
  return (
    <>
      <div className="text-white relative h-screen flex justify-center items-center">
        <img
          data-aos="fade"
          src="/ampera.jpg"
          alt=""
          className="w-full h-full object-cover z-[-10] absolute"
        />
        <div className="absolute w-full h-full bg-black opacity-50 z-[-5]"></div>
        <div className="z-10 w-4/5 text-start justify-start items-start flex flex-col gap-3">
          <h1 data-aos="zoom-in" className="text-4xl font-bold">
            Facts about Palembang
          </h1>
          <p data-aos="zoom-in" className="text-lg">
            Palembang is the second largest city in Sumatra after Medan. It is
            the capital city of South Sumatra province of Indonesia. The city is
            one of the oldest cities in the Malay Archipelago and Southeast
            Asia.
          </p>
        </div>
      </div>
    </>
  );
}

export default Facts;
