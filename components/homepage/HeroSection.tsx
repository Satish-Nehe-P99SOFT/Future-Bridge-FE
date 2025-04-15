"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Placeholder data - replace with actual data fetching later
const heroData = {
  heading: "The future is here",
  subHeading: "The opportunities are limitless",
  description: [
    "FutureBridge tracks and advises on the future of",
    "industries from a 1-to-25 year perspective",
  ],
  buttonText: " I READ MORE",
  buttonLink: "/about", // Link to about page for example
  backgroundImageUrl: "/images/hero-image-home.webp", // Correct path and extension
};

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative bg-gray-800 text-[#ffffff] px-24 py-10 md:p-20 md:py-20  flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {heroData.backgroundImageUrl && (
        <Image
          src={heroData.backgroundImageUrl}
          alt="Hero Background"
          fill
          quality={85}
          priority // Prioritize loading the hero image
          className="absolute inset-0 z-0 opacity-40 object-cover"
        />
      )}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center md:items-start md:text-left">

        <h1 className=" text-[26px] md:text-[44px] font-bold md:mb-4 whitespace-nowrap">
          {heroData.heading}
        </h1>
       <p className="text-[26px] md:text-[44px] font-semibold mb-6">
  <span className="block md:inline whitespace-nowrap">The opportunities are</span>{' '}
  <span className="block md:inline">limitless</span>
</p>
        <p className="text-[14px]  max-w-xs sm:max-w-md md:text-[24px] md:leading-relaxed md:max-w-2xl mb-8 mx-auto md:mx-0 text-center md:text-left">
  FutureBridge tracks and advises on the future of industries from a 1-to-25 year perspective.
</p>


        {/* <p className="text-[14px] md:text-[24px] mb-8 max-w-sm mx-auto md:mx-0leading-snug text-center md:text-left ">
          {heroData.description.map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </p> */}
        <Link
          href={heroData.buttonLink}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="inline-block whitespace-nowrap border-2 border-[#F4505F] text-[#F4505F] hover:bg-[#F4505F] hover:text-[#ffffff] font-bold py-3 px-10 rounded text-[16px] transition duration-300 md:mt-8"
        >
          {isHovered ? (
            <span className="flex items-center gap-2">
              READ MORE <span className="text-white">{">"}</span>
            </span>
          ) : (
            heroData.buttonText
          )}
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
