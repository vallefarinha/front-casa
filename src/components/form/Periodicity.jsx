import React from "react";
import BoxSelect from "../form/BoxSelect";
import TitleForm from "../form/TitleForm";

const Periodicity = () => {
  return (
    <div className="flex space-x-4 justify-center w-[85%] mx-auto">
        <TitleForm wordBlue="¿Qué periodicidad" wordPink="quieres?" textAlign="center" />
        <div className="flex space-x-4">
      <BoxSelect amount="MENSUAL" />
      <BoxSelect amount="TRIMESTRAL" />
      <BoxSelect amount="SEMESTRAL" />
      <BoxSelect amount="ANUAL" />
      </div>
    </div>
  );
};

export default Periodicity;