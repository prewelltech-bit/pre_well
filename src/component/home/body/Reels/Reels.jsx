// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// const clients = [
//   "/assets/logos/client-1.svg",
//   "/assets/logos/client-2.svg",
//   "/assets/logos/client-3.svg",
//   "/assets/logos/client-4.svg",
//   "/assets/logos/client-5.svg",
//   "/assets/logos/client-6.svg",
//   "/assets/logos/client-7.svg",
//   "/assets/logos/client-8.svg",
//   "/assets/logos/client-9.svg",
//   // "/assets/logos/client-10.svg"
//   // "/assets/logos/client-2.png",
//   // "/assets/logos/client-3.png",
//   // "/assets/logos/client-4.png",
//   // "/assets/logos/client-5.png",
//   // "/assets/logos/client-6.png",
//   // "/assets/logos/client-7.jpg",
//   // "/assets/logos/client-8.png",
//   // "/assets/logos/client-9.png",
// ];

// export default function Reels() {
//   const swiperRef = useRef(null);

//   return (
//     <div className="w-full py-12 bg-white overflow-hidden">
//       <h2 className="text-center text-2xl mb-10 font-bold text-gray-800">
//         Trusted by Our Clients
//       </h2>

//       <Swiper
//         modules={[Autoplay]}
//         spaceBetween={100}
//         slidesPerView={6}
//         loop={true}
//         speed={3000}   // Reduced for performance
//         autoplay={{
//           delay: 1500, // NOT 0
//           disableOnInteraction: false,
//         }}
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         breakpoints={{
//           640: { slidesPerView: 3 },
//           768: { slidesPerView: 4 },
//           1024: { slidesPerView: 6 },
//         }}
//         className="max-w-7xl mx-auto"
//       >
//         {clients.map((logo, index) => (
//           <SwiperSlide key={index}>
//             <div className="flex items-center justify-center border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-150">
//               <img
//                 src={logo}
//                 alt={`Client ${index + 1}`}
//                 className="h-12 md:h-16 w-auto object-contain"
//                 loading="lazy"   // IMPORTANT
//                 decoding="async"
//                 onError={(e) => (e.target.style.display = "none")}
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }


import React from 'react'

const Reels = () => {
  return (
    <>
    <h2 className='portfolio-section-title'>Reels Portfolio</h2>
    <div className='video-editing-portfolio-grid'>
        <div className='video-editing-portfolio-item'>
            <img src="/assets/portfolio/reel1.jpg" alt="Reel Project 1" />
            <h3>Social Media Reel</h3>
        </div>
    </div>
    </>
  )
}

export default Reels