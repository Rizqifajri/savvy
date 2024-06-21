import { currentUserAtom } from "@/lib/atoms";
import axios from "axios";
import { useAtom } from "jotai";

const API_URL = import.meta.env.VITE_API_URL

export const logIn = async (username, password) => {

  try {
    const response = await axios.post(`${API_URL}/auth/login`, { username, password });
    return response.data

  } catch (error) {
    throw new Error(error.response.data.message || 'Login failed');
  }
}

export const signUp = async (name, username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users`, { name, username, email, password })
    return response.data
  } catch {
    throw new Error(error.response.data.message || 'Register failed');
  }
}

export const getSavingByUserId = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/savings/${userId}`)
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to get saving');
  }
}

export const updateSaving = async ( savingId, data) => {
  try {
    const response = await axios.patch(`${API_URL}/savings/${savingId}`, data)
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update saving');
  }
}


export const createSaving = async (savingData) => {
  try {
    const response = await axios.post(`${API_URL}/savings`, savingData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create saving');
  }
}

export const deleteSaving = async (savingId) => {
  try{
    const response = await axios.delete(`${API_URL}/savings/${savingId}`)
    return response.data
  }catch(error){
    throw new Error(error.response?.data?.message || 'Failed to delete saving');
  }
}




