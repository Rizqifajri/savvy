import React, { useState } from "react";
import wallet from "../assets/3dwallet.png";
import moneymouth from "../assets/3dmoney-mouth.png";
import starstuck from "../assets/3dstarstruck.png";
import coins from "../assets/3dcoins.png";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import NotificationFeature from "./NotificationFeature";

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
      <div className='grid md:grid-cols-2 gap-10 mx-10'>
        {featureOnDemo.map((item, index) => (
          <div
            key={index}
            onClick={() => goToFeaturePage(item.href, item.feature)}
            className='bg-white cursor-pointer hover:scale-105 hover:shadow-lg transition-all hover:bg-orange-400 w-full xl:h-60 rounded-lg border-4 border-orange-500 flex justify-between items-center hover:text-white p-5  mx-auto '
          >
            <div>
              <h1 className='text-15px md:text-[30px] xl:text-[50px] font-bold text-orange'>
                {item.feature}
              </h1>
              <p className='text-[12px] xl:text-[20px] font-semibold text-orange'>
                {item.desc}
              </p>
            </div>
            <img src={item.icon} alt='' />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {isPopUpVisible && <NotificationFeature closePopUp={closePopUp} />}
      </AnimatePresence>
    </section>
  );
};

export default FeatureOnDemo;
