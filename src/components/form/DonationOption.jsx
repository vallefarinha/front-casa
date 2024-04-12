import React, { useState } from "react";
import BoxSelect from "../form/BoxSelect";
import TitleForm from "../form/TitleForm";

const DonationOption = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center w-[85%] mx-auto mt-6">
      <button className="bg-transparent border-none p-0 m-0" onClick={() => setIsOpen(!isOpen)}>
        <TitleForm wordBlue="¿Deseas recibir certificado de" wordPink="donación?" textAlign="center" />
      </button>
      {isOpen && (
        <div className="flex space-x-4 mt-8">
          <BoxSelect amount="SÍ" customStyle={{width: '150px', height: '100px'}} textSize="3xl" />
          <BoxSelect amount="NO" customStyle={{width: '150px', height: '100px'}} textSize="3xl" />
        </div>
      )}
    </div>
  );
};

export default DonationOption;

