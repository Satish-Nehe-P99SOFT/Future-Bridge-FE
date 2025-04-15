"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PerspectivesListData, StrapiMediaObject } from "@/lib/data"; // Adjust type import as needed
import { perspectiveItems as externalPerspectiveItems } from "@/public/data/Perspectives/perspectivesData"; // Import the external data


type PerspectivesSectionProps ={
  perspectivesData: PerspectivesListData | null;
}

// Placeholder for industry links/tabs shown on the homepage
const industries = [
  {
    name: "Chemicals & Natural Resources",
    slug: "chemicals-and-natural-resources",
  },
  { name: "Energy", slug: "energy" },
  { name: "Food & Nutrition", slug: "food-and-nutrition" },
  { name: "Home & Personal Care", slug: "home-and-personal-care" },
  { name: "Life Sciences", slug: "life-sciences" },
  { name: "Industrial Equipment", slug: "industrial-equipment" },
  { name: "Mobility", slug: "mobility" },
];

const PerspectivesSection = ({ perspectivesData }: PerspectivesSectionProps) => {
  // State to manage the selected industry tab
  const [selectedIndustry, setSelectedIndustry] = React.useState(industries[0].slug);
  const [expandedIndustry, setExpandedIndustry] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Check if window is mobile size on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Filter items based on selected industry from the external data
  const getFilteredItems = (industrySlug: string) => {
    const filtered = externalPerspectiveItems.filter((item) => item.industrySlug === industrySlug);
    return filtered.length > 0 ? filtered : [externalPerspectiveItems[0]];
  };

  // Get items for the currently selected industry
  const displayedItems = getFilteredItems(selectedIndustry);

  const handleIndustryClick = (slug: string) => {
    if (isMobile) {
      // On mobile, toggle expansion state
      setExpandedIndustry(expandedIndustry === slug ? null : slug);
    } else {
      // On desktop, just switch the selected industry
      setSelectedIndustry(slug);
    }
  };

  // Get the name of selected industry
  const selectedIndustryName =
    industries.find((ind) => ind.slug === selectedIndustry)?.name || "Select Industry";

  // Function to render the content for an industry
  const renderIndustryContent = (industrySlug: string) => {
    const items = getFilteredItems(industrySlug);

    return (
      <div>
        <div className="flex flex-wrap mx-5 mt-4 mb-6">
          {/* Featured item (larger) */}
          <div className="w-full md:w-1/2 p-4">
            <div className="relative h-64 mb-4 overflow-hidden rounded">
              <Image
                src={items[0].card1Image}
                alt={items[0].card1Title}
                fill
                objectFit="cover"
                className="rounded"
              />
            </div>
            {items[0].card1Type && items[0].card1Type.trim() !== "" ? (
              <p className="text-[#ffffff] mb-1 bg-[#858585] h-[22px] w-fit p-[4px] text-[11px] font-bold text-center rounded">
                {items[0].card1Type}
              </p>
            ) : (
              <p className="text-xs text-[#f94f5E] mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="inline mr-1"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M19 2h-14a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-14a3 3 0 0 0 -3 -3z" />
                </svg>
              </p>
            )}
            <Link
              href={`/perspectives/${items[0].slug}`}
              className="text-[#333333] font-bold text-2xl mb-3 block hover:text-[#f94f5E]"
            >
              {items[0].card1Title}
            </Link>
            <p className="text-lg mb-4 text-gray-700">{items[0].card1Description}</p>
            <div className="flex justify-between items-center">
              <p className=" font-bold">
                <span className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                    <path d="M12 7v5l3 3" />
                  </svg>
                </span>
                {items[0].card1ReadTime} Min Read
              </p>
              <Link
                href={`/perspectives/${items[0].slug}`}
                className="flex items-center text-[#f94f5E] font-medium text-[15px]"
              >
                Read More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-1"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10.52 2.614a2.095 2.095 0 0 1 2.835 -.117l.126 .117l7.905 7.905c.777 .777 .816 2.013 .117 2.836l-.117 .126l-7.905 7.905a2.094 2.094 0 0 1 -2.836 .117l-.126 -.117l-7.907 -7.906a2.096 2.096 0 0 1 -.115 -2.835l.117 -.126l7.905 -7.905zm5.969 9.535l.01 -.116l-.003 -.12l-.016 -.114l-.03 -.11l-.044 -.112l-.052 -.098l-.076 -.105l-.07 -.081l-3.5 -3.5l-.095 -.083a1 1 0 0 0 -1.226 0l-.094 .083l-.083 .094a1 1 0 0 0 0 1.226l.083 .094l1.792 1.793h-5.085l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h5.085l-1.792 1.793l-.083 .094a1 1 0 0 0 1.403 1.403l.094 -.083l3.5 -3.5l.097 -.112l.05 -.074l.037 -.067l.05 -.112l.023 -.076l.025 -.117z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Secondary items (smaller) */}
          <div className="w-full md:w-1/2 p-4">
            <div className="space-y-6 h-full flex flex-col justify-between">
              {/* Card 2 */}
              <div className="flex flex-col md:flex-row mb-4">
                <div className="w-full md:w-1/2 relative h-[240px] overflow-hidden rounded mb-3 md:mb-0">
                  <Image
                    src={items[0].card2image}
                    alt={items[0].card2Title}
                    fill
                    className="rounded"
                  />
                </div>
                <div className="w-full md:w-2/3 md:pl-4">
                  {items[0].card2Type && items[0].card2Type.trim() !== "" ? (
                    <p className="text-[#ffffff] mb-1 bg-[#858585] h-[22px] w-fit p-[4px] text-[11px] font-bold text-center rounded">
                      {items[0].card2Type}
                    </p>
                  ) : (
                    <p className="text-xs text-[#f94f5E] mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="inline mr-1"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19 2h-14a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-14a3 3 0 0 0 -3 -3z" />
                      </svg>
                    </p>
                  )}
                  <Link
                    href={`/perspectives/${items[0].slug}`}
                    className="text-[#333333] font-bold text-xl mb-2 block hover:text-[#f94f5E] line-clamp-2"
                  >
                    {items[0].card2Title}
                  </Link>
                  <p className="text-base text-gray-700 mb-2 line-clamp-2">
                    {items[0].card2Description}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="flex items-center text-sm font-bold">
                      <span className="mr-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="inline"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                          <path d="M12 7v5l3 3" />
                        </svg>
                      </span>
                      {items[0].card2ReadTime} Min Read
                    </p>
                    <Link
                      href={`/perspectives/${items[0].slug}`}
                      className="flex items-center text-[#f94f5E] font-medium text-[15px]"
                    >
                      Read More{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="ml-1"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10.52 2.614a2.095 2.095 0 0 1 2.835 -.117l.126 .117l7.905 7.905c.777 .777 .816 2.013 .117 2.836l-.117 .126l-7.905 7.905a2.094 2.094 0 0 1 -2.836 .117l-.126 -.117l-7.907 -7.906a2.096 2.096 0 0 1 -.115 -2.835l.117 -.126l7.905 -7.905zm5.969 9.535l.01 -.116l-.003 -.12l-.016 -.114l-.03 -.11l-.044 -.112l-.052 -.098l-.076 -.105l-.07 -.081l-3.5 -3.5l-.095 -.083a1 1 0 0 0 -1.226 0l-.094 .083l-.083 .094a1 1 0 0 0 0 1.226l.083 .094l1.792 1.793h-5.085l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h5.085l-1.792 1.793l-.083 .094a1 1 0 0 0 1.403 1.403l.094 -.083l3.5 -3.5l.097 -.112l.05 -.074l.037 -.067l.05 -.112l.023 -.076l.025 -.117z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 relative h-[240px] overflow-hidden rounded mb-3 md:mb-0">
                  <Image
                    src={items[0].card3Image}
                    alt={items[0].card3Title}
                    fill
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
                <div className="w-full md:w-2/3 md:pl-4">
                  {items[0].card3Type && items[0].card3Type.trim() !== "" ? (
                    <p className="text-[#ffffff] mb-1 bg-[#858585] h-[22px] w-fit p-[4px] text-[11px] font-bold text-center rounded">
                      {items[0].card3Type}
                    </p>
                  ) : (
                    <p className="text-xs text-[#f94f5E] mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="inline mr-1"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19 2h-14a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-14a3 3 0 0 0 -3 -3z" />
                      </svg>
                    </p>
                  )}

                  <Link
                    href={`/perspectives/${items[0].slug}`}
                    className="text-[#333333] font-bold text-xl mb-2 block hover:text-[#f94f5E] line-clamp-2"
                  >
                    {items[0].card3Title}
                  </Link>
                  <p className="text-lg text-gray-700 mb-2 line-clamp-2 ">
                    {items[0].cardDescription}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="flex items-center text-sm font-bold">
                      <span className="mr-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="inline"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                          <path d="M12 7v5l3 3" />
                        </svg>
                      </span>
                      {items[0].card3ReadTime} Min Read
                    </p>
                    <Link
                      href={`/perspectives/${items[0].slug}`}
                      className="flex items-center text-[#f94f5E] font-medium text-[15px]"
                    >
                      Read More{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="ml-1"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10.52 2.614a2.095 2.095 0 0 1 2.835 -.117l.126 .117l7.905 7.905c.777 .777 .816 2.013 .117 2.836l-.117 .126l-7.905 7.905a2.094 2.094 0 0 1 -2.836 .117l-.126 -.117l-7.907 -7.906a2.096 2.096 0 0 1 -.115 -2.835l.117 -.126l7.905 -7.905zm5.969 9.535l.01 -.116l-.003 -.12l-.016 -.114l-.03 -.11l-.044 -.112l-.052 -.098l-.076 -.105l-.07 -.081l-3.5 -3.5l-.095 -.083a1 1 0 0 0 -1.226 0l-.094 .083l-.083 .094a1 1 0 0 0 0 1.226l.083 .094l1.792 1.793h-5.085l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h5.085l-1.792 1.793l-.083 .094a1 1 0 0 0 1.403 1.403l.094 -.083l3.5 -3.5l.097 -.112l.05 -.074l.037 -.067l.05 -.112l.023 -.076l.025 -.117z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
            <Link
              href="/perspectives"
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
    );
  };

  // Render industry card with + icon
  const renderIndustryCard = (industry: (typeof industries)[0]) => {
    const isExpanded = expandedIndustry === industry.slug;

    return (
      <div key={industry.slug} className="mb-2">
        <div
          className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer
            ${isExpanded ? "bg-gray-50 border-[#f94f5E]" : "bg-white border-gray-200 hover:border-[#f94f5E]"}`}
          onClick={() => handleIndustryClick(industry.slug)}
        >
          <h3 className={`font-medium ${isExpanded ? "text-[#f94f5E]" : "text-[#333333]"}`}>
            {industry.name}
          </h3>
          <div
            className={`w-6 h-6 flex items-center justify-center text-xl transition-transform ${isExpanded ? "rotate-45 text-[#f94f5E]" : "text-gray-500"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>
        </div>

        {/* Expanded content */}
        {isExpanded && renderIndustryContent(industry.slug)}
      </div>
    );
  };

  return (
    <section className="py-16 bg-white font-sans">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Perspectives</h2>

        {/* Industry navigation */}
        {isMobile ? (
          <div className="mb-6">{industries.map((industry) => renderIndustryCard(industry))}</div>
        ) : (
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {industries.map((industry) => (
              <button
                key={industry.slug}
                onClick={() => handleIndustryClick(industry.slug)}
                className={`w-[150.72px] h-[86.67px] text-center transform transition-all duration-300 
                flex items-center justify-center px-3 pb-4 rounded font-normal
                text-[#858585] border-b-4 text-[18px] cursor-pointer
    ${
      selectedIndustry === industry.slug
        ? "border-[#f94f5E] text-[#f94f5E]"
        : "border-transparent hover:text-[#f94f5E] hover:border-[#f94f5E] hover:-translate-y-1"
    }`}
              >
                {industry.name}
              </button>
            ))}
          </div>
        )}

        {/* Content section - only show on desktop or if an industry is specifically expanded on mobile */}
        {!isMobile && renderIndustryContent(selectedIndustry)}
      </div>
    </section>
  );
};

export default PerspectivesSection;
