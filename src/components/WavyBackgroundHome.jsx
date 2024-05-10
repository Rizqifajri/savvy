import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import productbanner from "../assets/product-banner.png";
import Button from "./Button";

export function WavyBackgroundHome() {
  return (
    <WavyBackground className='max-w-4xl mx-auto'>
      <div className="">
        <p className='text-xl md:text-4xl lg:text-7xl text-purple-900 font-bold inter-var text-center'>
          Atur Keuanganmu Dengan teratur
        </p>
        <p className='text-sm mx-5 md:text-lg text-purple-800 font-normal inter-var text-center'>
          Catat, Evaluasi, dan Kembangkan Bisnismu dengan Mudah Bersama SAVVY
        </p>
        <div className='flex justify-center mt-4 items-center mx-auto'>
          <Button title='Try it Now' />
        </div>
      </div>

      <div className='pt-10'>
        <img
          className='object-contain mx-auto w-[350px] md:w-[600px] lg:w-[1080px] z-20'
          src={productbanner}
          alt=''
        />
      </div>
    </WavyBackground>
  );
}
