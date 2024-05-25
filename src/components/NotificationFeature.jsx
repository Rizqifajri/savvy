import React, { useState } from "react";
import { onPopUp } from "../lib/variants";
import locked from "../assets/locked.png";
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
          className='bg-purple-900 w-[900px] border-4 border-dashed relative flex justify-center items-center h-[500px] rounded-xl shadow-xl'
        >
          <button
            onClick={closePopUp}
            className='absolute top-10 right-10 text-[50px]'
          >
            <MdCancel fill='white' className='hover:scale-105 transition-all' />
          </button>
          <img className='w-56 object-cover ' src={locked} alt='' />
          <div className='flex flex-col'>
            <h1 className='font-bold text-white text-[50px] ml-3'>
              Ooopps ! Sorry,
            </h1>
            <h3 className='font-medium text-gray-300 text-[20px] ml-3'>
              THIS VERSION IS ONLY ON MOBILE APPS!
            </h3>
            <p className='font-medium text-gray-300 ml-3'>
              If you want to try this feature, you can download it on Google
              Play Store.
            </p>
            <img className='w-56 ' src={googleplay} alt='' />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotificationFeature;
