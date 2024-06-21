import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ProgressBar from "@/components/ProgressBar";
import { MdAddBox } from "react-icons/md";
import { TbTrashXFilled } from "react-icons/tb";
import { useAtom } from "jotai";
import { currentUserAtom } from "@/lib/atoms";
import CardSaving from "@/components/CardSaving"; // Import komponen CardSaving
import { deleteSaving, getSavingByUserId } from "@/services/getApi";
import AccountHeader from "@/components/AccountHeader";
import BalanceCard from "@/components/BalanceCard";
import AddSaving from "@/components/AddSaving";

const Savings = () => {
  const [addSaving, setAddSaving] = useState(false);
  const [currentUser] = useAtom(currentUserAtom);
  const [savings, setSavings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddSavingClick = () => {
    setAddSaving(true);
  };

  const handleClosePopup = () => {
    setAddSaving(false);
  };

  const handleSavingAdded = (newSaving) => {
    setSavings((prevSavings) => [...prevSavings, newSaving[0]]);
  };

  const handleSavingDeleted = (deletedSavingId) => {
    try {
      setSavings((prevSavings) =>
        prevSavings.filter((saving) => saving.id !== deletedSavingId)
      );
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchSaving = async () => {
      if (!currentUser?.id) {
        return;
      }
      try {
        const data = await getSavingByUserId(currentUser.id);
        setSavings(data[0].savings);
      } catch (error) {
        console.error("Failed to fetch saving:", error);
      }
    };
    fetchSaving();
  }, [currentUser.id]);

  return (
    <section>
      <div>
        <AccountHeader />
        <BalanceCard />
        <div className='flex flex-col mx-5 py-5'>
          <h3 className='font-semibold text-[20px]'>Lets Savings!</h3>
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
          <div className='grid grid-cols-1 mx-auto lg:grid-cols-2 gap-10'>
            {savings?.map((data, index) => (
              <CardSaving
                key={index}
                savingData={data}
                onDelete={handleSavingDeleted}
              />
            ))}
          </div>
        </div>
      </div>
      {addSaving && (
        <AddSaving
          onClose={handleClosePopup}
          onSavingAdded={handleSavingAdded}
        />
      )}
    </section>
  );
};

export default Savings;
