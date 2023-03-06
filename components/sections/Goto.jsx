import React from "react";
import Wrapper from "../ui/Wrapper";
import GotoCard from "../ui/GotoCard";

const Goto = () => {
  return (
    <Wrapper styles="h-[386px] py-16 mb-16">
      <div className="flex flex-col">
        <h1 className="text-[30px] font-semibold leading-12 pl-6">Go to:</h1>
        <div className="grid lg:grid-cols-3 gap-4 ">
          {[
            { title: "Alumni" },
            { title: "PhD" },
            { title: "Working at the UvA" },
            { title: "UvA Experts" },
            { title: "Staff website" },
            { title: "Student website" },
          ].map((item, index) => (
            <GotoCard key={index} {...item} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Goto;
