import React from "react";

const NewsCard = ({ image, title, description }) => {
  return (
    <div className="min-w-[324px] h-[475px] bg-white duration-300 ease-in-out hover:shadow-7xl border border-gray-300 rounded-[2px]">
      <img className="w-full h-[134px]" src={image} alt="" />
      <div className="w-full flex flex-col p-4 gap-4">
        <h1 className="text-[1.5rem] leading-[1.15]  font-semibold">{title}</h1>
        <p className="text-[1rem] leading-[28.8px] font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
