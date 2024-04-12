import React from "react";
import BoxSelect from "../form/BoxSelect";
import TitleForm from "../form/TitleForm";

const MoneySelect = () => {
  return (
    <div className="flex flex-col items-center w-[85%] mx-auto mt-6">
      <TitleForm wordBlue="¿Cuánto quieres" wordPink="aportar?" textAlign="center" />
      <div className="flex space-x-4 mt-8">
            <BoxSelect amount="20 €" customStyle={{width: '150px', height: '100px'}} textSize="3xl" />
            <BoxSelect amount="40 €" customStyle={{width: '150px', height: '100px'}} textSize="3xl" />
            <BoxSelect amount="80 €" customStyle={{width: '150px', height: '100px'}} textSize="3xl" />
            <BoxSelect amount="otra cantidad" customStyle={{width: '150px', height: '100px'}} textSize="3xl" />
      </div>
    </div>
  );
};

export default MoneySelect;
