import React from "react";


const Button = ({title}) => {
  return (
    <div>
      <button className='bg-purple-700 w-fit h-fit px-3 py-2 rounded-md text-white'>
        {title}
      </button>
    </div>
  );
};

export default Button;
