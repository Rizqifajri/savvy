import CardSignUp from "@/components/CardSignUp";
import image from "../assets/image1.png";
import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <div className='h-screen grid grid-cols-2 items-center'>
        <div className='h-full bg-purple-400'>
          <img
            className='object-contain h-full bg-gradient-to-b from-[#F24369] to-[#3F3B91]'
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
