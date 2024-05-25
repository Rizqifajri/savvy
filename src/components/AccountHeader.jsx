import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AccountHeader = () => {
  return (
    <div className='flex justify-between p-5 items-center'>
      <h1 className='font-bold text-[24px] md:text-[40px]'>Hello, user !</h1>
      <div className=''>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default AccountHeader;
