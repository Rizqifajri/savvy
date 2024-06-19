import { currentUserAtom } from "@/lib/atoms";
import axios from "axios";
import { useAtom } from "jotai";

const API_URL = import.meta.env.VITE_API_URL

export const logIn = async (username, password) => {
  
  try{
    const response = await axios.post(`${API_URL}/auth/login`, {username, password});
    return response.data

  }catch(error){
    throw new Error(error.response.data.message || 'Login failed');
  }
}





