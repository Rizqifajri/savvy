import React from "react";
import about from "../assets/about-savvy.png";
const AboutSavvy = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-2 justify-center items-center lg:mx-56'>
        <img className="object-contain w-60 sm:w-80 lg:w-[600px] mx-auto" src={about} alt='' />
        <div className="flex">
          <span className='hidden sm:flex w-0.5 h-[35vh] bg-gray-200 mx-auto'></span>
        <div className="flex flex-col mx-5  ">
          <h1 className='font-bold text-purple-900 text-[30px] lg:text-[40px]'>About Savvy</h1>
          <p className="font-medium text-gray-800 text-[12px] lg:text-[16px] pt-2 text-left">
            Aplikasi manajemen keuangan yang dirancang untuk memberikan Anda
            kendali penuh atas keuangan Anda. Dengan fitur pencatatan transaksi
            yang intuitif, tabungan yang terorganisir, dan alat pengelolaan
            keuangan yang canggih, Savvy hadir untuk membantu Anda mencapai
            tujuan keuangan Anda dengan lebih mudah.
          </p>
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutSavvy;
