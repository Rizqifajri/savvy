import React from 'react';
import transaction from '../assets/catatan-transaksi.png'
import advancebudget from '../assets/advance-budgeting.png'
import saving from '../assets/savings.png'
import transactiontrace from '../assets/transaction-trace.png'

const SavvyGuide = () => {
  // Data untuk setiap bagian "About Savvy"
  const sections = [
    {
      imgPosition: 'md:flex-row-reverse',
      imgSrc: transaction,
      title: 'Catatan Transaksi',
      description: 'Mengelola Keuangan bisnis kini terasa menyenangkan selesaikan pencatatan transaksi bisnis kurang dari satu menit'
    },
    {
      imgPosition: '',
      imgSrc: advancebudget,
      title: 'Advance Budgeting',
      description: 'Kelola keuangan anda untuk kebutuhan anda dengan mudah dengan fitur advance budgeting.'
    },
    {
      imgPosition: 'md:flex-row-reverse',
      imgSrc: saving,
      title: 'Savings',
      description: 'Catat tabungan anda dengan cara yang mudah dan tertata rapih'
    },
    {
      imgPosition: '',
      imgSrc: transactiontrace,
      title: 'Print transaction traces without time limit',
      description: 'Melihat pencatatan transaksi, tabungan, dan pengelolaan uang anda tanpa batas waktu yang ditentukan.'
    },
    
  ];

  return (
    <section className='flex flex-col py-24 gap-20 md:gap-24 relative'>
      <span className='hidden sm:absolute w-0.5 h-[35vh] bg-gray-200 mx-auto'></span>
      <h1 className='text-left md:text-center font-bold text-[30px] text-purple-900 mx-5 '>
      Bagaimana SAVVY Bekerja untuk Membantu Mengatur Keuangan Anda?
      </h1>
      {sections.map((section, index) => (
        <div key={index} className={`flex flex-col md:flex-row justify-center items-center md:gap-44 md:mx-56 ${section.imgPosition}`}>
          <img className="object-contain w-full sm:w-80 lg:w-[600px] mx-auto" src={section.imgSrc} alt='' />
          <div className={`flex flex-row ${section.imgPosition}`}>
            
            <div className="flex flex-col w-64 md:w-full mx-5">
              <h1 className='font-bold text-purple-900 text-[20px] lg:text-[40px]'>{section.title}</h1>
              <p className="font-medium text-gray-800 text-[12px] lg:text-[16px] pt-2 text-left">
                {section.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SavvyGuide;
