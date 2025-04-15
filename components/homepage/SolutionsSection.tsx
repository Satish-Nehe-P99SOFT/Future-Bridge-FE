"use client"; // Mark this component as a Client Component

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Import specific block type and nested types from central definition
import type {
  OurSolutionsBlock,
  FutureOfColumn,
  FutureOfIcon,
  SolutionDescriptionGroup,
  OurSolutionItem,
} from "@/types/blocks";
// Remove StrapiMediaObject import if not directly used here

// --- Remove local interface definitions ---
// interface FutureOfIcon { ... }
// interface FutureOfColumn { ... }
// interface SolutionItem { ... } // Renamed to OurSolutionItem in types/blocks.ts
// interface SolutionDescriptionGroup { ... }

// --- Update Props interface ---
interface OurSolutionsProps {
  block?: OurSolutionsBlock; // Use the imported type
}

const SolutionsSection: React.FC<OurSolutionsProps> = ({ block }) => {
  if (!block) {
    return null
  }
  const [isHovered, setIsHovered] = useState(false);
  const { heading, description, futureOfColum, ourSolutionDescription } = block;
  const [activeItem, setActiveItem] = useState<{
    index: number;
    sectionIndex: number;
  } | null>(null);
const [activeItem1, setActiveItem1] = useState<number | null>(null)

  // Section titles
  const sectionTitles = [
    "Discovery & Actionable Insights",
    "Positioning & Strategy",
    "Implementation & Driving Disruption",
  ];
  const sectiondes = [
    "Developing a future-proof business line; we help by answering your unknowns, challenging your view of what is possible and by identifying linkages of emerging technologies with existing & new markets",
    "Make Informed Selections. Develop Game Plans: We leverage deep rooted techno-commercial insights and work together in developing action plans to help you meet your strategic business objectives.",
    "Deliver business impact. We help our clients navigate uncertainties and assist in implementing technologies and business models to solve existing business challenges, address strategic growth objectives or be the disruptors in their markets.",
  ];
const sectionImages = [
    "/images/s7.png",
    "/images/s8.png",
    "/images/s9.png",
  ];
  const sidebarImages = [
    "/images/s1.png",
    "/images/s2.png",
    "/images/s3.png",
     "/images/s4.png",
    "/images/s5.png",
    "/images/s6.png",
  ];
  return (
    <section className="py-16 bg-[#f1f1f1] shadow-sm">
      <div className="container mx-auto px-18">
    <div className=" ">
      
        {heading && (
          <h2 className="text-[19px] md:text-[44px] font-bold text-black text-start mb-2 md:mb-8">
            {heading}
          </h2>
        )}
        {description && (
          <p
            className="  text-[12px] md:text-[18px] mx-auto text-start text-[#666666] mb-10"
             
          >
          {description}
        </p>
        )}

        {/* Render "Future Of" Icons - only for mobile view */}
        <div className="md:hidden mb-12 bg-white  shadow-md border">
          {futureOfColum && futureOfColum.futureOfIcons?.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-center text-gray-700 mb-6 mt-8">
                {futureOfColum.title || "Future of..."}
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-8">
                {futureOfColum.futureOfIcons.map((item, index) => {
                  const iconData = item.icon?.data?.attributes
                  console.log(iconData?.url,"iconData")
                  return(
                    <div key={index} className="flex flex-col items-center text-center w-24">
                      <Image
                        src={sidebarImages[index] || `Section ${index + 1}`}
                       
                        alt="image"
                        width={40}
                        height={40}
                        className="mb-1"
                      />
                      <span className="text-sm text-gray-600">{item.iconCaption}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* Main layout with sidebar and content - Use CSS Grid */}
        <div className="md:grid md:grid-cols-[auto_1fr] gap-8">
          {/* Left sidebar with icons */}
          <div className="hidden md:block md:w-48 lg:w-56 shrink-0 relative">
            {/* Red vertical line on the left of sidebar */}
            {/* <div className="absolute top-0 left-0 w-1 h-full bg-[#888888] rounded"></div> */}

            <div className="bg-white  shadow-md  border border-[#888888] overflow-hidden h-full flex flex-col text-black ">
              <div className="py-4 px-3 text-center">
                <h3 className="text-[28px] font-bold ">Future of</h3>
                
              </div>

              {futureOfColum &&
                futureOfColum.futureOfIcons?.length > 0 &&
                futureOfColum.futureOfIcons.map((item, index) => {
                  // Calculate approximate vertical center for each sidebar item
                  // This assumes roughly equal height for each item. Adjust if needed.
                  const itemHeight = 100 / futureOfColum.futureOfIcons.length;
                  const verticalCenter = `${itemHeight * index + itemHeight / 2}%`;

                 const iconData= item.icon?.data?.attributes
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center py-5 px-4  relative  " // Added relative for line positioning
                    >
                      {/* Dotted line from item to right edge */}
                      <div
                        className="hidden  md:block absolute h-0 border-t border-dashed border-red-300 w-4"
                        style={{ right: "-1rem", top: "50%" }}
                      ></div>

                      {/* Icon */}
                      
                      {/* Caption */}
                       <Image
                          src= {sidebarImages[index] || `Section ${index + 1}`}
                          alt="image"
                          width={ 40}
                          height={ 40}
                          className="mb-3 opacity-70"
                        />
                      <span className="text-[16px]  font-bold text-black">{item.iconCaption}</span>
                      
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Main content area spanning grid rows */}
          <div className="mt-8 md:mt-0 relative">
            {/* Define grid rows - let them size automatically */}
            <div
              className="relative" // Remove h-full
              style={{
                display: "grid",
                gridTemplateRows: `repeat(${ourSolutionDescription?.length || 1}, auto)`, // Use 'auto' rows
                rowGap: "3rem", // Add row gap for spacing instead of margin
              }}
            >
              {/* Vertical connecting line spanning all rows - Adjust top/bottom */}
              {/* Adjust calculation to account for row gaps */}
              {/* <div
                className="hidden md:block absolute w-0.5 bg-red-500"
                style={{
                  left: "-1.5rem",
                  top: "1.25rem", // Start at first connector
                  // Approximate end calculation - might need further tuning
                  bottom: `calc(${0.1 * (ourSolutionDescription?.length || 1 - 1)}rem + 1.25rem)`,
                }}
              ></div> */}

              {/* Map through sections and place them in consecutive grid rows */}
              {ourSolutionDescription?.map((section, sectionIndex) => {
                // Place in rows 1, 2, 3, ...
                const gridRowStart = sectionIndex + 1;

                return (
                  <div
                    key={sectionIndex}
                    className="relative md:pl-8 " // Remove bottom margin
                    style={{ gridRow: `${gridRowStart} / span 1` }} // Place in consecutive grid rows
                  >
                    {/* Horizontal connector line */}
                    <div
                      className="hidden md:block absolute w-13 h-1 bg-[#888888]/40 mt-20"
                      style={{ left: "-1.5rem", top: "1.25rem" }}
                    ></div>

                    {/* Section row with heading and dots */}
                    <div className=" justify-center items-center flex flex-col md:flex-row  text-center">
                      
                      <div
  className="relative group mx-auto justify-center items-center" // Make container relative for positioning the tooltip
  onMouseEnter={() => setActiveItem1(sectionIndex)}
  onMouseLeave={() => setActiveItem1(null)}
>
  <div className="bg-white  shadow-md p-6 border-2 border-[#888888]/40 mb-8 md:mb-4 md:mr-8 md:w-40 md:h-50 w-60 h-10 md:flex-shrink-0 z-10 text-center justify-center items-center flex md:flex-col">
    <Image
      src={sectionImages[sectionIndex] || `Section ${sectionIndex + 1}`}
      alt="image"
      width={40}
      height={40}
      className="mb-3 opacity-70"
    />
    <h3 className="text-[16px] font-bold text-black text-center">
      {sectionTitles[sectionIndex] || `Section ${sectionIndex + 1}`}
    </h3>
  </div>

  {/* Tooltip */}
  {activeItem1 === sectionIndex && (
    <div className="absolute bottom top md:top-5  z-30 bg-white  shadow-lg p-4  w-60 md:w-90 border border-gray-200">
      {/* Close button */}
      <button
        onClick={() => setActiveItem1(null)}
        className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold focus:outline-none"
        aria-label="Close"
      >
        &times;
      </button>

      <h5 className="font-bold text-black mb-2 text-[18px] text-left">
        {sectionTitles[sectionIndex]}
      </h5>
      <p
        className="prose prose-sm text-black  text-[18px] text-left">
        {sectiondes[sectionIndex]}
                            
                            </p>
    </div>
  )}
</div>


                      {/* Horizontal dots section */}
                      <div className="flex-1 relative mt-4 md:mt-18">
                        {/* Horizontal line connecting all dots */}
                        <div className="hidden md:block h-1 bg-[#888888]/40 absolute top-2.5 left-0 right-0 z-10"></div>

                        {/* Items container */}
                        <div className="flex flex-col md:flex-row w-full">
                          {section.ourSolutionItems.map((item, index) => (
                            
                            <div
                              key={index}
                              className="relative flex flex-row md:flex-col items-start md:items-center md:justify-start py-2 md:py-0"
                              style={{
                                flex: `0 0 ${100 / section.ourSolutionItems.length}%`,
                                maxWidth: `${100 / section.ourSolutionItems.length}%`,
                              }}
                            >
                              {/* Red Dot */}
                              
                              <button
                                className="w-8 h-8 bg-white border-2 border-red-500 hover:bg-red-100 transition-colors relative z-20 flex-shrink-0 mr-10 md:mr-3 md:mr-0 md:mb-3"
                                onMouseEnter={() => setActiveItem({ index, sectionIndex })}
                                onMouseLeave={() => setActiveItem(null)}
                              >
                                <div className="w-5 h-5 bg-red-500 m-auto"></div>
                                </button>
 <p className="text-[14px] font-blod  md:w-full text-black  ">
                                {item.title}
                              </p>
                              {/* Title below dot */}
                             

                              {/* Hover Details Popup */}
                              
                              {activeItem?.index === index &&
  activeItem?.sectionIndex === sectionIndex && (
    <div className="absolute md:left-1/2 md:-translate-x-1/2 top-6 md:top-8 top md:top-5 z-30 bg-white  shadow-lg p-4  w-60 md:w-84 border border-gray-200">
      {/* Close button in top-right corner */}
      <button
        onClick={() => setActiveItem(null)}
        className="absolute top-2 right-2 text-black hover:text-red-500 text-xl font-bold focus:outline-none"
        aria-label="Close"
      >
        &times;
      </button>

      <h5 className="font-bold  text-black text-[18px] mb-2 text-left">
        {item.title}
      </h5>
      <div
        className="prose prose-sm text-black text-[18px] text-left"
        dangerouslySetInnerHTML={{
          __html: item.description,
        }}
      />
    </div>
)}

                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
<div className="text-center justify-center items-center mt-8">
          <Link
            href="/events"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="inline-block whitespace-nowrap border-2 border-[#F4505F] text-[#F4505F] hover:bg-[#F4505F] hover:text-[#ffffff] font-bold py-3 px-2  md:px-10 rounded text-[12px] md:text-[16px] transition duration-300 md:mt-8"
          >
            {isHovered ? (
              <span className="flex items-center gap-2">
                READ MORE ABOUT OUR SOLUTIONS <span className="text-white">{">"}</span>
              </span>
            ) : (
              "I READ MORE ABOUT OUR SOLUTIONS"
            )}
          </Link>
        </div>
      {/* Add global styles for the nested lists in hover details */}
      <style jsx global>{`
        .prose ul {
          padding-left: 1.25rem;
          margin-top: 0.5rem;
        }
        .prose li {
          margin-bottom: 0.25rem;
          list-style-type: disc;
        }
      `}</style>
      </div>
      </section>
  );
};

export default SolutionsSection;
