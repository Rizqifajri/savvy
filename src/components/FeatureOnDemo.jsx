import React, { useState } from "react";
import wallet from "../assets/3dwallet.png";
import moneymouth from "../assets/3dmoney-mouth.png";
import starstuck from "../assets/3dstarstruck.png";
import coins from "../assets/3dcoins.png";
import locked from "../assets/locked.png";
import googleplay from "../assets/google-play-badge.png";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { onPopUp } from "../lib/variants";

const featureOnDemo = [
  {
    feature: "Savings",
    desc: "Kiki ayo selesaikan dan tambah tabungan mu!",
    icon: wallet,
    href: "/feature-demo/savings",
  },
  {
    feature: "Transaction",
    desc: "This feature can make your history transaction manage!",
    icon: moneymouth,
    href: "/feature-demo/transaction",
  },
  {
    feature: "Advance budgeting",
    desc: "Atur kebutuhan mu dengan fitur Advance Budgeting dari savvy!",
    icon: coins,
    href: "/feature-demo/advance-budgeting",
  },
  {
    feature: "Print trace transaction",
    desc: "Kiki ayo selesaikan dan tambah tabungan mu!",
    icon: starstuck,
    href: "/feature-demo/print-trace-transaction",
  },
];

const FeatureOnDemo = () => {
  const navigate = useNavigate();
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const goToFeaturePage = (path, feature) => {
    if (
      feature === "Transaction" ||
      feature === "Advance budgeting" ||
      feature === "Print trace transaction"
    ) {
      setIsPopUpVisible(true);
    } else {
      navigate(path);
    }
  };

  const closePopUp = () => {
    setIsPopUpVisible(false);
  };

  return (
    <section>
      <div className='grid grid-cols-2 gap-10 mx-5'>
        {featureOnDemo.map((item, index) => (
          <div
            key={index}
            onClick={() => goToFeaturePage(item.href, item.feature)}
            className='bg-white cursor-pointer hover:scale-105 hover:shadow-lg transition-all hover:bg-orange-400 w-full h-52 rounded-lg border-4 border-orange-500 flex justify-between items-center hover:text-white p-5 mx-auto '
          >
            <div>
              <h1 className='text-[60px] font-bold text-orange'>
                {item.feature}
              </h1>
              <p className='text-[20px] font-semibold text-orange'>
                {item.desc}
              </p>
            </div>
            <img src={item.icon} alt='' />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {isPopUpVisible && (
          <div className='fixed inset-0 backdrop-blur-md bg-black bg-opacity-80 flex items-center justify-center'>
            <motion.div
              variants={onPopUp}
              initial='initial'
              animate='animate'
              exit='exit'
              className='bg-purple-900 w-[900px] relative flex justify-center items-center h-[500px] rounded-xl shadow-xl'
            >
              <button
                onClick={closePopUp}
                className='absolute top-10 right-10 text-[50px]'
              >
                <MdCancel
                  fill='white'
                  className='hover:scale-105 transition-all'
                />
              </button>
              <img className='w-56 object-cover ' src={locked} alt='' />
              <div className='flex flex-col'>
                <h1 className='font-bold text-white text-[50px]'>
                  Ooopps ! Sorry,
                </h1>
                <h3 className='font-medium text-gray-300 text-[20px]'>
                  THIS VERSION IS ONLY ON MOBILE APPS!
                </h3>
                <p className='font-medium text-gray-300 '>
                  If you want to try this feature, you can download it on Google
                  Play Store.
                </p>
                <img className='w-56 ' src={googleplay} alt='' />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeatureOnDemo;
