import CardLogin from "@/components/CardLogin";
import TopWave from "@/assets/waves/TopWave";
import React from "react";

const LoginPage = () => {
  return (
    <div className='h-screen'>
      <div className=' w-full h-56'>
        <div className='relative'>
          <h1 className='absolute top-32 left-10 text-white text-4xl text-left font-semibold '>
            Welcome to Savvy {"> <"} !
          </h1>
          <TopWave/>
        </div>
      </div>
      <div>
        <CardLogin />
      </div>
    </div>
  );
};

export default LoginPage;
