import CardLogin from "@/components/CardLogin";
import image from "../assets/image1.png";
import React from "react";

const LoginPage = () => {
  return (
    <div className='h-screen flex flex-col md:flex-row items-center'>
      <div className='h-screen bg-purple-400'>
        <img
          className='hidden lg:flex object-contain h-full bg-gradient-to-b from-[#F24369] to-[#3F3B91]'
          src={image}
          alt=''
        />
      </div>

      <CardLogin />
      
    </div>
  );
};

export default LoginPage;
