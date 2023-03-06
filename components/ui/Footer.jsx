import React from "react";
import Link from "next/link";
import Wrapper from "./Wrapper";
import FooterCard from "./FooterCard";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-pb-800 text-white pt-9">
      <Wrapper>
        <div className="flex justify-between">
          <img
            className="h-[35px] w-[317px] object-contain"
            src="/assets/logo2.svg"
            alt=""
          />
          <div className="py-[8.4px] hidden lg:block  px-2 m-4 ml-4 bg-white">
            <img className="-rotate-90" src="/assets/chevron.svg" alt="" />
          </div>
        </div>
        <div className="grid lg:grid-cols-4">
          {[
            {
              title: "Education & research",
              links: [
                {
                  title: "Bachelors programmes",
                  link: "bachelors",
                },
                { title: "Minors", link: "minors" },
                { title: "Masters programmes", link: "masters" },
                {
                  title: "Professional development",
                  link: "professional",
                },
                { title: "Exchange", link: "exchange" },
                { title: "Summer School", link: "summer" },
                { title: "PhD at UvA", link: "phd" },
                { title: "Research at UvA", link: "research" },
              ],
            },
            {
              title: "Go to",
              links: [
                {
                  title: "Webmail for UvA staff",
                  link: "webmail",
                },
                {
                  title: "Webmail UvA students",
                  link: "webmail",
                },
                { title: "Library", link: "library" },
                { title: "Canvas", link: "canvas" },
                { title: "SIS", link: "sis" },
                { title: "Timetable", link: "timetable" },
                { title: "Course Catalogue", link: "course" },
                { title: "Vacancies", link: "vacancies" },
                {
                  title: "UvAshopnl Merchandise store",
                  link: "uvashopnl",
                },
              ],
            },
            {
              title: "Information for",
              links: [
                {
                  title: "Prospective students",
                  link: "prospective",
                },
                { title: "Current students", link: "current" },
                { title: "Staff", link: "staff" },
                { title: "Journalists", link: "journalists" },
                { title: "Alumni", link: "alumni" },
                { title: "Donors", link: "donors" },
                { title: "Employers", link: "employers" },
                { title: "External suppliers", link: "external" },
              ],
            },
            {
              title: "Contact",
              links: [
                { title: "Contact information", link: "contact" },
                { title: "Locations", link: "locations" },
                {
                  title: "Contact Student Services",
                  link: "contact",
                },
                {
                  title: "The UvA and social media",
                  link: "the",
                },
              ],
            },
          ].map((item, index) => (
            <FooterCard key={index} {...item} />
          ))}
        </div>
      </Wrapper>
      <hr className="w-full h-[1px] bg-white my-8" />
      <Wrapper>
        <div className="flex lg:flex-row flex-col justify-between gap-8 items-center pb-4">
          <div className="flex  flex-col lg:flex-row items-center gap-6 order-2 lg:order-1">
            <h6>Copyright UvA 2023</h6>
            <ul className="flex  items-center gap-8">
              {[
                { title: "About this site", link: "about" },
                { title: "Privacy", link: "privacy" },
                { title: "Cookie settings", link: "cookie" },
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-6 order-1 lg:order-2">
            <h6>Follow UvA on social media</h6>
            <div className="flex items-center gap-4">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <img key={index} src={`assets/media${item}.svg`} alt="" />
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
