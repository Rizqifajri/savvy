import AccountHeader from "@/components/AccountHeader";
import BalanceCard from "@/components/BalanceCard";
import React from "react";

const Savings = () => {
  return (
    <section>
      <div className='mx-10'>
        <AccountHeader />
        <BalanceCard />
        <div className='flex flex-col mx-5 py-5 '>
          <h3 className='font-semibold text-[20px]'>Lets Savings !</h3>
          <span className='w-full h-0.5 bg-gray-700'></span>
          <p className='font-normal italic text-[12px]'>
            Come on, finish it and increase your savings!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Savings;
