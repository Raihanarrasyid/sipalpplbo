import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const travels = [
  {
    image: "/ampera.jpg",
    title: "Ampera Bridge",
  },
  {
    image: "/bkb.png",
    title: "BKB",
  },
  {
    image: "/ki.jpg",
    title: "JSC",
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
];

function Travel({ title }) {
  return (
    <div className="w-4/5 mx-auto mt-32 flex flex-col">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-3xl">
            {title ? title : "Explore Palembang"}
          </h1>
        </div>

        <div className="max-w-[40rem]">
          <p
            style={{
              fontFamily: "Avenir",
            }}
            className="text-md"
          >
            You need inspiration for tourist destinations in Palembang. Check
            out some captivating spots to explore during your visit.
          </p>
        </div>
      </div>

      <div className="relative my-32">
        <Carousel>
          <CarouselContent>
            {travels.map((travel, index) => (
              <CarouselItem key={index + 1} className="basis-1/3">
                <Card>
                  <div className="relative w-full h-96">
                    <img
                      src={travel.image}
                      alt=""
                      className="w-full z-0 h-96 object-cover rounded-lg"
                    />
                    <p className="text-white z-10 text-2xl absolute bottom-1 right-2">
                      {travel.title}
                    </p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute top-[-2rem] right-10">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Travel;
