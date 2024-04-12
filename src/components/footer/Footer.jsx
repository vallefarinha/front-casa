// import React from 'react';
// import { Link } from 'react-router-dom';
// import LogoNav from "../../assets/images/LogoSanta.svg";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";

// const ContactItem = ({ contactDetails }) => (
//   <div className="text-LetterColor text-sm md:text-sm font-normal font-poppinsRegular space-y-2">
//     {contactDetails}
//   </div>
// );

// const ContactInfo = () => (
//   <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10">
//     <ContactItem contactDetails={
//       <>
//         <div className="flex items-center">
//           <div className="ml-2">Avda. del profesor Pérez Pimentel 105 </div>
//         </div>
//         <div className="flex items-center">
//           <div className="ml-2">Barrio de la Guía 33203 Gijón - Asturias</div>
//         </div>
//       </>
//     }/>
//     <ContactItem contactDetails={
//       <>
//         <div className="flex items-center">
//           <div className="ml-2">tlfn. 985 363 314</div>
//         </div>
//         <div className="flex items-center">
//           <div className="ml-2"><a href="mailto:casadeacogidaguia@hotmail.es">
//             casadeacogidaguia@hotmail.es
//           </a></div>
//         </div>
//       </>
//     }/>
//     <ContactItem contactDetails={
//       <div className="flex items-center">
//         <div className="ml-2">redes sociales</div>
//       </div>
//     }/>
//   </div>
// );

// const Footer = () => (
//   <div className="bg-white w-full h-auto py-6 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between shadow-xl border-t-2 border-gray-200 relative bottom-0">
//     <div className="order-1 md:order-none flex items-center space-x-3 ml-20">
//       <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//         <img src={LogoNav} className="h-16 ml-10" alt="Logo" />
//       </Link>
//     </div>
//     <div className="order-2 md:order-none w-full md:w-1/2 flex flex-col items-center md:items-end"style={{marginRight: '10%'}}>
//       <div className="-mr-2">
//         <ContactInfo />
//       </div>
//     </div>
//   </div>
// );

// export default Footer;

import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import LogoNav from "../../assets/images/LogoSanta.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white w-full h-auto mx-auto p-4 font-poppins flex flex-wrap justify-between shadow-xl border-t-2 border-gray-200 mt-10">
      <div className="md:mx-auto lg:mx-0">
        <Link
          to="/"
        >
          <img src={LogoNav} className="h-12 lg:h-20" alt="Logo" />
        </Link>
      </div>
      <div className="w-full py-2 px-5 md:px-2 lg:w-[50%] flex flex-wrap justify-between ">
        <div className="flex flex-col gap-1 items-start ">
        <p className="text-primaryColor font-semibold">Información de contacto</p>
          <div className="lg:w-[70%] flex items-start gap-1 text-LetterColor hover:text-tertiaryColor hover:ml-2">
            <IoLocationOutline className="size-6" />
            <p className="flex flex-wrap text-sm">
              Avda. del profesor Pérez Pimentel 105 Barrio de la Guía 33203
              Gijón - Asturias
            </p>
          </div>
          <div className="lg:w-[30%] flex items-start gap-1 text-LetterColor hover:text-tertiaryColor  hover:ml-2">
            <LuPhone className="size-4" />
            <p className="text-sm"> 985 363 314</p>
          </div>
          <div className="flex items-center gap-1 text-LetterColor hover:text-tertiaryColor hover:ml-2 ">
            <HiOutlineMail className="size-4"/>
            <a href="mailto:casadeacogidaguia@hotmail.es" className="text-sm">
               casadeacogidaguia@hotmail.es
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-primaryColor font-semibold">Redes sociales</p>
          <ul className="flex flex-wrap gap-4 mb-6 text-sm font-medium lg:mx-auto text-LetterColor sm:mb-0">
            <li>
              <a href="#">
                <FaFacebook className="size-6 hover:text-tertiaryColor" />
              </a>
            </li>

            <li>
              <a href="#">
                <FaInstagram className="size-6 hover:text-tertiaryColor" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
