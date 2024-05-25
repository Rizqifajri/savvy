import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import ProgressBar from "@/components/ProgressBar";
import { MdAddBox } from "react-icons/md";

const CardSaving = () => {
  return (
    <section>
    <h1 className="mx-2 text-[20px] font-bold">Cash</h1>
      <Card className='bg-[#392467] sm:overflow-hidden sm:h-56 w-fit p-3'>
        <CardContent className='flex flex-col sm:flex-row   w-fit gap-8'>
          <div className='flex flex-col justify-center'>
            <h3 className='text-center font-bold'>Beli tas</h3>
            <ProgressBar balance={"150,000"} />
          </div>
          <div className='flex -mt-24 sm:mt-0 flex-col gap-8 font-medium'>
            <h3 className='text-center font-bold'>Target</h3>
            <div className='flex flex-col justify-between'>
              <div className='flex justify-between'>
                <p>Mulai</p> <span>05/05/24</span>
              </div>

              <svg className='bg-[#FFD1E3] w-full h-0.5'></svg>
              <div className='flex justify-between'>
                <p>Selesai</p> <span>05/05/24</span>
              </div>
            </div>

            <div className='flex justify-between items-center'>
              <p className="font-bold text-[#FFD1E3]">50,000 / Minggu</p>
              <MdAddBox className='cursor-pointer' size={35} fill='#FFD1E3' />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CardSaving;
