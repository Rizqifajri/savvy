import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ProgressBar from "@/components/ProgressBar";
import { MdAddBox } from "react-icons/md";
import { TbTrashXFilled } from "react-icons/tb";
import { updateSaving, deleteSaving } from "@/services/getApi";
import { formatDate } from "@/utils/formatDate";
import LoadingIcons from "react-loading-icons";
import { Bars } from "react-loading-icons";

const CardSaving = ({ savingData, onDelete }) => {
  const [collected, setCollected] = useState(savingData?.collected);
  const [progressPercentage, setProgressPercentage] = useState(
    (savingData?.collected / savingData?.total_saving) * 100
  );
  const [loading, setLoading] = useState(false);

  const increaseProgress = async () => {
    if (collected < savingData?.total_saving) {
      const newCollected = Math.min(
        collected + Number(savingData?.nominal),
        savingData?.total_saving
      );
      setCollected(newCollected);
    }
  };

  const handleDeleteSaving = async () => {
    setLoading(true);
    try {
      await deleteSaving(savingData.id);
      onDelete(savingData.id); 
    } catch (error) {
      console.error("Failed to delete saving:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const updateCollectedInDatabase = async () => {
      if (collected === savingData?.collected) return;
      setLoading(true);
      try {
        await updateSaving(savingData?.id, {
          ...savingData,
          collected,
        });
        setProgressPercentage((collected / savingData?.total_saving) * 100);
      } catch (error) {
        console.error("Failed to update saving:", error);
      } finally {
        setLoading(false);
      }
    };

    updateCollectedInDatabase();
  }, [collected]);

  return (
    <section>
      <Card className='bg-[#392467] sm:overflow-hidden sm:max-w-[600px] sm:h-56 w-fit p-3'>
        <CardContent className='flex flex-col sm:flex-row w-fit gap-8'>
          <div className='flex flex-col justify-center'>
            <h1 className='mx-2 text-[20px] font-bold'>
              {savingData?.saving_method}
            </h1>
            <h3 className='text-center font-bold'>
              {savingData?.category_name}
            </h3>
            <ProgressBar
              totalSaving={collected}
              progressPercentage={progressPercentage}
            />
          </div>
          <div className='flex -mt-24 sm:mt-0 flex-col gap-8 font-medium'>
            <h3 className='text-center font-bold'>Target</h3>
            <div className='flex flex-col justify-between'>
              <div className='flex justify-between'>
                <p>Mulai</p> <span>{formatDate(savingData?.start_date)}</span>
              </div>
              <svg className='bg-[#FFD1E3] w-full h-0.5'></svg>
              <div className='flex justify-between'>
                <p>Selesai</p> <span>{formatDate(savingData?.end_date)}</span>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <p className='font-bold text-[#FFD1E3]'>
                IDR {savingData?.nominal} / {savingData?.saving_frequency}
              </p>
              <MdAddBox
                className='cursor-pointer'
                size={35}
                fill='#FFD1E3'
                onClick={increaseProgress}
              />
            </div>
            <div className='flex relative justify-between items-center'>
              {loading ? (
                <Bars className='w-5 absolute right-0 -top-60' />
              ) : (
                <TbTrashXFilled
                  className='cursor-pointer absolute right-0 -top-48'
                  size={30}
                  fill='#EB7F63'
                  onClick={handleDeleteSaving}
                  disabled={loading}
                />
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CardSaving;
