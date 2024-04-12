import React from "react";
import BoxSelect from "../form/BoxSelect";
import TitleForm from "../form/TitleForm";

const MoneySelect = () => {
  return (
    <div className="flex space-x-4 justify-center w-[85%] mx-auto">
        <TitleForm wordBlue="¿Cuánto quieres" wordPink="aportar?" textAlign="center" />
        <div className="flex space-x-4">
      <BoxSelect amount="20 €" />
      <BoxSelect amount="40 €" />
      <BoxSelect amount="80 €" />
      <BoxSelect amount="Otra cantidad" />
      </div>
    </div>
  );
};

export default MoneySelect;
