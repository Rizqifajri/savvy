import { Card, CardContent } from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import logo from "../assets/logo-login.png";

import React from "react";

const CardLogin = () => {
  return (
    <section className='flex justify-center my-56 mx-auto '>
      <Card className='border-none shadow-lg h-full w-[500px]'>
        <CardContent>
          <div>
            <img className='mx-auto mb-5' src={logo} alt='' />
            <div className='flex flex-col gap-5 w-full '>
              <Input
                className='bg-white'
                type='email'
                placeholder='Email'
              ></Input>
              <Input
                className='bg-white'
                type='username'
                placeholder='Username'
              ></Input>
              <Button
                className='bg-purple-600 text-white hover:scale-105 transition-all '
                variant='custom'
                type='button'
              >
                Submit
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
export default CardLogin;
