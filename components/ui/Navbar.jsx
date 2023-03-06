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
  const [showUp, setShowUp] = useState(true);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    if (scroll) {
      window.scrollTo(100, 100);
    }
  }, [scroll]);
  useEffect(() => {
    const onScroll = () => {
      window.scrollY >= 300 ? setShrink(true) : setShrink(false);
      window.scrollY >= 400 ? setShowNav2(true) : setShowNav2(false);
      window.scrollY >= 1850 || window.scrollY <= 1000
        ? setShowUp(false)
        : setShowUp(true);
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
    <div className="w-full">
      <div
        className={`fixed top-0 inset-x-0 z-50 ${
          shrink ? "h-[59px" : "h-[84px]"
        } bg-white duration-300 ease-in-out`}
      >
        <div className="mx-auto w-full max-w-[1400px]  lg:px-2">
          <div className="flex flex-col lg:flex-row text-3xl items-center justify-between w-full duration-300 lg:shadow-none shadow-lg">
            <Link
              href="/"
              className={`${shrink ? "lg:py-[9px]" : "lg:py-[21px] "} lg:px-2`}
            >
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
            </Link>
            <div className="flex justify-between  items-center gap-4 ">
              <img
                className="lg:hidden flex h-[50px]"
                src="/assets/logo1s.svg"
                alt=""
              />
              <div className="flex items-center lg:w-[400px]  lg:border-2  lg:pr-3 lg:p-2 border lg:border-gray-400 border-pb-900">
                <input
                  className="hidden lg:flex text-[16px] flex-1 focus:outline-none"
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
                className=" lg:flex items-center font-bold gap-[5px] leading-4 px-[4.8px] text-[16px]"
                href="compare"
              >
                <span className="hidden lg:block"> Compare programmes</span>
                <img
                  className="hover:shadow-7xl"
                  src="/assets/heart.svg"
                  alt=""
                />
              </Link>
              <span className="p-2 border border-pb-900">NL</span>
              <IoMenu className="text-white block lg:hidden bg-pb-900" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-pb-100   fixed  inset-x-0 z-40 ${
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
                  { title: "Bachelors", link: "page1" },
                  { title: "Masters", link: "page2" },
                  {
                    title: "Professional development",
                    link: "page3",
                  },
                  { title: "Summer School", link: "page4" },
                  { title: "Open programmes", link: "page5" },
                  { title: "Exchange", link: "page1" },
                ],
              },
              {
                title: "Research",
                link: "research",
                data: [
                  {
                    title: "Research at the UvA",
                    link: "page1",
                  },
                  { title: "PhD", link: "page2" },
                ],
              },
              {
                title: "News  Events",
                link: "page3",
                data: [
                  { title: "News", link: "page4" },
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
                      <Link href={element.link} key={index}>
                        {element.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="fixed hidden lg:block -right-9 inset-y-0 my-auto w-[100px] h-8   bg-[#e6e6e6] -rotate-90  text-pb-900">
        <div className="flex items-center w-full h-full ">
          <img className="w-6 h-6" src="/assets/feedback.svg" alt="" />
          <h1 className="leading-[22.4px] ">feedback</h1>
        </div>
      </div>
      <div
        onClick={() => setScroll(true)}
        className={`py-[8.4px] fixed ${
          showUp ? "block" : "hidden"
        } right-16 bottom-8 border px-2 m-4 ml-4 bg-white`}
      >
        <img className="-rotate-90" src="/assets/chevron.svg" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
