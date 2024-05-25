import AccountHeader from "@/components/AccountHeader";
import BalanceCard from "@/components/BalanceCard";
import CardSaving from "@/components/CardSaving";
import { useState } from "react";
import { MdAddBox } from "react-icons/md";
import AddSaving from "@/components/AddSaving";

const Savings = () => {
  const [addSaving, setAddSaving] = useState(false);

  const handleAddSavingClick = () => {
    setAddSaving(true);
  };

  const handleClosePopup = () => {
    setAddSaving(false);
  };

  return (
    <section>
      <div className='  '>
        <AccountHeader />
        <BalanceCard />
        <div className='flex flex-col  mx-5 py-5 '>
          <h3 className='font-semibold text-[20px]'>Lets Savings !</h3>
          <span className='w-full h-0.5 bg-gray-700'></span>
          <p className='font-normal italic text-[12px]'>
            Come on, finish it and increase your savings!
          </p>
          <MdAddBox
            onClick={handleAddSavingClick}
            className='cursor-pointer self-end hover:scale-105'
            size={35}
            fill='#FFD1E3'
          />
          <div className='grid grid-cols-1 mx-auto lg:grid-cols-2 2xl:grid-cols-3  gap-10'>
            <CardSaving />
            <CardSaving />
            <CardSaving />
          </div>
        </div>
      </div>
      {addSaving && <AddSaving onClose={handleClosePopup}/>}
    </section>
  );
};

export default Savings;
