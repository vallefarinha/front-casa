import React from "react";
import BoxSelect from "../form/BoxSelect";
import TitleForm from "./TitleForm";

const MoneySelect = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-6">
        <TitleForm wordBlue="¿Cuánto quieres" wordPink="aportar?" textAlign="center" />
      <BoxSelect amount="20 €" />
      <BoxSelect amount="40 €" />
      <BoxSelect amount="80 €" />
      <BoxSelect amount="Otra cantidad" />
    </div>
  );
};

export default MoneySelect;
