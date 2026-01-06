import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clients = [
  "/assets/logos/client-1.png",
  "/assets/logos/client-2.png",
  "/assets/logos/client-3.png",
  "/assets/logos/client-4.png",
  "/assets/logos/client-5.png",
  "/assets/logos/client-6.png",
  "/assets/logos/client-7.jpg",
  "/assets/logos/client-8.png",
  "/assets/logos/client-9.png",
  // "/assets/logos/client-5.png",
];

export default function Partener() {
  return (
    <div className="w-full py-12 bg-white">
      <h2 className="text-center text-2xl mb-8 font-bold mb-4 gradient-text">
        Trusted by Our Clients
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView={2}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        simulateTouch={true}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="max-w-6xl mx-auto"
      >
        {clients.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center">
              <img
                src={logo}
                alt="client logo"
                className="h-16 object-contain  hover:grayscale-0 transition duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

