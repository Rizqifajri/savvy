import React from 'react'
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";


const SavingMethod = () => {
  return (
    <div>
      <div className='bg-purple-500 p-6 rounded-lg shadow-lg w-full'>
        <RadioGroup defaultValue='Daily' className='flex justify-center items-center '>
          <div className='flex items-center space-x-2'>
            <div className='custom-radio'>
              <RadioGroupItem value='Daily' id='r1' />
            </div>
            <Label htmlFor='r1' className='text-white cursor-pointer'>
              Daily
            </Label>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='custom-radio'>
              <RadioGroupItem value='Weekly' id='r2' />
            </div>
            <Label htmlFor='r2' className='text-white cursor-pointer'>
              Weekly
            </Label>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='custom-radio'>
              <RadioGroupItem value='Monthly' id='r3' />
            </div>
            <Label htmlFor='r3' className='text-white cursor-pointer'>
              Monthly
            </Label>
          </div>
        </RadioGroup>
       
      </div>
    </div>
  )
}

export default SavingMethod
