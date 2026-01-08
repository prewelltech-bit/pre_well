import React from "react";
import "./OurTeam.css";
import { Reveal } from "../../components/animations";
import OurTeam from "../../jsonFiles/OurTeam.json";
const OurTeamBody = () => {
  return (
    <>
      <div className="our-team-container">
        <Reveal direction="up" className="our-team-header text-center my-8">
          <h1 className="our-team-title">Our Team</h1>
          <p classame="our-team-description">
            Meet the passionate individuals behind Prewell Digitech. Our team is
            dedicated to delivering innovative digital solutions that drive
            success for our clients.
          </p>
        </Reveal>
        <div className="team-members">
          <Reveal
            direction="up"
            stagger
            staggerDelay={0.08}
            className="services-grid-advanced"
          >
            {OurTeam.map((group) => {
              const peopleKey = Object.keys(group).find(
                (k) => k !== "id" && k !== "role"
              );
              const people = (peopleKey && group[peopleKey]) || [];
              return (
                <div
                  key={group.id}
                  className="flex justify-center align-center text-center flex-col items-center m-4 p-4 border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <h2> {group.role}</h2>
                  <div className="grid grid-cols-3 grid-rows-1 gap-4">
                    {people.map((person) => (
                      <div key={person.id} className="team-member m-4 p-4 col-span-1">
                        <div className=" border-2 border-gray-200 rounded-[50%] shadow-lg h-35 w-35 flex justify-center items-center overflow-hidden">
                          <img
                            src="/assets/images/person.jpg"
                            alt={person.name}
                            className="team-member-photo"
                            />
                        </div>
                        <h2 className="team-member-name">{person.name}</h2>
                        <p className="team-member-role">{person.role}</p>
                        <p className="team-member-role">{person.role}</p>
                      </div>
                    ))}
                    {people.length === 0 && (
                      <div className="col-span-3">No members found</div>
                    )}
                  </div>
                </div>
              );
            })}
          </Reveal>
          {/* <div className="flex justify-center align-center text-center flex-col items-center m-4 p-4 border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2> Graphic Designer</h2>
            <div className="grid grid-cols-3 grid-rows-1 gap-4">
              <div className="team-member m-4 p-4 col-span-1">
                <div className=" border-2 border-gray-200 rounded-[50%] shadow-lg h-35 w-35 flex justify-center items-center overflow-hidden">
                  <img
                    src="/assets/images/person.jpg"
                    alt="Member 1"
                    className="team-member-photo"
                  />
                </div>
                <h2 className="team-member-name">jatan</h2>
                <p className="team-member-role">Graphic Designer</p>
              </div>
              <div className="team-member m-4 p-4 col-span-1">
                <div className=" border-2 border-gray-200 rounded-[50%] shadow-lg h-35 w-35 flex justify-center items-center overflow-hidden">
                  <img
                    src="/assets/images/person.jpg"
                    alt="Member 1"
                    className="team-member-photo"
                  />
                </div>
                <h2 className="team-member-name">jatan</h2>
                <p className="team-member-role">Graphic Designer</p>
              </div>
              <div className="team-member m-4 p-4 col-span-1">
                <div className=" border-2 border-gray-200 rounded-[50%] shadow-lg h-35 w-35 flex justify-center items-center overflow-hidden">
                  <img
                    src="/assets/images/person.jpg"
                    alt="Member 1"
                    className="team-member-photo"
                  />
                </div>
                <h2 className="team-member-name">jatan</h2>
                <p className="team-member-role">Graphic Designer</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center align-center text-center flex-col items-center m-4 p-4 border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2> Graphic Designer</h2>
            <div className="grid grid-cols-3 grid-rows-1 gap-4">
              <div className="team-member m-4 p-4 col-span-1">
                <div className=" border-2 border-gray-200 rounded-[50%] shadow-lg h-35 w-35 flex justify-center items-center overflow-hidden">
                  <img
                    src="/assets/images/person.jpg"
                    alt="Member 1"
                    className="team-member-photo"
                  />
                </div>
                <h2 className="team-member-name">jatan</h2>
                <p className="team-member-role">Graphic Designer</p>
              </div>
              <div className="team-member m-4 p-4 col-span-1">
                <div className=" border-2 border-gray-200 rounded-[50%] shadow-lg h-35 w-35 flex justify-center items-center overflow-hidden">
                  <img
                    src="/assets/images/person.jpg"
                    alt="Member 1"
                    className="team-member-photo"
                  />
                </div>
                <h2 className="team-member-name">jatan</h2>
                <p className="team-member-role">Graphic Designer</p>
              </div>
              <div className="team-member m-4 p-4 col-span-1">
                <div className=" border-2 border-gray-200 rounded-[50%] shadow-lg h-35 w-35 flex justify-center items-center overflow-hidden">
                  <img
                    src="/assets/images/person.jpg"
                    alt="Member 1"
                    className="team-member-photo"
                  />
                </div>
                <h2 className="team-member-name">jatan</h2>
                <p className="team-member-role">Graphic Designer</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center align-center text-center flex-col items-center m-4 p-4 border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2> Graphic Designer</h2>
            <div className="grid grid-cols-3 grid-rows-1 gap-4">
              <div className="team-member m-4 p-4 col-span-1">
                <div className=" border-2 border-gray-200 rounded-[50%] shadow-lg h-35 w-35 flex justify-center items-center overflow-hidden">
                  <img
                    src="/assets/images/person.jpg"
                    alt="Member 1"
                    className="team-member-photo"
                  />
                </div>
                <h2 className="team-member-name">jatan</h2>
                <p className="team-member-role">Graphic Designer</p>
              </div>
              <div className="team-member m-4 p-4 col-span-1">
                <div className=" border-2 border-gray-200 rounded-[50%] shadow-lg h-35 w-35 flex justify-center items-center overflow-hidden">
                  <img
                    src="/assets/images/person.jpg"
                    alt="Member 1"
                    className="team-member-photo"
                  />
                </div>
                <h2 className="team-member-name">jatan</h2>
                <p className="team-member-role">Graphic Designer</p>
              </div>
              <div className="team-member m-4 p-4 col-span-1">
                <div className=" border-2 border-gray-200 rounded-[50%] shadow-lg h-35 w-35 flex justify-center items-center overflow-hidden">
                  <img
                    src="/assets/images/person.jpg"
                    alt="Member 1"
                    className="team-member-photo"
                  />
                </div>
                <h2 className="team-member-name">jatan</h2>
                <p className="team-member-role">Graphic Designer</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default OurTeamBody;
