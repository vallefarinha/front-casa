import React from 'react';
import { Link } from 'react-router-dom';
import LogoNav from "../../assets/images/LogoSanta.svg";

const ContactInfo = () => (
  <div className="text-LetterColor text-sm md:text-sm font-normal font-poppinsRegular leading-none space-y-0">
    Avda. del profesor Pérez Pimentel,105 Barrio de la Guía<br/>
    33203 Gijón - Asturias<br/>
    <div className="leading-none">tlfn. 985 363 314</div>
    <div className="leading-none"><a href="mailto:casadeacogidaguia@hotmail.es" className="underline">
      casadeacogidaguia@hotmail.es
    </a> </div>
  </div>
);

const Footer = () => (
  <div className="bg-white w-full h-24 py-6 px-4 md:px-6 flex items-center justify-between shadow-xl border-t-2 border-gray-200">
    <div className="flex items-center space-x-3" style={{marginLeft: '9%'}}>
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={LogoNav} className="h-16" alt="Logo" />
      </Link>
    </div>
    <div className="w-2/3 md:w-1/2 flex flex-col items-end"style={{marginRight: '5%'}}>
      <div className="-mr-2">
        <div className="text-primaryColor text-lg font-semibold font-poppinsBold leading-none">
          Información de contacto
        </div>
        <ContactInfo />
      </div>
    </div>
  </div>
);

export default Footer;
