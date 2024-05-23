import React from "react";
import { Masonry } from "@mui/lab";

const destination = [
  {
    image: "/bkb.png",
    title: "The Oldest Fort in Palembang",
  },
  {
    image: "/amanzi.jpg",
    title: "Kambang Iwak Park",
  },
  {
    image: "/amanzi.png",
    title: "Amanzi Waterpark",
  },
  {
    image: "/kemaro.jpg",
    title: "Kemaro Island",
  },
  {
    image: "/monpera.jpg",
    title: "Monpera",
  },
  {
    image: "/masjid.jpg",
    title: "Great Mosque of Palembang",
  },
];

const height = ["30rem", "40rem", "50rem", "60rem", "50rem", "40rem"];

function Highlight() {
  return (
    <div>
      <div className="w-4/5 flex flex-col gap-10 mx-auto my-32">
        <div>
          <h1 className="font-bold text-3xl inline border-t-2 pt-3 border-black">
            Destination Highlight
          </h1>
        </div>
        <Masonry columns={3} spacing={1}>
          {destination.map((destination, index) => (
            <div
              key={index + 1}
              className="relative rounded-lg"
              style={{ height: height[index] }}
            >
              <img
                src={destination.image}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 text-white left-5 bg-opacity-50 rounded-b-lg">
                <h1 className="font-bold text-xl text-center">
                  {destination.title}
                </h1>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export default Highlight;
