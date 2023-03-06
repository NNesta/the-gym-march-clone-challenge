import React from "react";

const GotoCard = ({ title }) => {
  return (
    <div className="border h-[81px] max-w-[445px] rounded-[2px] p-6 hover:shadow-7xl">
      <h1 className="text-[1.5rem] font-semibold leading-[1.15] ">{title}</h1>
    </div>
  );
};

export default GotoCard;
