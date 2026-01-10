import React, { useRef } from "react";
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
];

export default function Partner() {
  const swiperRef = useRef(null);

  return (
    <div className="w-full py-12 bg-white overflow-hidden">
      <h2 className="text-center text-2xl mb-10 font-bold text-gray-800">
        Trusted by Our Clients
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        speed={3000}   // Reduced for performance
        autoplay={{
          delay: 1500, // NOT 0
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="max-w-7xl mx-auto"
      >
        {clients.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center">
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-12 md:h-16 w-auto object-contain"
                loading="lazy"   // IMPORTANT
                decoding="async"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
