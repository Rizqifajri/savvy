import React from "react";
import about from "../assets/about-savvy.png";

const AboutSavvy = () => {
  return (
    <section id="about" className="py-24">
      <div className='grid grid-cols-1 sm:grid-cols-2 justify-center items-center lg:mx-56'>
        <img className="object-contain w-60 sm:w-80 lg:w-[600px] mx-auto" src={about} alt='' />
        <div className="flex">
          <span className='hidden sm:flex w-0.5 h-[35vh] bg-gray-200 mx-auto'></span>
        <div className="flex flex-col mx-5 justify-center  ">
          <h1 className='font-bold text-purple-900 text-[30px] lg:text-[40px]'>About Savvy</h1>
          <p className="font-medium text-gray-800 text-[12px] lg:text-[16px] pt-2 text-left">
          A financial management app designed to give you complete control over your finances. With intuitive transaction logging, organized savings, and powerful financial management tools, Savvy is here to help you achieve your financial goals more easily.
          </p>
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutSavvy;
