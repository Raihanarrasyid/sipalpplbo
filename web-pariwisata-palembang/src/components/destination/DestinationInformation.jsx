import React from "react";

function DestinationInformation() {
  return (
    <div className="my-32 relative w-4/5 mx-auto">
      <div
        style={{
          fontFamily: "Avenir",
        }}
        className="z-10 text-center flex flex-col gap-3"
      >
        <h1 data-aos="fade" className="text-5xl font-bold">
          Sriwijaya Kingdom Legacy
        </h1>
        <p data-aos="fade" className="text-lg">
          Palembang is a city with a rich history. The city was once the center
          of the Sriwijaya Kingdom, which was the largest Buddhist kingdom in
          Southeast Asia.
        </p>
        <img
          data-aos="fade-up"
          src="/map.png"
          alt=""
          className="h-96 w-full object-cover my-10 rounded-lg"
        />
      </div>
    </div>
  );
}

export default DestinationInformation;
