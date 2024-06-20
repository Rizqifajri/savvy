import { Card, CardContent } from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import logo from "../assets/logo-login.png";
import { FcGoogle } from "react-icons/fc";
import React, { useEffect, useState } from "react";
import Motion from "./animation/Motion";
import { opacityIn } from "@/lib/variants";
import { logIn } from "@/data/getApi";
import { currentUserAtom } from "@/lib/atoms";
import { useAtom } from "jotai";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const CardLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser]= useAtom(currentUserAtom)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async () => {
    setIsLoading(true)
    try {
      const data = await logIn(username, password);
      console.log('Login Successful!', data);
      const decode = jwtDecode(data.token)
      setCurrentUser(decode)
      navigate('/feature-demo')
    } catch (error) {
      setError(error.message);
    }finally{
      setIsLoading(false)
    }
  };

  useEffect(()=> {
    if(currentUser){
      navigate('/feature-demo')
    }
})

  return (
    <section className='flex justify-center my-56 mx-auto '>
      <Motion variants={opacityIn}>
        <Card className='border-none shadow-lg h-full w-[500px]'>
          <CardContent>
            <div>
              <img className='mx-auto mb-5' src={logo} alt='logo' />
              <div className='flex flex-col gap-5 w-full'>
                <Input
                  className='bg-white text-gray-800'
                  type='text'
                  placeholder='Username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                  className='bg-white text-gray-800'
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className='text-red-500'>{error}</p>}
                <Button
                  className='bg-purple-600 text-white transition-all'
                  variant='custom'
                  type='button'
                  onClick={handleLogin}
                  disabled={isLoading}
                >
                  {isLoading? 'Loading....' : 'Login'}
                </Button>
                <p className='text-gray-500 text-[14px] text-center'>
                  dont haven't account? <Link to='/register' className="underline font-bold">Register</Link>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Motion>
    </section>
  );
};

export default CardLogin;
