import { Card, CardContent } from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import logo from "../assets/logo-login.png";
import { FcGoogle } from "react-icons/fc";
import React, { useState } from "react";
import Motion from "./animation/Motion";
import { onPopUp, opacityIn } from "@/lib/variants";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "@/services/getApi";

const CardSignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSignUp = async () => {
    try{
      const data = await signUp(name, username, email, password)
      console.log(data)
      navigate('/login')
    }catch(error){
      setError(error.message);
    }
  }

  return (
    <section className='flex flex-col lg:flex-row justify-center my-56 mx-auto  '>
      <h1 className="lg:hidden text-[30px] font-bold mb-5 text-purple-600 text-center">Welcome To Savvy !</h1>
      <Motion variants={opacityIn}>
        <Card className='border-none shadow-lg h-full w-full md:w-[500px]'>
          <CardContent>
            <div>
              <img className='mx-auto mb-5' src={logo} alt='' />
              <div className='flex flex-col gap-5 w-full '>
                <Input
                  className='bg-white text-gray-800'
                  type='name'
                  placeholder='Name'
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                ></Input>
                <Input
                  className='bg-white text-gray-800'
                  type='username'
                  placeholder='Username'
                  value={username}
                  onChange={(e)=> setUsername(e.target.value)}
                ></Input>
                <Input
                  className='bg-white text-gray-800'
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                ></Input>
                <Input
                  className='bg-white text-gray-800'
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                ></Input>
                <Button
                  className='bg-purple-600 text-white transition-all '
                  variant='custom'
                  type='button'
                  onClick={handleSignUp}
                  disabled={isLoading}
                >
                 {isLoading? 'Loading...' : 'Signup'} 
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
                  Already have an account ?{" "}
                  <Link to='/login'>
                    <span className='hover:cursor-pointer hover:text-purple-500 underline'>
                      Login
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Motion>
    </section>
  );
};
export default CardSignUp;
