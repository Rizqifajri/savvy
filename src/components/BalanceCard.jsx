import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { getSavingByUserId } from "@/services/getApi";
import { useAtom } from "jotai";
import { currentUserAtom } from "@/lib/atoms";

const BalanceCard = () => {
  const [currentUser] = useAtom(currentUserAtom);
  const [totalCash, setTotalCash] = useState(0);
  const [totalBank, setTotalBank] = useState(0);
  const [totalAll, setTotalAll] = useState(0);

  useEffect(() => {
    const fetchSaving = async () => {
      if (!currentUser?.id) return;
      try {
        const data = await getSavingByUserId(currentUser.id);
        const cashSavings = data[0].savings.filter(saving => saving.saving_method === 'cash');
        const bankSavings = data[0].savings.filter(saving => saving.saving_method === 'bank');
        const totalCash = cashSavings.reduce((acc, saving) => acc + saving.collected, 0);
        const totalBank = bankSavings.reduce((acc, saving) => acc + saving.collected, 0);
        const totalAll = data[0].savings.reduce((acc, saving) => acc + saving.collected, 0);
        setTotalCash(totalCash);
        setTotalBank(totalBank);
        setTotalAll(totalAll);
      } catch (error) {
        console.error("Failed to fetch saving:", error);
      }
    };
    fetchSaving();
  }, [currentUser.id]);

  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-5'>
      <Card className='bg-purple-800 h-full border-none p-4 gap-5'>
          <CardContent className='text-left'>
            <h3 className='text-white font-semibold text-[12px]'>Total</h3>
            <p className='balance text-orange-400 font-bold text-[35px] lg:text-[40px] xl:text-[50px] '>
              IDR {totalAll.toLocaleString()}
            </p>
          </CardContent>
        </Card>
        <Card className='bg-purple-800 h-full border-none p-5 gap-5'>
          <CardContent className='text-left'>
            <h3 className='text-white font-semibold text-[12px]'>Cash</h3>
            <p className='balance text-white font-bold text-[24px] lg:text-[30px] xl:text-[50px] '>
              IDR {totalCash.toLocaleString()}
            </p>
          </CardContent>
        </Card>
        <Card className='bg-purple-800 h-full border-none p-5 gap-5'>
          <CardContent className='text-left'>
            <h3 className='text-white font-semibold text-[12px]'>Bank</h3>
            <p className='balance text-white font-bold text-[24px] lg:text-[30px] xl:text-[50px] '>
              IDR {totalBank.toLocaleString()}
            </p>
          </CardContent>
        </Card>
        
      </div>
    </section>
  )
}

export default BalanceCard;
