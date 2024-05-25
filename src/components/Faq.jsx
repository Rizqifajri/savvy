import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { TextReveal } from "./animation/TextReveal";
import { textReveal } from "@/lib/variants";

const Faq = () => {
  return (
    <section id='faq' className='bg-purple-100 h-full py-24'>
      <div className='pb-10'>
        <h1 className='text-center font-bold text-[30px] text-purple-900 mx-5 '>
          <TextReveal variants={textReveal} text='F.A.Q' />
        </h1>
        <p className='font-medium text-center text-gray-800 text-[12px] lg:text-[16px]'>
          <TextReveal
            variants={textReveal}
            text='We wont leave you wondering, all your question answer below'
          />
        </p>
      </div>

      <div className='flex '>
        <Accordion
          type='single'
          collapsible
          className='w-full md:w-[800px] mx-5 md:mx-auto'
        >
          <AccordionItem value='item-1'>
            <AccordionTrigger className='text-xl'>
              what is savvy
            </AccordionTrigger>
            <AccordionContent className='text-lg'>
              Savvy is a digital platform that helps you manage personal
              finances in an easy and efficient way. We provide tools for budget
              planning, expense tracking expenses, and financial analysis.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger className='text-xl'>
              Does Savvy have a mobile app?
            </AccordionTrigger>
            <AccordionContent className='text-lg'>
              Yes, Savvy has a mobile app available for download in the Google
              Play Store for easy access and management of your finances from
              your mobile device.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger className='text-xl'>
              How does Savvy work?
            </AccordionTrigger>
            <AccordionContent className='text-lg'>
              You can save your money by opening an account with Savvy. Once
              your account is created, you can set up your money flow, manage
              your balance, and make transactions as per your needs. balance,
              and make transactions according to your needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
