import React, { useState } from "react";
import rainbowpink from "../../assets/icons/rainbowpink.svg"
import TitleForm from "./TitleForm";

const BoxBlue = ({ titleBox, squareBlue }) => {
  return (
    <div className="flex flex-col mb-6 w-full px-2">
      <label htmlFor={titleBox} className="text-LetterColor font-poppinsBold text-xl mb-2">{titleBox}</label>
      <input
        type="text"
        id={titleBox}
        placeholder={squareBlue}
        className="border-2 border-quarteryColor rounded-lg py-4 px-6 shadow-xl focus:outline-none bg-white"
      />
    </div>
  );
};

const BankBlue = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <button className="bg-transparent border-none p-0 m-0" onClick={() => setIsOpen(!isOpen)}>
        <TitleForm wordBlue="Datos" wordPink="bancarios" textAlign="center" />
      </button>
      {isOpen && (
        <div className="relative w-1/2 h-1/2 flex flex-wrap m-10" style={{backgroundColor: 'rgba(17, 138, 178, 0.6)', borderRadius: '20px'}}>
          <div className="w-full sm:w-1/2 p-4">
            <BoxBlue titleBox="Titular" squareBlue="Ingrese el titular de la cuenta" />
            <BoxBlue titleBox="IBAN" squareBlue="Ingrese su IBAN" />
          </div>
          <img src={rainbowpink} alt="rainbowpink" className="w-[65px] h-[69px] absolute top-[52%] left-[68%] transform -translate-x-1/2 -translate-y-1/2 md:w-[178px] md:h-[170px] md:left-[78%] md:top-[42%]" />
        </div>
      )}
    </div>
  );
};

export default BankBlue;

