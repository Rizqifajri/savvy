import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
const Faq = () => {
  return (
    <section className='bg-purple-100 h-full py-24'>
      <div className="pb-10">
        <h1 className='text-center font-bold text-[30px] text-purple-900 mx-5 '>
        F.A.Q
      </h1>
      <p className='font-medium text-center text-gray-800 text-[12px] lg:text-[16px]'>
        We wont leave you wondering, all your question answer below
      </p>
      </div>
      
      <div className='flex '>
        <Accordion type='single' collapsible className='w-full md:w-[800px] mx-5 md:mx-auto'>
          <AccordionItem value='item-1'>
            <AccordionTrigger className='text-xl'>Is it accessible?</AccordionTrigger>
            <AccordionContent className='text-lg'>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger className='text-xl'>Is it styled?</AccordionTrigger>
            <AccordionContent className='text-lg'>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger className='text-xl'>Is it animated?</AccordionTrigger>
            <AccordionContent className='text-lg'>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
