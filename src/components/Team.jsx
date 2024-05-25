import React from "react";
import { TextReveal } from "@/components/animation/TextReveal";
import { textReveal } from "@/lib/variants";
import OurTeamProfile from "./OurTeamProfile";
import logo from "../assets/logo.png";
import aura from "../assets/profile-teams/aura-hipster.jpeg";
import { ImLinkedin } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Team = () => {
  return (
    <div id='savvys-team' className='bg-transparent relative h-full'>
      <h1 className='text-left md:text-center font-bold text-[30px] text-purple-900 mx-5 py-10 '>
        <TextReveal variants={textReveal} text='Savvy Developer Teams' />
      </h1>
      <OurTeamProfile />

      <div className='bg-purple-500 opacity-50 w-[500px] h-[60px] xl:h-[200px] absolute -left-36 rounded-full -top-10 border-[15px] xl:border-[30px] border-purple-900 -z-20'></div>
      <div className='bg-transparent w-[100px] h-[100px] xl:w-[300px] xl:h-[300px] opacity-40 absolute right-0  rounded-full bottom-5 border-dashed border-[20px]  xl:border-[50px] border-purple-500 -z-20'></div>
    </div>
  );
};

export default Team;
