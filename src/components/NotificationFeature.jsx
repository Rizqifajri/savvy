import React, { useState } from "react";
import { onPopUp } from "../lib/variants";
import emoji from "../assets/sad-emoji.png";
import googleplay from "../assets/google-play-badge.png";
import { MdCancel } from "react-icons/md";
import { motion } from "framer-motion";

const NotificationFeature = ({ closePopUp }) => {
  return (
    <section>
      <div className='fixed inset-0 backdrop-blur-md bg-black bg-opacity-80 flex items-center justify-center'>
        <motion.div
          variants={onPopUp}
          initial='initial'
          animate='animate'
          exit='exit'
          className='bg-purple-900 w-[900px] border-4 border-dashed m-10 relative flex justify-center items-center h-[500px] rounded-xl shadow-xl'
        >
          <button
            onClick={closePopUp}
            className='absolute top-10 right-10 text-[50px]'
          >
            <MdCancel fill='white' className='w-10 h-10 hover:scale-105 transition-all' />
          </button>

          <div className='flex flex-col'>
            <img className='w-40 items-center mx-auto md:w-56 object-cover ' src={emoji} alt='' />
            <div className="">
              <h1 className='font-bold text-center text-white text-[20px] md:text-[50px] ml-3'>
              Ooopps ! Sorry,
            </h1>
            <h3 className='font-medium text-center text-gray-300 text-[10px] md:text-[20px] ml-3'>
              THIS VERSION IS ONLY ON MOBILE APPS!
            </h3>
            <p className='font-medium text-center text-gray-300 ml-3'>
              If you want to try this feature, you can download it on Google
              Play Store.
            </p>
            <img className='w-56 mx-auto hover:scale-105 transition-all cursor-pointer ' src={googleplay} alt='' />
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotificationFeature;
