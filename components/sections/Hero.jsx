import React from "react";
import Wrapper from "../ui/Wrapper";
import HeroCard from "../ui/HeroCard";

const Hero = () => {
  return (
    <Wrapper>
      <div
        id="hero"
        className="max-w-[1166px] mx-auto px-3 grid lg:grid-cols-2 lg:grid-rows-1 gap-16 lg:pt-[72px] lg:pb-[86px]   lg:mt-28 lg:mb-16"
      >
        <div className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 pt-[72px] mb-6">
          <h1 className="text-[42px] font-semibold leading[58.8px]">
            University of Amsterdam
          </h1>
          <h2 className="text-[28px] leading-[44.8px]">
            Inspiring generations since 1632.
          </h2>
        </div>
        <div className="lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3 min-h-[476px]">
          <img
            className="object-cover h-full w-full"
            src="https://www.uva.nl/webfiles/1676992405662/includes/home-herobanner-en/img/Universiteit+van+Amsterdam+shoot+17012023-0176-flip-cropped-hi.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2 z-20 self-end gap-4 flex flex-col lg:flex-row w-full lg:mb-8 -mt-32 mx-auto px-6">
          {[
            {
              title: "Bachelor's",
              description: "20+ English-taught Bachelor's programmes",
            },
            {
              title: "Master's",
              description: "200+ English-taught Master's programmes",
            },
            {
              title: "Professional development",
              description: "MBA's, executive programmes, and master classes",
            },
          ].map((item, index) => (
            <HeroCard key={index} {...item} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
