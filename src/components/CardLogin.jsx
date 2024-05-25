import { Card, CardContent } from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import logo from "../assets/logo-login.png";
import { FcGoogle } from "react-icons/fc";
import React, { useState } from "react";
import Motion from "./animation/Motion";
import { onPopUp, opacityIn } from "@/lib/variants";
import { Link } from "react-router-dom";
import CardSignUp from "./CardSignUp";

const CardLogin = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <>
      {isSignUp ? (
        <CardSignUp setIsSignUp={setIsSignUp} />
      ) : (
        <section className='flex justify-center my-56 mx-auto '>
          <Motion variants={opacityIn}>
            <Card className='border-none shadow-lg h-full w-[500px]'>
              <CardContent>
                <div>
                  <img className='mx-auto mb-5' src={logo} alt='' />
                  <div className='flex flex-col gap-5 w-full '>
                    <Input
                      className='bg-white text-gray-800'
                      type='email'
                      placeholder='Email'
                    ></Input>
                    <Input
                      className='bg-white text-gray-800'
                      type='password'
                      placeholder='Password'
                    ></Input>
                    <Button
                      className='bg-purple-600 text-white transition-all '
                      variant='custom'
                      type='button'
                    >
                      Login
                    </Button>
                    <p className='text-gray-500 text-[14px] text-center'>
                      or Login with
                    </p>
                    <Button
                      className='bg-white gap-3 border-purple-500 border-2 text-gray-500 rounded-full transition-all '
                      variant='custom'
                      type='button'
                    >
                      <FcGoogle /> Google
                    </Button>
                    <p className='text-gray-300 text-center'>
                      Dont have account ?{" "}
                      <Link >
                        <span onClick={()=> setIsSignUp(true)} className='hover:cursor-pointer hover:text-purple-500 underline'>
                          Sign up
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Motion>
        </section>
      )}
    </>
  );
};
export default CardLogin;
