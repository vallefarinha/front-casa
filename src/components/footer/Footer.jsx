import React from 'react';
import { Link } from 'react-router-dom';
import LogoNav from "../../assets/images/LogoSanta.svg";

const ContactInfo = () => (
  <div className="text-LetterColor text-base font-normal font-poppinsRegular">
    Avda. del profesor Pérez Pimentel,105 Barrio de la Guía<br/>33203 Gijón - Asturias
    <br/>
    tlfn. 985 363 314
    <br/>
    <a href="mailto:casadeacogidaguia@hotmail.es" className="underline leading-7 tracking-tight">
      casadeacogidaguia@hotmail.es
    </a>
  </div>
);

const Footer = () => (
  <div className="bg-white w-full h-auto py-6 px-4 md:px-6 flex items-center justify-between shadow-xl">
    <div className="flex items-center space-x-3">
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={LogoNav} className="h-16" alt="Logo" />
    </Link>
      
    </div>
    <div className="w-2/3 md:w-1/2">
      <div className="text-primaryColor text-xl font-semibold font-poppinsBold">
        Información de contacto
      </div>
      <ContactInfo />
    </div>
  </div>
);

export default Footer;
