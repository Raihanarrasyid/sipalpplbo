import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QuestionAnswer = [
  {
    question: "What is Palembang famous for?",
    answer:
      "Palembang is famous for its Ampera Bridge, which is a landmark of the city. The city is also known for its culinary delights, such as pempek, es kacang merah, and tekwan.",
  },
  {
    question: "What are the best places to visit in Palembang?",
    answer:
      "Some of the best places to visit in Palembang are the Ampera Bridge, Kemaro Island, and the Musi River.",
  },
  {
    question: "What is the best time to visit Palembang?",
    answer:
      "The best time to visit Palembang is during the dry season, which is from May to September. During this time, the weather is pleasant, and you can explore the city without any hindrances.",
  },
  {
    question: "What are the must-try dishes in Palembang?",
    answer:
      "Some of the must-try dishes in Palembang are pempek, es kacang merah, tekwan, and mie celor.",
  },
  {
    question: "What are the best activities to do in Palembang?",
    answer:
      "Some of the best activities to do in Palembang are visiting the Ampera Bridge, exploring Kemaro Island, and taking a boat ride on the Musi River.",
  },
];

function FAQ() {
  return (
    <div className="my-32 relative mx-auto w-4/5">
      <div data-aos="fade-right">
        <h1 className="font-bold text-3xl inline border-t-2 pt-3 border-black">
          A few common questions
        </h1>
      </div>

      <div
        data-aos="fade"
        className="flex gap-5 my-10 justify-between items-center"
      >
        <div className="flex-1">
          <Accordion type="single" collapsible className="w-full">
            {QuestionAnswer.map((qa, index) => (
              <AccordionItem key={index + 1} value={`item-${index + 1}`}>
                <AccordionTrigger>
                  <h1 className="text-xl text-left mt-10">{qa.question}</h1>
                </AccordionTrigger>
                <AccordionContent>
                  <p
                    style={{
                      fontFamily: "Avenir",
                    }}
                    className="text w-[35rem] mt-5 text-left"
                  >
                    {qa.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="flex-1">
          <img src="/indonesia.jpg" alt="" className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
