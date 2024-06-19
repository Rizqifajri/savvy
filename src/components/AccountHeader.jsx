import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAtom } from "jotai";
import { currentUserAtom } from "@/lib/atoms";
import { useNavigate } from "react-router-dom";

const AccountHeader = () => {
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom)
  const navigate = useNavigate()

  const handleLogOut = () => {
    setCurrentUser(null)
    navigate('/login')
  }

  return (
    <div className='flex justify-between p-5 items-center'>
      <h1 className='font-bold text-[24px] md:text-[40px]'>Hello, {currentUser?.username} !</h1>
      <div className=''>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <button  onClick={handleLogOut} className="bg-red-500 p-2 rounded-sm">LOGOUT</button>
      </div>
    </div>
  );
};

export default AccountHeader;
