import React from "react";
import transaction from "../assets/catatan-transaksi.png";
import advancebudget from "../assets/advance-budgeting.png";
import saving from "../assets/savings.png";
import transactiontrace from "../assets/transaction-trace.png";
import { TextReveal } from "./animation/TextReveal";
import Motion from "./animation/Motion";
import { fromLeft, fromRight, textReveal } from "@/lib/variants";

const SavvyGuide = () => {
  // Data untuk setiap bagian "About Savvy"
  const sections = [
    {
      imgPosition: "md:flex-row-reverse",
      imgSrc: transaction,
      title: "Record Transaction",
      description:
        "Managing business finances is now a pleasure to complete business transaction recording in less than a minute",
    },
    {
      imgPosition: "",
      imgSrc: advancebudget,
      title: "Advance Budgeting",
      description:
        "Manage your finances for your needs easily with the advance budgeting feature.",
    },
    {
      imgPosition: "md:flex-row-reverse",
      imgSrc: saving,
      title: "Savings",
      description: "Record your savings in an easy and organized way",
    },
    {
      imgPosition: "",
      imgSrc: transactiontrace,
      title: "Print transaction traces without time limit",
      description:
        "View your transaction records, savings, and money management indefinitely.",
    },
  ];

  return (
    <section
      id='how-it-works'
      className='flex flex-col py-24 gap-20 md:gap-24 relative'
    >
      <span className='hidden sm:absolute w-0.5 h-[35vh] bg-gray-200 mx-auto'></span>
      <h1 className='text-left md:text-center font-bold text-[30px] text-purple-900 mx-5 '>
        <TextReveal
          variants={textReveal}
          text='How does SAVVY Work to Help Manage Your Finances?'
        />
      </h1>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row justify-center items-center md:gap-44 md:mx-56 ${section.imgPosition}`}
        >
          <Motion variants={index % 2 === 0 ? fromLeft : fromRight} custom={index}>
            <img
              className='object-contain w-full sm:w-80 lg:w-[600px] mx-auto'
              src={section.imgSrc}
              alt=''
            />
          </Motion>

          <div className={`flex flex-row ${section.imgPosition}`}>
            <div className='flex flex-col w-64 md:w-full mx-5'>
              <h1 className='font-bold text-purple-900 text-[20px] lg:text-[40px]'>
                <TextReveal variants={textReveal} text={section.title} />
                
              </h1>
              <p className='font-medium text-gray-800 text-[12px] lg:text-[16px] pt-2 text-left'>
              <TextReveal variants={textReveal} text={section.description} />
                
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SavvyGuide;
