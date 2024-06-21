import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAtom } from "jotai";
import { currentUserAtom } from "@/lib/atoms";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AccountHeader = () => {
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  const navigate = useNavigate();

  const handleLogOut = () => {
    setCurrentUser(null);
    navigate("/login");
  };

  return (
    <div className='flex justify-between p-8 lg:mx-10 items-center'>
      <h1 className='font-bold text-[24px] md:text-[40px]'>
        Hello, <span className="text-purple-500">{currentUser?.username}</span>  !
      </h1>
      <div className='flex items-center gap-2'>
        <p>{currentUser?.username}</p>
        <Avatar className="hover:scale-110 transition-all">
          <DropdownMenu >
            <DropdownMenuTrigger><AvatarImage src='https://github.com/shadcn.png' /></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{currentUser?.username}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem className='bg-red-500' onClick={handleLogOut}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default AccountHeader;
