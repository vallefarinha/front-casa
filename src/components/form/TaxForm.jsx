import React from 'react'
import BoxBlue from "./BoxBlueAtom";

const TaxForm = () => {
  return (
    <div className="flex items-center justify-center mt-[-10px]">
    <div className="relative w-auto h-1/2 flex flex-wrap mt-5 mb-1" style={{backgroundColor: 'rgba(17, 138, 178, 0.6)', borderRadius: '20px'}}>
      
        <div className="w-full sm:w-1/2 p-4">
          <BoxBlue titleBox="Nombre *" name="name" squareBlue="Ingrese su nombre" type="text" />
          <BoxBlue titleBox="DNI/NIE *" name="dni" squareBlue="Ingrese su DNI/NIE" type="text" pattern="^([0-9]{8}[A-Za-z]|[XYZ][0-9]{7}[A-Za-z])$" />
          <BoxBlue titleBox="Email *" name="email" squareBlue="Ingrese su correo electrónico" type="email" />
          <BoxBlue titleBox="Ciudad" name="city" squareBlue="Ingrese su ciudad" type="text" />
          <BoxBlue titleBox="Código Postal" name="zipcode" squareBlue="Ingrese su código postal" type="text" pattern="^[0-9]{5}$" />
        </div>
        
        <div className="w-full sm:w-1/2 p-4">
          <BoxBlue titleBox="Apellidos *" name="secondname" squareBlue="Ingrese sus apellidos" type="text" />
          <BoxBlue titleBox="Dirección" name="address" squareBlue="Ingrese su dirección" type="text" />
          <BoxBlue titleBox="Provincia" name="province" squareBlue="Ingrese su provincia" type="text" />
          <BoxBlue titleBox="País" name="country" squareBlue="Ingrese su país" type="text" />
        </div>
    </div>
  
  </div>
  )
}

export default TaxForm