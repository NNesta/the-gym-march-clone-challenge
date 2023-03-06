import React from "react";
import Wrapper from "../ui/Wrapper";
import NewsCard from "../ui/NewsCard";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const News = () => {
  return (
    <div className="bg-[#e6e6e6] w-full h-[710px] py-16">
      <div className="flex items-center w-full max-w-[1384px] mx-auto justify-between">
        <h1 className="text-[30px] font-semibold leading-12 px-6 flex-1">
          News
        </h1>
        <div className="flex items-center">
          <BsChevronLeft />
          <BsChevronRight />
        </div>
      </div>
      {/* <div className="w-full"> */}
      <div className="flex gap-4 overflow-x-scroll w-full scrollbar-hide">
        {[
          {
            image:
              "https://www.uva.nl/binaries/_ht_1677194284068/cardmedium/content/gallery/onderzoek/iop/nieuws/2023/20230219_teflon-wrijving_imgeng.png",
            title: "Teflon is so slippery because it slides on itself",
            description:
              "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...",
          },
          {
            image:
              "https://www.uva.nl/binaries/_ht_1676632421376/680x190-jpg/content/gallery/faculteiten-en-diensten/fmg/fmg-corporate-met-restricties/nieuws/rich-man.jpg",
            title: "The richest people don't turn out to be the smartest",
            description:
              "Are the highest-paid jobs with the highest prestige performed by the smartest people? No, say sociologists who used unique information about 59,000 men to uncover the connection between intelligence and wealth.",
          },
          {
            image:
              "https://www.uva.nl/binaries/_ht_1676282102189/cardmedium/content/gallery/faculteiten-en-diensten/uva-bureau-communicatie/persvoorlichting/2023/honeyforaging_bryndanvanpinxteren.jpg",
            title: "Why are our brains so huge?",
            description:
              "Why are human brains three times larger than those of our closest living relatives? A diverse, high-quality diet and a long childhood in which we learn complex ways to acquire and gather food could be a major ...",
          },
          {
            image:
              "https://www.uva.nl/binaries/_ht_1539164196421/cardmedium/content/gallery/faculteiten-en-diensten/restyling18-generiek-beeld/_monique-kooijmans-athenaeum-illustre.jpg",
            title: "Moratorium on research with Shell",
            description:
              "The UvA will not enter into research collaborations with Shell or similar companies for the time being. A discussion with students and staff needs to be concluded first, according to the Executive Board. In recent ...",
          },
          {
            image:
              "https://www.uva.nl/binaries/_ht_1675939518244/680x190-jpg/content/gallery/faculteiten-en-diensten/uva-bureau-communicatie/nieuws/2023/uva_fnwi_flaviadealmeidadias_ld_lr_20210413-4331.jpg",
            title:
              "International Day of Women and Girls in Science: why role models matter",
            description:
              "On 11 February, it’s the International Day of Women and Girls in Science. This day is dedicated to promoting full and equal access to and participation in science for everyone. Role models are an important way to ...",
          },
          {
            image:
              "https://www.uva.nl/binaries/_ht_1675766876631/680x190-jpg/content/gallery/faculteiten-en-diensten/fmg/fmg-corporate-met-restricties/nieuws/group-violence.jpg",
            title:
              "Political elites (sometimes) incite violence to strengthen group identity",
            description:
              "Using evidence from India political scientists from the University of Amsterdam and University College of London analyzed under what conditions political parties incite violence.",
          },
          {
            image:
              "https://www.uva.nl/binaries/_ht_1675692519877/cardmedium/content/gallery/onderzoek/iop/nieuws/2023/ijspegels_foto.png",
            title:
              "Investigation into Social Sciences whistleblower allegations",
            description:
              "A committee led by Carel Stolker, former rector magnificus and president of the Executive Board of Leiden University, will investigate whistleblower allegations from a Social Sciences lecturer at the UvA.",
          },
          {
            image:
              "https://www.uva.nl/binaries/_ht_1675160334954/680x190-jpg/content/gallery/onderzoek/hims/nieuws/plasticbottles_tonywebster_wikimediacommons.jpg",
            title: "Why icicles are rippled",
            description:
              "Winter is coming to an end; the last nights of below zero temperatures are here. In the morning, one still spots the occasional icicle on a gutter or car bumper. When you look at these icicles carefully, you may ...",
          },
          {
            image:
              "https://www.uva.nl/binaries/_ht_1539164196421/cardmedium/content/gallery/faculteiten-en-diensten/restyling18-generiek-beeld/_monique-kooijmans-athenaeum-illustre.jpg",
            title:
              "Consumers favour bio-based alternatives over traditional fossil-based plastic bottles",
            description:
              "When it comes to enhancing the sustainability of plastic beverage bottles, consumers are willing to pay a bonus for bio-based alternatives - the more so when the alternative is visually distinctive. This follows from ...",
          },
        ].map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default News;
