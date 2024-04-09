import React from 'react';
import { Link } from 'react-router-dom';
import LogoNav from "../../assets/images/LogoSanta.svg";

const ContactItem = ({ contactDetails }) => (
  <div className="text-LetterColor text-sm md:text-sm font-normal font-poppinsRegular space-y-2">
    {contactDetails}
  </div>
);

const ContactInfo = () => (
  <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10">
    <ContactItem contactDetails={
      <>
        <div className="flex items-center">
          <div className="ml-2">Avda. del profesor Pérez Pimentel 105 </div>
        </div>
        <div className="flex items-center">
          <div className="ml-2">Barrio de la Guía 33203 Gijón - Asturias</div>
        </div>
      </>
    }/>
    <ContactItem contactDetails={
      <>
        <div className="flex items-center">
          <div className="ml-2">tlfn. 985 363 314</div>
        </div> 
        <div className="flex items-center">
          <div className="ml-2"><a href="mailto:casadeacogidaguia@hotmail.es">
            casadeacogidaguia@hotmail.es
          </a></div>
        </div>
      </>
    }/>
    <ContactItem contactDetails={
      <div className="flex items-center">
        <div className="ml-2">redes sociales</div>
      </div> 
    }/>
  </div>
);

const Footer = () => (
  <div className="bg-white w-full h-auto py-6 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between shadow-xl border-t-2 border-gray-200 relative bottom-0">
    <div className="order-1 md:order-none flex items-center space-x-3 ml-20">
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={LogoNav} className="h-16 ml-10" alt="Logo" />
      </Link>
    </div>
    <div className="order-2 md:order-none w-full md:w-1/2 flex flex-col items-center md:items-end"style={{marginRight: '10%'}}>
      <div className="-mr-2">
        <ContactInfo />
      </div>
    </div>
  </div>
);

export default Footer;