import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CarouselTeam.css'; // We'll create this for custom styles
import OurTeam from '../../jsonFiles/OurTeam.json';

const CarouselTeam = () => {
  // Check if OurTeam is an array
  if (!Array.isArray(OurTeam)) {
    console.error('OurTeam data must be an array', OurTeam);
    return <div>Error: Invalid team data</div>;
  }

  // Flatten all team members from all groups into one array for the carousel
  const allMembers = OurTeam.flatMap(group => {
    const peopleKey = Object.keys(group).find(k => k !== 'id' && k !== 'role');
    return (peopleKey && group[peopleKey]) || [];
  });

  return (
    <div className="carousel-team-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="team-swiper"
      >
        {allMembers.map((person) => (
          <SwiperSlide key={person.id}>
            <div className="team-member-card">
              <div className="member-photo-container">
                <img
                  src="/assets/images/person.jpg"
                  alt={person.name}
                  className="member-photo"
                />
              </div>
              <h3 className="member-name">{person.name}</h3>
              <p className="member-role">{person.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselTeam;