import React from 'react';

const TaxText = () => {
  return (
    <div className="font-poppinsRegular text-justify mb-4 w-full text-LetterColor text-md lg:text-lg sm:text-xs">
      <br/>
      <p>Tras la entrada en vigor el 1 de enero de 2024 del <a href="https://www.boe.es/eli/es/rdl/2023/12/19/6/con" className=" text-primaryColor underline"
        target="_blank"
        rel="noopener noreferrer">Real Decreto-ley 6/2023</a> , del 19 de diciembre, <b>de los primeros 250€ que dones, se deducen  200€. </b>
        <br/><br/>Si eres donante particular, existen deducciones fiscales por  donativos a ONG que pueden ir del <b>40%</b> al <b>80%</b> en el Impuesto sobre la  Renta de las Personas Físicas (IRPF). 
        <br/><br/>Los nuevos porcentajes de deducción para <b>particulares</b> son los siguientes:</p>
      <ul style={{ listStyleType: 'square', paddingLeft: '60px' }}>
        <li>Deducción del 80% para los primeros 250 euros donados.</li> 
        <li>A partir de ese importe, es decir para el importe donado por encima de los primeros 250 euros:
          <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
            <li>Deducción del 40%.</li>
            <li>Deducción  del 45% siempre que en los dos años anteriores se haya realizado una  donación a la misma entidad al menos por el mismo importe.</li>
          </ul>
        </li>
      </ul>
      <br/><p>Las deducciones fiscales para <b>personas jurídicas</b> en el Impuesto de Sociedades son:</p>
      <ul style={{ listStyleType: 'square', paddingLeft: '60px' }}>
        <li>Deducción del 40% (con el límite del 15% de la base imponible).</li>
        <li>La  deducción pasa al 50% siempre que en los dos años anteriores se haya  realizado una donación a la misma entidad al menos por el mismo importe.</li>
      </ul>  
      
     <br/><p>Para  incluir el donativo en la Desgravación Fiscal (Declaración de la Renta) es necesario que cubras el siguiente formulario o nos facilites la información (nombre, apellidos, dirección postal, DNI y email) a través de nuestro email. </p>
     <br/>
     <p>Si tiene cualquier duda  estamos a su disposición en casadeacogidaguia@hotmail.es</p>
    </div>
  );
};

export default TaxText;