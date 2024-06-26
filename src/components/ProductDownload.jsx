import React from "react";
import product from "../assets/product-download.png";
import googlePlay from "../assets/google-play-badge.png";
import Motion from "./animation/Motion";
import { TextReveal } from "./animation/TextReveal";
import { fromLeft, fromTop, textReveal } from "@/lib/variants";

const ProductDownload = () => {
  return (
    <section id='how-to-get' className='py-24'>
      <div className='flex flex-col md:flex-row justify-center gap-10'>
        <div>
          <Motion variants={fromTop}>
            <img src={product} alt='savvy product' />
          </Motion>
        </div>
        <div className='flex flex-col gap-5 justify-center'>
          <h1 className='text-left md:text-center font-bold text-[30px] text-purple-900 mx-5'>
            <TextReveal
              variants={textReveal}
              text='Ready to Manage your Financial ?'
            />
          </h1>
          <p className='font-light text-purple-800 text-[16px] text-left mx-5'>
            Lets get the app on Google Playstore !
          </p>
          <button>
            <img className='w-56' src={googlePlay} alt='' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDownload;
