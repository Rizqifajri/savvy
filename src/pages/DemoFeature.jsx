import AccountHeader from "@/components/AccountHeader";
import BalanceCard from "@/components/BalanceCard";
import FeatureOnDemo from "@/components/FeatureOnDemo";

import React from "react";

const DemoFeature = () => {
  return (
    <section>
      <div className="mx-10">
        <AccountHeader />
      <BalanceCard />
      <div className="flex flex-col mx-5 py-5 ">
        <h3 className="font-semibold text-[20px]">Lets Try Savvy Feature!</h3>
        <span className="w-full h-0.5 bg-gray-700"></span>
        <p className="font-normal italic text-[12px]">But sorry Transcation, Advance Budgeting, and Trace Transaction just for mobile application</p>
      </div>

      <FeatureOnDemo/>
      </div>
      
    </section>
  );
};

export default DemoFeature;
