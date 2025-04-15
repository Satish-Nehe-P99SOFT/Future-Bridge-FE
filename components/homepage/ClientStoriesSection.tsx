"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const staticItems = [
  {
    id: 1,
    title: "Walter Vermeiren",
    image: "/images/client1.png",
    shortDescription: "Head of Technology & Scientific Intelligence",
    logo: "/images/airbus.png",
  },
  {
    id: 2,
    title: "Jean Botti",
    image: "/images/client2.png",
    shortDescription: "Ex CTO - Airbus",
    logo: "/images/total.png",
  },
  {
    id: 3,
    title: "Walter Vermeiren",
    image: "/images/client1.png",
    shortDescription: "Head of Technology & Scientific Intelligence",
    logo: "/images/airbus.png",
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

const ClientStoriesSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="py-16 bg-[#ffffff] shadow-sm">
      <div className="container mx-auto md:px-18 px-8">
        <h2 className=" text-[28px] md:text-[32px] font-bold text-center mb-8 whitespace-nowrap">Client Success Stories</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {staticItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative h-48 w-full bg-gray-200">
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

              <div className="p-2 flex flex-col flex-grow">
                <div className="p-2 flex flex-col flex-grow">
                  <div className="flex items-start gap-4">
                    {item.logo && (
                      <div className="w-26 h-16 flex-shrink-0">
                        <Image
                          src={item.logo}
                          alt={`${item.title} logo`}
                          width={104}
                          height={64}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    )}

                    <div className="flex flex-col justify-center">
                      <h3 className="text-[18px] font-semibold text-gray-800">{item.title}</h3>
                      {item.shortDescription && (
                        <p className="text-[#888888] text-[16px] line-clamp-4">
                          {item.shortDescription}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
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

export default ClientStoriesSection;
