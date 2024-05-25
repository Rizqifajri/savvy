import React from "react";
import { ImLinkedin } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { team } from "@/data/data.team";
import Motion from "./animation/Motion";
import { opacityIn } from "@/lib/variants";

const OurTeamProfile = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-3 justify-center w-fit mx-auto items-center gap-10 pb-24'>
      {/* {team.map((profile, index) => (
        <div
          key={index}
          className='flex bg-gradient-to-r from-transparent to-purple-200 p-4 rounded-full w-full md:w-[500px] mx-auto'
        >
          <img
            className=' w-[150px] h-[150px] object-cover rounded-full'
            src={profile.img}
            alt=''
          />
          <div className='ml-5 flex flex-col justify-center'>
            <h1 className='font-bold text-[24px]'>{profile.name}</h1>
            <p>{profile.role}</p>
            <svg className='bg-gradient-to-r from-purple-800 to-transparent w-full h-0.5 rounded-full'></svg>
            <div className='flex gap-2 mt-2'>
              <FaGithub fill="purple"  className="w-5 h-5 cursor-pointer hover:scale-110 transition-all"/>
              <RiInstagramFill fill="purple" className="w-5 h-5 cursor-pointer hover:scale-110 transition-all"/>
              <ImLinkedin fill="purple" className="w-5 h-5 cursor-pointer hover:scale-110 transition-all"/>
            </div>
          </div>
        </div>
      ))} */}
      {team.map((profile, index) => (
        <Motion variants={opacityIn} custom={index}>
          <div key={index} className='flex mx-auto gap-2 justify-center  '>
            <div className='flex flex-col  gap-2 mt-28'>
              <FaGithub
                fill='purple'
                className='w-5 h-5 cursor-pointer hover:scale-110 transition-all'
              />
              <RiInstagramFill
                fill='purple'
                className='w-5 h-5 cursor-pointer hover:scale-110 transition-all'
              />
              <ImLinkedin
                fill='purple'
                className='w-5 h-5 cursor-pointer hover:scale-110 transition-all'
              />
            </div>
            <div>
              <img
                className='border-4 border-purple-200 p-2 border-dashed w-[200px] h-[200px] object-cover rounded-lg'
                src={profile.img}
                alt=''
              />
              <h1 className='font-bold text-purple-800 text-sm'>
                {profile.name} /
                <span className='text-[12px] font-normal'> {profile.role}</span>
              </h1>
            </div>
          </div>
        </Motion>
      ))}
    </section>
  );
};

export default OurTeamProfile;
