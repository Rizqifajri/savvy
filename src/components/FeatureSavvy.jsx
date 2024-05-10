import React from "react";
import { Card, CardContent } from "./ui/card";
import { dataSavvyFeature } from "@/data/data.feature";
import mobilefeature from "../assets/mobile-feature.png";

const FeatureSavvy = () => {
  return (
    <section className='py-10 md:mx-20'>
      <h1 className='text-left md:text-center font-bold text-[30px] text-purple-900 mx-5 '>
        Beragam Fitur, Beragam Kemudahan
      </h1>
      <Card className='h-full lg:mx-44 border-none shadow-lg py-5 '>
        <CardContent className='flex flex-col-reverse md:flex-row p-4 mx-5'>
          <div>
            <ul className="flex flex-col gap-10 my-5 md:my-24">
              {dataSavvyFeature.map((feat, index) => (
                <li className='my-auto' key={index}>
                  <div className="">
                    <h3 className='font-semibold text-purple-900 text-[20px]'>
                      {feat.title}
                    </h3>
                    <p className='font-light text-purple-800 text-[16px]'>
                      {feat.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto my-auto">
            <img className="object-contain w-56 md:w-[600px]" src={mobilefeature} alt='' />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default FeatureSavvy;
