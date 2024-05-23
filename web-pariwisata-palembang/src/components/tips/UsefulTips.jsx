import React from "react";

function UsefulTips() {
  return (
    <>
      <div className="my-32 w-4/5 mx-auto flex justify-between items-start">
        <div data-aos="fade-right">
          <h1 className="font-bold text-3xl inline border-t-2 pt-3 border-black">
            Useful tips for travellers
          </h1>
        </div>
        <div
          style={{ fontFamily: "Avenir" }}
          className="w-[50rem] flex flex-col justify-between items-center gap-10"
        >
          <div data-aos="fade-left" className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">
              How can i get to the Palembang
            </h1>
            <p>
              You can fly, cruise, or drive to Palembang. The city is served by
              the Sultan Mahmud Badaruddin II International Airport, which is
              located about 10 kilometers from the city center. You can also
              take a ferry from Jakarta or drive from other cities in Sumatra.
            </p>
          </div>
          <div data-aos="fade-left" className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">Where should i stay?</h1>
            <p>
              Palembang has a range of accommodation options to suit all
              budgets. You can choose from luxury hotels, boutique hotels, guest
              houses, and homestays. Some of the best areas to stay in Palembang
              include the city center, Jakabaring, and the Ampera Bridge area.
            </p>
          </div>
          <div data-aos="fade-left" className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">
              What is the best time to visit Palembang?
            </h1>
            <p>
              The best time to visit Palembang is during the dry season, which
              runs from May to September. During this time, the weather is
              generally sunny and dry, making it ideal for sightseeing and
              outdoor activities. The wet season, which runs from October to
              April, can be hot and humid, with frequent rain showers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UsefulTips;
