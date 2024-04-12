import React, { useState } from "react";
import BoxSelect from "../form/BoxSelect";
import TitleForm from "../form/TitleForm";

const Periodicity = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center w-[85%] mx-auto mt-6">
      <button className="bg-transparent border-none p-0 m-0" onClick={() => setIsOpen(!isOpen)}>
        <TitleForm wordBlue="¿Qué periodicidad" wordPink="quieres?" textAlign="center" />
      </button>
      {isOpen && (
        <div className="flex flex-wrap justify-center space-x-4 mt-8">
          <BoxSelect amount="MENSUAL" customStyle={{width: '150px', height: '100px'}} textSize="2xl" className="mb-4 md:mb-0" />
          <BoxSelect amount="TRIMESTRAL" customStyle={{width: '150px', height: '100px'}} textSize="2xl" className="mb-4 md:mb-0" />
          <BoxSelect amount="SEMESTRAL" customStyle={{width: '150px', height: '100px'}} textSize="2xl" className="mb-4 md:mb-0" />
          <BoxSelect amount="ANUAL" customStyle={{width: '150px', height: '100px'}} textSize="3xl" className="mb-4 md:mb-0" />
        </div>
      )}
    </div>
  );
};

export default Periodicity;
