import React from "react";
import { Masonry } from "@mui/lab";

const height = ["30rem", "40rem", "50rem", "60rem", "70rem", "80rem", "30rem"];
const heightswithImage = [
  { height: "30rem", image: "/pempek.webp", title: "Pempek" },
  { height: "40rem", image: "/mie.jpeg", title: "Mie Celor" },
  { height: "50rem", image: "/martabak.png", title: "Martabak" },
  { height: "60rem", image: "/laksan.webp", title: "Laksan" },
  { height: "70rem", image: "/tempoyak.jpg", title: "Tempoyak" },
  { height: "80rem", image: "/lenggang.jpg", title: "Lenggang" },
  { height: "30rem", image: "/tekwan.webp", title: "Tekwan" },
];

function DestinationMasonry() {
  return (
    <div className="relative w-4/5 flex flex-col gap-10 mx-auto my-32">
      <div data-aos="fade-right">
        <h1 className="font-bold text-3xl inline border-t-2 pt-3 border-black">
          Palembang Culinary Food
        </h1>
      </div>

      <Masonry data-aos="fade" columns={2} spacing={1}>
        {heightswithImage.map((height, index) => (
          <div
            key={index + 1}
            className="relative rounded-lg"
            style={{ height: height.height }}
          >
            <img
              src={height.image}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
            <div
              id="image-overlay"
              className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 rounded-lg"
            ></div>
            <div className="absolute bottom-5 text-white left-5 bg-opacity-50 rounded-b-lg">
              <h1 className="font-bold text-xl text-center">{height.title}</h1>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default DestinationMasonry;
