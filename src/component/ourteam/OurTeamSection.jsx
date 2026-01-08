import React from 'react';
import './OurTeamSection.css';
import { Reveal } from '../../components/animations';
import teamMembers from '../../jsonFiles/OurTeam.json';

const OurTeamSection = () => {
    const shapes = ['shape-1', 'shape-2', 'shape-3'];

    return (
        <>
            <Reveal
                direction="up"
                stagger
                staggerDelay={0.08}
            >
                <div className="team-container flex justify-center items-center flex-col px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
                    <Reveal direction="up" className="our-team-header text-center my-8">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 md:mb-6 gradient-text">
                            Our Team
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl text-gray-950 mx-auto">
                            Meet the passionate individuals behind Prewell Digitech. Our team is
                            dedicated to delivering innovative digital solutions that drive
                            success for our clients.
                        </p>
                    </Reveal>
                    {/* <h2 className="main-title">Our People</h2> */}
                    <div className="team-grid">
                        {teamMembers.map((member, index) => {
                            // const peopleKey = Object.keys(member).find(
                            //     (k) => k !== "id" && k !== "role"
                            // );
                            const currentShape = shapes[index % shapes.length];
                            return (
                                <div key={index} className="team-card">
                                    <div className="image-wrapper">
                                        <div className={`blob-bg ${currentShape}`}></div>

                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className={`member-img ${currentShape}`}
                                        />
                                    </div>
                                    <h3 className="name text-lg sm:text-lg md:text-xl lg:text-2xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-stone-800">{member.name}</h3>
                                    <p className="role">{member.role}</p>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </Reveal>
        </>
    );
};

export default OurTeamSection;