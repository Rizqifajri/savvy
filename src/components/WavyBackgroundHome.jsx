import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import productbanner from "../assets/product-banner.png";
import { Button } from "./ui/button";

export function WavyBackgroundHome() {
  return (
    <BackgroundGradientAnimation>
      <div>
        <div className='absolute z-20 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl'>
          <div className='pt-56'>
            <p className='text-[30px] md:text-4xl lg:text-7xl text-white  font-bold inter-var text-center'>
              Atur Keuanganmu Dengan teratur
            </p>
            <p className='text-[14px] mx-5 md:text-lg mt-5 text-white font-normal  text-center'>
              Catat, Evaluasi, dan Kembangkan Bisnismu dengan Mudah Bersama
              SAVVY
            </p>
            
          </div>
         

          <div className='pt-10'>
            
            <img
              className='object-contain mx-auto w-[350px] md:w-[600px] lg:w-[1080px] z-20'
              src={productbanner}
              alt=''
            />
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
