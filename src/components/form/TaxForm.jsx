import React from 'react'
import BoxBlue from "./BoxBlueAtom";
import penform from "../../assets/icons/penForm.svg";


const TaxForm = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-auto h-1/2 flex flex-wrap mt-5 mb-1 bg-bgColorForm rounded-3xl" >               
      <img src={penform} alt="penForm" className="absolute z-0"/>
          <div className="w-full p-5  z-15">

            <div className="flex flex-col md:flex-row z-15">
            <BoxBlue titleBox="Nombre *" name="name" squareBlue="Ingrese su nombre" type="text" />
            <BoxBlue titleBox="Apellidos *" name="secondname" squareBlue="Ingrese sus apellidos" type="text" />
            </div>

            <div className="flex flex-col md:flex-row">
            <BoxBlue titleBox="DNI/NIE *" name="dni" squareBlue="Ingrese su DNI/NIE" type="text" pattern="^([0-9]{8}[A-Za-z]|[XYZ][0-9]{7}[A-Za-z])$" />
            <BoxBlue titleBox="Email *" name="email" squareBlue="Ingrese su correo electrónico" type="email" />
            </div>
            
            <div className="flex flex-col md:flex-row z-10" >
            <BoxBlue titleBox="Dirección" name="address" squareBlue="Ingrese su dirección" type="text" />
            <BoxBlue titleBox="Ciudad" name="city" squareBlue="Ingrese su ciudad" type="text" />
            </div>

            <div className="flex md:flex-row flex-col">
            <BoxBlue titleBox="Código Postal" name="zipcode" squareBlue="Ingrese su código postal" type="text" pattern="^[0-9]{5}$" />
            <BoxBlue titleBox="Provincia" name="province" squareBlue="Ingrese su provincia" type="text" />
            </div>
            <div className="flex md:flex-row flex-col" >
            <BoxBlue titleBox="País" name="country" squareBlue="Ingrese su país" type="text" />
            <input type="checkbox" id="tratamiento-datos" name="tratamiento-datos"/>
          <label htmlFor="tratamiento-datos"> Acepto <a href="#personaldata">Tratamiento de datos personales</a> *</label>
            </div>

          </div>
          

    </div>
  
  </div>
  )
}

export default TaxForm