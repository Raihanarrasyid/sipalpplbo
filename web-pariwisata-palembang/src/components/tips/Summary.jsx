import React from "react";

function Summary() {
  return (
    <div className="my-32 relative w-4/5 mx-auto">
      <div
        style={{
          fontFamily: "Avenir",
        }}
        className="z-10 text-center flex flex-col gap-3"
      >
        <h1 data-aos="fade" className="text-5xl font-bold">
          Palembang - A City of Rich History
        </h1>
        <p data-aos="fade" className="text-lg">
          You'll find so many things to do in Palembang - wheter it's people,
          stunning architecture, or the rich history of the city.
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

export default Summary;
