import React from "react";
import { BsArrowRight } from "react-icons/bs";

const HeroCard = ({ title, description }) => {
  return (
    <div className="max-w-[315px] min-h-[110px] border border-pr-500 bg-white text-pb-900 flex items-center py-4 px-6 leading-[25.6px] font-bold rounded-[2px]">
      <div className="">
        <h4 className="text-pr-500 font-bold">{title}</h4>
        <p className="font-normal text-[1rem] leading-[1.6]">{description}</p>
      </div>
      <img src="/assets/redarrow.svg" alt="" />
    </div>
  );
};

export default HeroCard;
