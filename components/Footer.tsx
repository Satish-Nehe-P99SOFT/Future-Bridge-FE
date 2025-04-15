"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    getToKnowUs: false,
    solutions: false,
    industries: false,
    perspectives: false,
    needHelp: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <footer className="bg-black text-gray-300 ">
      <div className="text-white">
        {/* Upper Footer Section - Links - Ensure flex flex-col layout */}
        <div className="flex lg:flex-row flex-col lg:gap-8 container mx-auto px-6  pt-10">
          {/** FutureBridge Information Section */}
          <div className="mb-8">
            <h5 className="text-lg text-white mb-4  w-max text-[25px]">FutureBridge</h5>
            <p className="lg:w-60 text-sm]">
              FutureBridge tracks and advises on the future of industries from a 1-to-25 year
              perspective.
            </p>
            <p>Follow us on</p>
            <div className="flex items-center gap-4 mt-2">
              <Link href="#">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 self-center mt-2"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5.5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </Link>
              <Link href="#" className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 self-center "
                >
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4V14.4c0-2.3-.04-5.2-3.2-5.2-3.2 0-3.7 2.5-3.7 5V24h-4V8z" />
                </svg>
              </Link>
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 mt-2"
                >
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.3 1.1.7 1.5 1.2s.9 1 .9 1.6c.2.6.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.3.6-.7 1.1-1.2 1.5s-1 .9-1.6.9c-.6.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.3-1.1-.7-1.5-1.2s-.9-1-.9-1.6c-.2-.6-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.3-.6.7-1.1 1.2-1.5S5 2.5 5.6 2.3c.6-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 0 5.6 0 4.5.2 3.7.6c-.9.4-1.6 1-2.3 1.7C.7 3.1.2 3.9 0 4.9.2 5.9 0 7 0 8.3 0 9.7 0 10.1 0 12s0 2.3.1 3.7c.1 1.2.2 2.2.6 3.3.4.9 1 1.6 1.7 2.3s1.4 1.2 2.3 1.6c1.1.4 2.1.5 3.3.6 1.4.1 1.8.1 3.7.1s2.3 0 3.7-.1c1.2-.1 2.2-.2 3.3-.6.9-.4 1.6-1 2.3-1.6s1.2-1.4 1.6-2.3c.4-1.1.5-2.1.6-3.3.1-1.4.1-1.8.1-3.7s0-2.3-.1-3.7c-.1-1.2-.2-2.2-.6-3.3-.4-.9-1-1.6-1.6-2.3s-1.4-1.2-2.3-1.6C19.3.2 18.3.1 17.1 0 15.7 0 15.3 0 12 0zM12 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8.1 4 4 0 010 8.1zm6.4-11.4a1.5 1.5 0 11-3-.1 1.5 1.5 0 013 .1z" />
                </svg>
              </Link>
            </div>
          </div>
          {/* Get to Know Us */}
          <div className="mb-8 text-sm">
            <button
              onClick={() => toggleSection("getToKnowUs")}
              className="w-full flex justify-between items-center text-left lg:pointer-events-none"
            >
              <h5 className="text-lg font-semibold text-white mb-4 lg:mb-4 w-max">
                Get to Know Us
              </h5>
              <span className="lg:hidden">
                {openSections.getToKnowUs ? (
                  <ChevronUpIcon className="h-5 w-5 text-white" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-white" />
                )}
              </span>
            </button>
            <ul
              className={`${
                openSections.getToKnowUs ? "block" : "hidden"
              } lg:block mt-2 lg:mt-0 space-y-2`}
            >
              <li className="mb-2">
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/events" className="hover:text-white">
                  Events
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/in-the-media" className="hover:text-white">
                  In the Media
                </Link>
              </li>
              <li className="mb-2">
                <span className="cursor-pointer hover:text-white">Careers</span>
              </li>
            </ul>
          </div>
          {/* Solutions */}
          <div className="mb-8 text-sm">
            <button
              onClick={() => toggleSection("solutions")}
              className="w-full flex justify-between items-center text-left lg:pointer-events-none"
            >
              <h5 className="text-lg font-semibold text-white mb-4 lg:mb-4 w-max">Solutions</h5>
              <span className="lg:hidden">
                {openSections.solutions ? (
                  <ChevronUpIcon className="h-5 w-5 text-white" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-white" />
                )}
              </span>
            </button>
            <ul
              className={`${
                openSections.solutions ? "block" : "hidden"
              } lg:block mt-2 lg:mt-0 space-y-2`}
            >
              <li className="mb-2">
                <Link href="/solutions" className="hover:text-white">
                  Overview
                </Link>
              </li>
              <li className="mb-2">
                <span className="cursor-pointer hover:text-white">
                  Industry & Technology Platforms
                </span>
              </li>
              <li className="mb-2">
                <span className="cursor-pointer hover:text-white">
                  Business Functions We Work For
                </span>
              </li>
            </ul>
          </div>
          {/* Industries */}
          <div className="mb-8 text-sm">
            <button
              onClick={() => toggleSection("industries")}
              className="w-full flex justify-between items-center text-left lg:pointer-events-none"
            >
              <h5 className="text-lg font-semibold text-white mb-4 lg:mb-4">Industries</h5>
              <span className="lg:hidden">
                {openSections.industries ? (
                  <ChevronUpIcon className="h-5 w-5 text-white" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-white" />
                )}
              </span>
            </button>
            <ul
              className={`${
                openSections.industries ? "block" : "hidden"
              } lg:block mt-2 lg:mt-0 space-y-2`}
            >
              <li className="mb-2">
                <Link href="/industry/chemicals-and-natural-resources" className="hover:text-white">
                  Chemicals & Natural Resources
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/industry/energy" className="hover:text-white">
                  Energy
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/industry/food-and-nutrition" className="hover:text-white">
                  Food & Nutrition
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/industry/home-and-personal-care" className="hover:text-white">
                  Home & Personal Care
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/industry/industrial-equipment" className="hover:text-white">
                  Industrial Equipment
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/industry/life-sciences" className="hover:text-white">
                  Life Sciences
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/industry/mobility" className="hover:text-white">
                  Mobility
                </Link>
              </li>
            </ul>
          </div>
          {/* Perspectives Section - Now a direct child */}
          <div className="mb-8 text-sm">
            <button
              onClick={() => toggleSection("perspectives")}
              className="w-full flex justify-between items-center text-left lg:pointer-events-none"
            >
              <h5 className="text-lg font-semibold text-white mb-4 lg:mb-4">Perspectives</h5>
              <span className="lg:hidden">
                {openSections.perspectives ? (
                  <ChevronUpIcon className="h-5 w-5 text-white" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-white" />
                )}
              </span>
            </button>
            <ul
              className={`${
                openSections.perspectives ? "block" : "hidden"
              } lg:block mt-2 lg:mt-0 space-y-2`}
            >
              <li className="mb-2">
                <Link href="/perspectives" className="hover:text-white">
                  By Industry
                </Link>
              </li>
              <li className="mb-2">
                <span className="cursor-pointer hover:text-white">By Strategic Growth Fields</span>
              </li>
            </ul>
          </div>
          {/* Need Help? Section - Now a direct child */}
          <div className="mb-8 text-sm">
            <button
              onClick={() => toggleSection("needHelp")}
              className="w-full flex justify-between items-center text-left lg:pointer-events-none"
            >
              <h5 className="text-lg font-semibold text-white mb-4 lg:mb-4 w-max">Need Help?</h5>
              <span className="lg:hidden">
                {openSections.needHelp ? (
                  <ChevronUpIcon className="h-5 w-5 text-white" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-white" />
                )}
              </span>
            </button>
            <ul
              className={`${
                openSections.needHelp ? "block" : "hidden"
              } lg:block mt-2 lg:mt-0 space-y-2`}
            >
              <li className="mb-2">
                <span className="cursor-pointer hover:text-white">Contact Us</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}

        {/* Lower Footer Section - Copyright & Legal */}
        {/* Full width footer section */}
        <div className="bg-neutral-800 w-full text-white">
          <div className=" mx-auto px-8 lg:px-20 py-6 flex flex-col gap:20 lg:flex-row justify-between items-center text-sm">
            {/* Footer Links */}
            <div className="flex flex-wrap justify-center space-x-6 mb-4 ml-7 lg:mb-0 text-sm'">
              <span className="cursor-pointer hover:text-white">Terms of Use</span>
              <span className="cursor-pointer hover:text-white">Privacy Policy</span>
              <span className="cursor-pointer hover:text-white">Cookie Policy</span>
            </div>

            {/* Footer Text */}
            <div className="text-center lg:text-left text-sm px-4 lg:px-0 lg:w-1/2">
              © {new Date().getFullYear()} Cheers Interactive (India) Private Limited. All rights
              reserved. FutureBridge® is{" "}
              <span className="whitespace-normal font-semibold">
                a registered trademark of Cheers Interactive (India) Private Limited.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
