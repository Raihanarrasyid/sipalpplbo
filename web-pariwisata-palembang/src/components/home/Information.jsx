import React from "react";

function Information() {
  return (
    <div className="my-10 flex flex-col w-full">
      <div className="w-full flex items-center justify-end">
        <div className="rounded-lg h-96 w-[30rem] mr-[-300px] z-10 bg-slate-300 shadow-lg">
          <div
            className="py-20 px-10 flex flex-col gap-3"
            style={{
              fontFamily: "Avenir",
            }}
          >
            <h1 data-aos="fade" className="text-3xl font-bold">
              Everyone is Welcome Here at Palembang
            </h1>
            <p data-aos="fade">
              The Palembang city is a city that is open to everyone. We welcome
              all visitors with open arms and hope that you will enjoy your stay
              in our beautiful city. Whether you are here for business or
              pleasure, we are here to make your stay as comfortable and
              enjoyable as possible.
            </p>
          </div>
        </div>
        <div className="w-2/3">
          <img
            className=" w-full h-[720px] object-cover"
            src="/masjid.jpg"
            alt="ampera"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="mt-20 flex items-center">
          <div className="w-2/3">
            <img
              className=" w-full h-[720px] object-cover"
              src="/ampera.jpg"
              alt="masjid"
            />
          </div>
          <div className="rounded-lg h-96 w-[30rem] ml-[-300px] z-10 bg-slate-300 shadow-lg">
            <div
              className="py-20 px-10 flex flex-col gap-3"
              style={{
                fontFamily: "Avenir",
              }}
            >
              <h1 data-aos="fade" className="text-3xl font-bold">
                The City with Rich History and Culture
              </h1>
              <p data-aos="fade">
                Palembang is a city with a rich history and culture. The city
                was once the center of the Sriwijaya Kingdom, which was the
                largest Buddhist kingdom in Southeast Asia. The city is also
                home to many historical sites and landmarks that are worth
                visiting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
