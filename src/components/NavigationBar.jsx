import React from "react";
import logo from "../assets/logo.png";
import { dataNavigate } from "../data/data.navigate";
import Button from "./Button";

const NavigationBar = () => {
  return (
    <section className="fixed top-0 w-full z-50">
      <div className='backdrop-blur-xl flex justify-between items-center px-4 py-2 z-50 '>
        <img className="w-14" src={logo} alt='savvy logo' />
        <ul className="hidden md:flex gap-2">
          {dataNavigate.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="text-purple-800 hover:bg-purple-400 rounded-xl font-semibold hover:text-white px-4 py-2 transition-all">{item.title}</a>
            </li>
          ))}
        </ul>
        <Button title="Get started"/>
      </div>
    </section>
  );
};

export default NavigationBar;
