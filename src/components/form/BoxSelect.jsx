import React, { useState } from 'react';

const BoxSelect = ({ amount }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div 
    className={`w-56 min-h-[145px] relative rounded-[20px] shadow ${isSelected ? 'bg-primaryColor text-white' : isHovered ? 'bg-cyan-600 text-white' : 'bg-gray-300 text-cyan-950'} font-poppinsBold ${amount === 'Otra cantidad' ? 'text-4xl' : 'text-6xl'} text-center cursor-pointer flex items-center justify-center`}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onClick={handleClick}
  >
    <div className="w-full h-full absolute left-0 top-0 opacity-20 rounded-[20px] shadow" />
    <div className="w-full">{amount}</div>
  </div>
  );
};

export default BoxSelect;
