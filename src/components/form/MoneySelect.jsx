import React, { useState } from "react";
import BoxSelect from "../form/BoxSelect";
import TitleForm from "../form/TitleForm";
import kinMoney from "../../assets/icons/kinMoney.svg";

const MoneySelect = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="flex flex-col items-center w-[85%] mx-auto mt-6">
        <button className="bg-transparent border-none p-0 m-0" onClick={() => setIsOpen(!isOpen)}>
          <TitleForm wordBlue="¿Cuánto quieres" wordPink="aportar?" textAlign="center" />
        </button>
        {isOpen && (
          <div className="flex flex-wrap justify-center space-x-4 mt-8 relative">
            <img src={kinMoney} alt="Kin Money" className="w-full sm:w-auto sm:absolute sm:-left-20" />
            <BoxSelect amount="20 €" customStyle={{width: '150px', height: '100px'}} textSize="3xl" className="mb-4 md:mb-0" />
            <BoxSelect amount="40 €" customStyle={{width: '150px', height: '100px'}} textSize="3xl" className="mb-4 md:mb-0" />
            <BoxSelect amount="80 €" customStyle={{width: '150px', height: '100px'}} textSize="3xl" className="mb-4 md:mb-0" />
            <BoxSelect amount="otra cantidad" customStyle={{width: '150px', height: '100px'}} textSize="3xl" className="mb-4 md:mb-0" />
         </div>
        )}
      </div>
    );
};

export default MoneySelect;
