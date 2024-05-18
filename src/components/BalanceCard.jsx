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
      <div className='grid grid-cols-3 gap-5 mx-5'>
        <Card className='bg-purple-800 border-none p-5 gap-5'>
          <CardContent className='text-left'>
            <h3 className='text-white font-semibold'>Your balance</h3>
            <p className='balance text-white font-bold text-[50px] '>
              IDR 5,000,000
            </p>
          </CardContent>
        </Card>
        {balanceData.map((data, index) => (
          <Card key={index} className='bg-purple-800 border-none p-5 gap-5'>
            <CardContent className='text-left'>
              <h3 className='text-white font-semibold'>{data.title}</h3>
              <p className='balance text-orange-400 font-bold text-[50px] '>
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
