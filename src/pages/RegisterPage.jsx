import CardSignUp from "@/components/CardSignUp";
import image from "../assets/image1.png";
import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <div className='h-screen flex flex-col md:flex-row items-center'>
        <div className='h-full bg-purple-400'>
          <img
            className='hidden lg:flex object-contain h-full bg-gradient-to-b from-[#F24369] to-[#3F3B91]'
            src={image}
            alt=''
          />
        </div>
        <CardSignUp />
      </div>
    </div>
  );
};

export default RegisterPage;
