import React from 'react'
import { Card, CardContent } from "@/components/ui/card";

const BalanceCard = () => {

  const balanceData = [
    {
      title: "Cash",
      balance: "3,000,000",
    },
    {
      title: "Bank",
      balance: "2,000,000",
    },
  ];
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-5'>
        <Card className='bg-purple-800 h-full border-none p-5 gap-5'>
          <CardContent className='text-left'>
            <h3 className='text-white font-semibold text-[12px]'>Your balance</h3>
            <p className='balance text-white font-bold text-[24px] lg:text-[30px] xl:text-[50px] '>
              IDR 5,000,000
            </p>
          </CardContent>
        </Card>
        {balanceData.map((data, index) => (
          <Card key={index} className='bg-purple-800 h-full border-none p-5 gap-5'>
            <CardContent className='text-left'>
              <h3 className='text-white font-semibold text-sm '>{data.title}</h3>
              <p className='balance text-orange-400 font-bold text-[24px] lg:text-[30px] xl:text-[50px] '>
               IDR {data.balance}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default BalanceCard
