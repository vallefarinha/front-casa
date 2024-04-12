import React from "react";
import BoxSelect from "../form/BoxSelect";
import TitleForm from "../form/TitleForm";

const DonationOption = () => {
  return (
    <div className="flex flex-col items-center w-[85%] mx-auto mt-6">
      <TitleForm wordBlue="¿Deseas recibir certificado de" wordPink="donación?" textAlign="center" />
      <div className="flex space-x-4 mt-8">
            <BoxSelect amount="SÍ" customStyle={{width: '150px', height: '100px'}} textSize="3xl" />
            <BoxSelect amount="NO" customStyle={{width: '150px', height: '100px'}} textSize="3xl" />
      </div>
    </div>
  );
};

export default DonationOption;
