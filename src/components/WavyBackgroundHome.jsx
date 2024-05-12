import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import productbanner from "../assets/product-banner.png";
import { Button } from "./ui/button";
import { TextReveal } from "./animation/TextReveal";
import { fromBottom, fromTop, textReveal } from "@/lib/variants";
import Motion from "./animation/Motion";

export function WavyBackgroundHome() {
  return (
    <BackgroundGradientAnimation>
      <div>
        <div className='absolute z-20 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl'>
          <div className='pt-56'>
            <p className='text-[30px] md:text-4xl lg:text-7xl text-white  font-bold inter-var text-center'>
              <TextReveal
                variants={textReveal}
                text='Organize your finances properly'
              />
            </p>
            <p className='text-[14px] mx-5 md:text-lg mt-5 text-white font-normal  text-center'>
              <TextReveal
                variants={textReveal}
                text='Record, Evaluate, and Grow Your Business Easily with SAVVY'
              />
            </p>
          </div>

          <div className='pt-10'>
            <Motion variants={fromTop}>
              <img
                className='object-contain mx-auto w-[350px] md:w-[600px] lg:w-[1080px] z-20'
                src={productbanner}
                alt=''
              />
            </Motion>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
