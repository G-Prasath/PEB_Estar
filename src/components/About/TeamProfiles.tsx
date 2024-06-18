import React from 'react'
import { TeamData } from '../../data/teamMemberData'
const TeamProfiles = () => {
  return (
    <div className="flex flex-wrap justify-center bg-teal-500 p-4">
      {TeamData.map((profile, index) => (
        <div key={index} className="w-full md:w-1/3 p-4 flex flex-col items-center">
          <img
            className="rounded-full w-32 h-32 object-cover"
            src={profile.imageUrl}
            alt={`Profile of ${profile.name}`}
          />
          <h2 className="text-white font-bold mt-4">{profile.name}</h2>
          <p className="text-white">{profile.position}</p>
        </div>
      ))}
    </div>
  )
}

export default TeamProfiles
