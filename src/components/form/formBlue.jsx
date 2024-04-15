import React from "react";
import penform from "../../assets/icons/penForm.svg";

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

const FormBlue = () => {
  return (
<div className="flex items-center justify-center mt-6">
<div className="relative w-1/2 h-1/2 flex flex-wrap m-10" style={{backgroundColor: 'rgba(17, 138, 178, 0.6)', borderRadius: '20px'}}>
      <div className="w-full sm:w-1/2 p-4">
        <BoxBlue titleBox="Nombre *" squareBlue="Ingrese su nombre" />
        <BoxBlue titleBox="DNI/NIE *" squareBlue="Ingrese su DNI/NIE" />
        <BoxBlue titleBox="Email *" squareBlue="Ingrese su correo electrónico" />
        <BoxBlue titleBox="Ciudad" squareBlue="Ingrese su ciudad" />
        <BoxBlue titleBox="Código Postal" squareBlue="Ingrese su código postal" />
      </div>
      <img src={penform} alt="penForm" className="w-[55px] h-[59px] absolute top-[40%] left-[78%] transform -translate-x-1/2 -translate-y-1/2 md:w-[120px] md:h-[100px] md:left-[48%] md:top-[42%]" />
      <div className="w-full sm:w-1/2 p-4">
        <BoxBlue titleBox="Apellidos *" squareBlue="Ingrese sus apellidos" />
        <BoxBlue titleBox="Teléfono" squareBlue="Ingrese su número de teléfono" />
        <BoxBlue titleBox="Dirección" squareBlue="Ingrese su dirección" />
        <BoxBlue titleBox="Provincia" squareBlue="Ingrese su provincia" />
        <BoxBlue titleBox="País" squareBlue="Ingrese su país" />
      </div>
    </div>
    </div>
  );
};

export default FormBlue;
