import React from "react";

const InputField = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col mb-6 w-full px-2">
      <label htmlFor={label} className="text-LetterColor font-poppinsBold text-xl mb-2">{label}</label>
      <input
        type="text"
        id={label}
        placeholder={placeholder}
        className="border-2 border-quarteryColor rounded-lg py-4 px-6 shadow-xl focus:outline-none bg-white"
      />
    </div>
  );
};

const ComponenteTres = () => {
  return (
<div className="relative w-full h-full flex flex-wrap" style={{backgroundColor: 'rgba(17, 138, 178, 0.6)', borderRadius: '20px'}}>
            <div className="w-full sm:w-1/2 p-4">
        <InputField label="Nombre *" placeholder="Ingrese su nombre" />
        <InputField label="DNI/NIE *" placeholder="Ingrese su DNI/NIE" />
        <InputField label="Email *" placeholder="Ingrese su correo electrónico" />
        <InputField label="Ciudad" placeholder="Ingrese su ciudad" />
        <InputField label="Código Postal" placeholder="Ingrese su código postal" />
      </div>
      <div className="w-full sm:w-1/2 p-4">
        <InputField label="Apellidos *" placeholder="Ingrese sus apellidos" />
        <InputField label="Teléfono" placeholder="Ingrese su número de teléfono" />
        <InputField label="Dirección" placeholder="Ingrese su dirección" />
        <InputField label="Provincia" placeholder="Ingrese su provincia" />
        <InputField label="País" placeholder="Ingrese su país" />
      </div>
    </div>
  );
};

export default ComponenteTres;
