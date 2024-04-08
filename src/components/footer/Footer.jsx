import React from 'react';

const ContactInfo = () => (
  <div className="w-[474.61px] h-[91.59px]">
    <div className="text-zinc-800 text-base font-normal font-poppinsRegular">
      Avda. del profesor Pérez Pimentel,105 Barrio de la Guía<br/>33203 Gijón - Asturias
    </div>
    <div className="text-zinc-800 text-base font-normal font-poppinsRegular">
      tlfn. 985 363 314
    </div>
    <div className="text-zinc-800 text-base font-normal font-poppinsRegular underline leading-7 tracking-tight">
      casadeacogidaguia@hotmail.es
    </div>
  </div>
);

const Footer = () => (
  <div className="w-[1443px] h-[190px] relative">
    <div className="w-[1442.51px] h-[190px] left-0 top-0 absolute bg-white shadow-xl">
      <div className="w-[407.71px] h-6 left-[931.62px] top-[19px] absolute text-rose-500 text-xl font-semibold font-poppinsBold">
        Información de contacto
      </div>
    </div>
    <img className="w-[188.31px] h-[137.38px] left-[18.03px] top-[26px] absolute" src="src\assets\images\LogoSanta.svg" />
    <div className="w-[512.38px] h-[91.59px] left-[930.62px] top-[68px] absolute">
      <ContactInfo />
    </div>
  </div>
);

export default Footer;

