import React from "react";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const FooterCard = ({ title, links }) => {
  return (
    <div className="lg:border-none border-t border-white ">
      <div className="flex justify-between">
        <h1 className="leading-4 text-[16px] font-semibold mb-5">{title}</h1>
        <img src="/assets/chevron.svg" alt="" />
      </div>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link
              className="text-[14px] leading-[22.4px] pb-[14.4px] flex items-center"
              href={link.link}
            >
              {/* <img src="/assets/chevronw.svg" alt="" /> */}
              <FiChevronRight />
              <span>{link.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterCard;
