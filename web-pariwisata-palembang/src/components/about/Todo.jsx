import React from "react";
import { Masonry } from "@mui/lab";

const data = [
  {
    title: "Tari Tanggai",
    image: "/taritanggai.png",
  },
  {
    title: "New Year",
    image: "/newyear.jpg",
  },
  {
    title: "Kemaro Island",
    image: "/kemaro.jpg",
  },
  {
    title: "Riding Boat",
    image: "/agustus.webp",
  },
  {
    title: "Eat Pempek",
    image: "/pempek.webp",
  },
  {
    title: "Palembang Traditional House",
    image: "/rumahlimas.jpg",
  },
];

const height = ["30rem", "40rem", "50rem", "60rem", "50rem", "40rem"];

function Todo() {
  return (
    <div>
      <div className="my-32 relative mx-auto w-4/5">
        <div className="flex justify-between items-center">
          <div data-aos="fade-right">
            <h1 className="font-bold text-3xl inline border-t-2 pt-3 border-black">
              Top things to do in Palembang
            </h1>
          </div>
          <p
            style={{
              fontFamily: "Avenir",
            }}
            data-aos="fade-left"
            className="text-lg w-[35rem] mt-5 text-left"
          >
            Palembang is a city with a rich cultural heritage and a variety of
            attractions to explore. Here are some of the top things to do in
            Palembang:
          </p>
        </div>

        <div data-aos="fade-up" className="my-20">
          <Masonry columns={3} spacing={1}>
            {data.map((data, index) => (
              <div
                key={index + 1}
                className="relative rounded-lg"
                style={{ height: height[index] }}
              >
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
                <div
                  id="image-overlay"
                  className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 rounded-lg"
                ></div>
                <div className="absolute bottom-5 text-white left-5 bg-opacity-50 rounded-b-lg">
                  <h1 className="font-bold text-xl text-center">
                    {data.title}
                  </h1>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </div>
  );
}

export default Todo;
