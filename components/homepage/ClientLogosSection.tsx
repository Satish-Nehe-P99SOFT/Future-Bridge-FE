

"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const heading = "Our Clients";
const description =
  "Our long-standing clients include some of the world’s leading brands and forward-thinking corporations.";

const clientData = [
  { id: 1, logo: "/images/logo1.png" },
  { id: 2, logo: "/images/logo2.png" },
  { id: 3, logo: "/images/logo3.png" },
  { id: 4, logo: "/images/logo4.png" },
  { id: 5, logo: "/images/logo5.png" },
  { id: 6, logo: "/images/logo6.png" },
  { id: 7, logo: "/images/logo7.png" },
  { id: 8, logo: "/images/logo8.png" },
  { id: 9, logo: "/images/logo9.png" },
  { id: 10, logo: "/images/logo10.png" },
  { id: 11, logo: "/images/logo11.png" },
];

const ClientLogosSection = () => {
  return (
    <section className="py-16 bg-gray-50 px-6 relative px-18">
      <div className="container mx-auto">
        <h2 className=" text-[32px] md:text-[44px] font-bold text-center mb-4">{heading}</h2>
        <p className="text-center text-[18px] text-black mb-10 max-w-3xl mx-auto">
          {description}
        </p>

        {/* Navigation Arrows */}
        

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Navigation]}
          
          slidesPerView={2}
          spaceBetween={200}
          loop={true}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 6 },
          }}
        >
          {clientData.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center">
              <div className="flex justify-center items-center w-[150px] h-[60px]">
                <Image
                  src={item.logo}
                  alt={`Client Logo ${item.id}`}
                  width={120}
                  height={50}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientLogosSection;
