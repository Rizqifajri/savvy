import CardLogin from "@/components/CardLogin";
import image from "../assets/image1.png";
import React from "react";

const LoginPage = () => {
  return (
    <div className='h-screen grid grid-cols-2 items-center'>
      <div className='h-screen bg-purple-400'>
        <img
          className='object-contain h-full bg-gradient-to-b from-[#F24369] to-[#3F3B91]'
          src={image}
          alt=''
        />
      </div>

      <CardLogin />
      
    </div>
  );
};

export default LoginPage;
