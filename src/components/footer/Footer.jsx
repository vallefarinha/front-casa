import React from 'react';

const ContactInfo = () => (
  <div className="w-[473.79px] h-[91.59px]">
    <div className="text-LetterColor text-base font-normal font-poppinsRegular">
      Avda. del profesor Pérez Pimentel,105 Barrio de la Guía<br/>33203 Gijón - Asturias
    </div>
    <div className="text-LetterColor text-base font-normal font-poppinsRegular">
      tlfn. 985 363 314
    </div>
    <a href="mailto:casadeacogidaguia@hotmail.es" className="text-LetterColor text-base font-normal font-poppinsRegular underline leading-7 tracking-tight">
      casadeacogidaguia@hotmail.es
    </a>
  </div>
);

const Footer = () => (
  <div className="w-[1440.49px] h-[190px] relative shadow-xl">
    <div className="w-[1440px] h-[190px] left-0 top-0 absolute bg-white">
      <div className="w-[407px] h-6 left-[930px] top-[19px] absolute text-primaryColor text-xl font-semibold font-poppinsBold">
        Información de contacto
      </div>
    </div>
    <img className="w-[187.99px] h-[137.38px] left-[18px] top-[26px] absolute" src="src\assets\images\LogoSanta.svg" />
    <div className="w-[511.49px] h-[91.59px] left-[929px] top-[68px] absolute">
      <ContactInfo />
    </div>
  </div>
);

export default Footer;
