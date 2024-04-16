import React, { useState } from "react";
import penform from "../../assets/icons/penForm.svg";
<<<<<<< HEAD

const BoxBlue = ({ titleBox, squareBlue, type, name }) => {
  return (
    <div className="flex flex-col mb-6 w-full px-2">
      <label htmlFor={titleBox} className="text-LetterColor font-poppinsBold text-xl mb-2">{titleBox}</label>
      <input
        type={type}
        name={name}
        id={titleBox}
        placeholder={squareBlue}
        className="border-2 border-quarteryColor rounded-lg py-4 px-6 shadow-xl focus:outline-none bg-white"
        required
      />
    </div>
  );
};

const FormBlue = () => {
  return (
<div className="flex items-center justify-center mt-6">
<div className="relative w-1/2 h-1/2 flex flex-wrap m-10" style={{backgroundColor: 'rgba(17, 138, 178, 0.6)', borderRadius: '20px'}}>
      <div className="w-full sm:w-1/2 p-4">
        <BoxBlue titleBox="Nombre *" name="name" squareBlue="Ingrese su nombre" />
        <BoxBlue titleBox="DNI/NIE *" name="DNI" squareBlue="Ingrese su DNI/NIE" />
        <BoxBlue titleBox="Email *" squareBlue="Ingrese su correo electrónico" />
        <BoxBlue titleBox="Ciudad" squareBlue="Ingrese su ciudad" />
        <BoxBlue titleBox="Código Postal" squareBlue="Ingrese su código postal" />
=======
import BoxBlue from "./BoxBlueAtom";

const FormBlue = () => {
  return (
    <div className="flex items-center justify-center mt-[-30px]">
      <div className="relative w-auto h-1/2 flex flex-wrap mt-5 mb-2" style={{backgroundColor: 'rgba(17, 138, 178, 0.6)', borderRadius: '20px'}}>
        <div className="w-full sm:w-1/2 p-4">
          <BoxBlue titleBox="Nombre *" squareBlue="Ingrese su nombre" type="text" />
          <BoxBlue titleBox="DNI/NIE *" squareBlue="Ingrese su DNI/NIE" type="text" pattern="^([0-9]{8}[A-Za-z]|[XYZ][0-9]{7}[A-Za-z])$" />
          <BoxBlue titleBox="Email *" squareBlue="Ingrese su correo electrónico" type="email" />
          <BoxBlue titleBox="Ciudad" squareBlue="Ingrese su ciudad" type="text" />
          <BoxBlue titleBox="Código Postal" squareBlue="Ingrese su código postal" type="text" pattern="^[0-9]{5}$" />
        </div>
        <img src={penform} alt="penForm" className="w-[55px] h-[59px] absolute top-[50%] left-[78%] transform -translate-x-1/2 -translate-y-1/2 md:w-[90px] md:h-[80px] md:left-[48%] md:top-[45%]" />
        <div className="w-full sm:w-1/2 p-4">
          <BoxBlue titleBox="Apellidos *" squareBlue="Ingrese sus apellidos" type="text" />
          <BoxBlue titleBox="Teléfono" squareBlue="Ingrese su número de teléfono" type="text" pattern="^[0-9]{9}$" />
          <BoxBlue titleBox="Dirección" squareBlue="Ingrese su dirección" type="text" />
          <BoxBlue titleBox="Provincia" squareBlue="Ingrese su provincia" type="text" />
          <BoxBlue titleBox="País" squareBlue="Ingrese su país" type="text" />
        </div>
>>>>>>> 509bfe7f0efaf7f15c51353511b330c0bef70590
      </div>
    </div>
  );
};

export default FormBlue;
