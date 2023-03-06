import React from "react";
import Wrapper from "../ui/Wrapper";
import CurrentCard from "../ui/CurrentCard";

const Current = () => {
  return (
    <Wrapper>
      <h1 className="text-[30px] font-semibold leading-12 pl-6">Current</h1>
      <div className="grid lg:grid-cols-3 gap-4">
        {[
          {
            image:
              "https://www.uva.nl/binaries/_ht_1621425616851/cardmedium/content/gallery/faculteiten-en-diensten/restyling18-generiek-beeld/trap-stairs-roeterseiland.jpg",
            title: "Study in Amsterdam Week 20 - 24 February",
            description:
              "Discover everything an international student needs to know about studying at the UvA.",
          },
          {
            image:
              "https://www.uva.nl/binaries/_ht_1674056829011/680x190-jpg/content/gallery/onderzoek/uva-corporate/impact-stories/de-slimme-stad-donker-2.png",
            title: "The UvA and the smart city",
            description:
              "Find out how our cities are becoming smarter every day. UvA researchers are examining the pitfalls and the potential.",
          },
          {
            image:
              "https://www.uva.nl/binaries/_ht_1674029772447/680x190-jpg/content/gallery/evenementen/2023/voorlichting/bachelorweek-vj-2023.jpg",
            title: "Bachelor's Week 17 - 25 March",
            description: "Discover your Bachelor's at the UvA.",
          },
        ].map((item, index) => (
          <CurrentCard key={index} {...item} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Current;
