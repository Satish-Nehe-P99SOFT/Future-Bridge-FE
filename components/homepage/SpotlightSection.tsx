"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CalendarIcon, ClockIcon } from "./icons";
const staticItems = [
  {
    id: 1,
    title: "Growing Role of Robots in Construction & Industrial Services",
    date: "2025-04-24",
    time: "4 PM",
    image: "/images/img1.png",
    shortDescription:
      "Explore the evolving world of construction and industrial service robotics in this webinar. We’ll discuss how the field has developed ove...",
    button: "Register Now",
    label: "Upcoming",
  },
  {
    id: 2,
    title: "FoodTech Trends Series – Valorizing the Unusable",
    date: "2025-04-15",
    time: "2 PM",
    image: "/images/img2.png",
    shortDescription:
      "Food and agricultural waste is being repurposed into functional ingredients, bio-based materials, and alternative proteins. Companies are...",
    button: "Register Now",
    label: "Upcoming",
  },
  {
    id: 3,
    title: "AI and Automation Transforming R&D",
    date: "2025-03-31",

    image: "/images/img3.png",
    shortDescription:
      "AI and automation are transforming how R&D functions—cutting inefficiencies, speeding up development, and unlocking capabilities that...",
    button: "Details Here >",
  },
  {
    id: 4,
    title: "De-Risking & Accelerating Innovation in the Chemicals Industry",
    date: "2025-03-28",

    image: "/images/img4.png",
    shortDescription:
      "A high-impact discussion featuring two industry thought leaders sharing practical solutions to break the innovation impasse...",
    button: "Register Now",
  },
];

const formatDateTime = (dateStr: string) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const formattedDate = new Date(dateStr).toLocaleDateString("en-GB", options);

  return formattedDate;
};

const SalesSpotlight = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">In the Spotlight</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staticItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative h-48 w-full bg-gray-200">
                {item.label && (
                  <span className="absolute top-0 left-0 bg-[#F4505F] text-white text-xs font-bold py-2 px-3  z-10">
                    {item.label}
                  </span>
                )}
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-gray-400">
                    No Image
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <p className="flex items-center gap-1 text-[#F4505F] border border-1 border-[#888888]/40 bg-transparent p-2 text-xs  font-bold w-fit mb-2">
                  <CalendarIcon />
                  {formatDateTime(item.date)}
                  <span className="text-[#F4505F]">|</span>
                  <ClockIcon />

                  {item.time && (
                    <span className="ml-1 text-[#F4505F] text-xs">{item.time} IST</span>
                  )}
                </p>
                <h2 className="text-[14px] font-semibold  flex-grow">{item.title}</h2>
                {item.shortDescription && (
                  <p className="text-[#888888] text-[14px] mb-4 line-clamp-4">
                    {item.shortDescription}
                  </p>
                )}
                <Link
                  href="#"
                  className="mt-auto w-fit inline-block bg-[#F4505F] text-white px-4 py-2  text-[15px] font-medium"
                >
                  {item.button}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/events"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="inline-block whitespace-nowrap border-2 border-[#F4505F] text-[#F4505F] hover:bg-[#F4505F] hover:text-[#ffffff] font-bold py-3 px-10 rounded text-[16px] transition duration-300 md:mt-8"
          >
            {isHovered ? (
              <span className="flex items-center gap-2">
                VIEW MORE <span className="text-white">{">"}</span>
              </span>
            ) : (
              "I VIEW MORE"
            )}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SalesSpotlight;
