import React, { useState, useEffect } from "react";
import Link from "next/link";
import Wrapper from "./Wrapper";
import { IoSearchOutline } from "react-icons/io5";
import { BsSuitHeart } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [shrink, setShrink] = useState(false);
  const [showNav2, setShowNav2] = useState(true);
  const [show, setShow] = useState(true);
  useEffect(() => {
    const onScroll = () => {
      window.scrollY >= 300 ? setShrink(true) : setShrink(false);
      window.scrollY >= 400 ? setShowNav2(true) : setShowNav2(false);
    };
    window.addEventListener("scroll", onScroll);
  }, []);
  const [lastScroll, setLastScroll] = useState(0);
  const showNav = () => {
    if ((window.scrollY >= lastScroll) & (window.scrollY >= 400)) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScroll(window.scrollY);
  };
  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("scroll", showNav);
    }
    return () => {
      window.removeEventListener("scroll", showNav);
    };
  }, [lastScroll]);
  return (
    <div className="">
      <div
        className={`fixed top-0 inset-x-0 z-50 ${
          shrink ? "h-[59px" : "h-[84px]"
        } bg-white`}
      >
        <div className="  mx-auto max-w-[1400px]  px-2">
          <div className="flex flex-col lg:flex-row text-3xl items-center justify-between w-full duration-300">
            <div className={`${shrink ? "py-[9px]" : "py-[21px] "} px-2`}>
              {!shrink ? (
                <img
                  className="hidden lg:flex"
                  src="/assets/logo1.svg"
                  alt=""
                />
              ) : (
                <img
                  className="hidden lg:flex h-[50px]"
                  src="/assets/logo1s.svg"
                  alt=""
                />
              )}
            </div>
            <div className="flex items-center gap-4 ">
              <div className="flex items-center py w-[400px] h-[42px] border-2 pl-[42px] pr-3">
                <input
                  className="hidden lg:flex text-[16px] flex-1"
                  type="text"
                  placeholder="search..."
                  value=""
                />
                <img
                  className="h-[30px] w-10 object-contain border-l "
                  src="/assets/search.svg"
                  alt=""
                />
              </div>
              <Link
                className="hidden lg:flex items-center font-bold gap-[5px] leading-4 px-[4.8px] text-[16px]"
                href="compare"
              >
                <span> Compare programmes</span>
                <img src="/assets/heart.svg" alt="" />
              </Link>
              <span className="p-2 border border-pb-900">NL</span>
              <IoMenu className="text-white block lg:hidden bg-pb-900" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-pb-100  fixed  inset-x-0 z-40 ${
          shrink ? "top-[65px]" : "top-[84px]"
        } ${!show && "-translate-y-20"}`}
      >
        <div className="mx-auto max-w-[1400px] px-2">
          <ul className="lg:flex hidden gap-12 item-center h-full">
            {[
              {
                title: "Education",
                link: "education",
                data: [
                  { title: "Bachelors", link: "bachelors" },
                  { title: "Masters", link: "masters" },
                  {
                    title: "Professional development",
                    link: "professional",
                  },
                  { title: "Summer School", link: "summer" },
                  { title: "Open programmes", link: "open" },
                  { title: "Exchange", link: "exchange" },
                ],
              },
              {
                title: "Research",
                link: "research",
                data: [
                  {
                    title: "Research at the UvA",
                    link: "research",
                  },
                  { title: "PhD", link: "phd" },
                ],
              },
              {
                title: "News  Events",
                link: "news",
                data: [
                  { title: "News", link: "news" },
                  { title: "Events", link: "events" },
                  { title: "Press Office", link: "press" },
                  {
                    title: "Coronavirus information",
                    link: "coronavirus",
                  },
                  {
                    title: "Ukraine information and support",
                    link: "ukraine",
                  },
                ],
              },
              {
                title: "About the UvA",
                link: "about",
                data: [
                  { title: "About the University", link: "about" },
                  { title: "Alumni", link: "alumni" },
                  {
                    title: "Contact and locations",
                    link: "contact",
                  },
                  { title: "Organisation", link: "organisation" },
                  {
                    title: "Policy and regulations",
                    link: "policy",
                  },
                  { title: "Working at the UvA", link: "working" },
                ],
              },
              { title: "Library", link: "library" },
            ].map((item, index) => (
              <li
                className="pt-3 pb-[8.4px] leading-8 text-[20px] group relative"
                key={index}
              >
                <Link
                  className="group-hover:text-pr-500 h-full group-hover:border-b border-pr-500"
                  href={item.link}
                >
                  {item.title}
                </Link>
                {item.data && (
                  <div className="absolute pt-3 px-5 pb-4 bg-pb-100 hidden group-hover:block w-[300px]">
                    {item.data.map((element, index) => (
                      <div key={index}>{element.title}</div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
