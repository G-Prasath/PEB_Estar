import React from "react";
import { TeamData } from "../../data/teamMemberData";
import { TeamProfiles } from "../../data/teamMemberData";
const Team = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-8">
        <h2 className="uppercase font-[600] text-center text-white text-[40px] my-10">TEAM</h2>

        <div>
          {TeamData.map((member, index) => (
            <div key={index} className="flex mb-10 flex-col md:flex-row items-center md:items-start md:justify-evenly space-y-8 md:space-y-0 md:space-x-8">
              <div className="w-[400px] h-auto  rounded-full overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col md:flex-col  md:align-middle  md:text-justify max-w-md">
                <h3 className="text-4xl font-bold">{member.name}</h3>
                <p className="text-lg italic mb-4">{member.position}</p>
                <p className="text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Jr Team */}
      <h2 className="uppercase font-[600] text-center text-white text-[40px] my-5">
        OUR TEAM MEMBERS
      </h2>

      <div className="flex flex-wrap justify-center bg-teal-500 p-4">
      
        {TeamProfiles.map((profile, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 p-4 flex flex-col items-center mb-10"
          >
            <img
              className="rounded-full object-cover"
              src={profile.imageUrl}
              alt={`Profile of ${profile.name}`}
            />
            <h2 className="text-white font-bold mt-4">{profile.name}</h2>
            <p className="text-white">{profile.position}</p>
          </div>
        ))}
      </div>

     
    </>
  );
};

export default Team;
