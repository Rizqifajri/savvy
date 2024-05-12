import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { dataNavigate } from "../data/data.navigate";
import Button from "./Button";
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate()


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;
      if (scrollPosition > screenHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className='fixed top-0 w-full z-50'>
      <div
        className={`backdrop-blur-xl flex justify-between items-center px-4 py-2 z-50 ${
          isScrolled ? "text-purple-500" : "text-white"
        }`}
      >
        <img className='w-14' src={logo} alt='savvy logo' />
        <ul className='hidden md:flex gap-2'>
          {dataNavigate.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                smooth={true}
                className={`hover:bg-purple-400 cursor-pointer rounded-xl font-semibold hover:text-white px-4 py-2 transition-all ${
                  isScrolled ? "text-purple-500" : "text-white"
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <Button onClick={()=> navigate('/login-user')} title='Try it Now' />
      </div>
    </section>
  );
};

export default NavigationBar;
