import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';


const BoxBlue = ({ titleBox, squareBlue, type }) => {
    return (
      <div className="flex flex-col mb-6 w-full px-2">
        <label htmlFor={titleBox} className="text-LetterColor font-poppinsBold text-xl mb-2">{titleBox}</label>
        <input
          type={type}
          id={titleBox}
          placeholder={squareBlue}
          className="border-2 border-quarteryColor rounded-lg py-4 px-6 shadow-xl focus:outline-none bg-white"
          required
        />
      </div>
    );
  };


const FormMailing = () => {
   const refForm = useRef();
    //  estamos diciendo al navegador que no ejecute el comportamiento predeterminado de enviar el formulario.alguna acción adicional antes de enviar el formulario. Por ejemplo, podríamos validar los datos del formulario en JavaScript para asegurarnos de que estén en el formato correcto antes de enviarlos al servidor.
   const handleSubmit = (event) =>{
    //
     event.preventDefault();
     console.log(refForm.current);
     //defino constantes
     const serviceID = import.meta.env.VITE_REACT_APP_SERVICE_ID;
     const templateID = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
     //3 parametro
     const apikey =import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

     emailjs.sendForm(serviceID, templateID,refForm.current, apikey)
     .then(result=>console.log(result.text))
     .catch(error=>console.error(error))

   }


  return (

    <div>
        <form ref={refForm} action="" onSubmit={handleSubmit}>

            <fieldset>
                <label   htmlFor="name">Name</label>
                <input placeholder='nombre' name="name" type="text" id="name" required />

            
            </fieldset>

            <fieldset>
            <label  htmlFor="email">Email</label>
            <input placeholder='email' name="email" type="email" id="email" required />
            </fieldset>

            <fieldset>
            <label  htmlFor="message">Email</label>
            <textarea name="message" maxLength="500" placeholder='Insert your message' required id="message" cols="30" rows="10"></textarea>
            </fieldset>

            

       
    
{/*        
            <div className="flex items-center justify-center mt-6">
                <div className="relative w-1/2 h-1/2 flex flex-wrap m-10" style={{backgroundColor: 'rgba(17, 138, 178, 0.6)', borderRadius: '20px'}}>
                        <div className="w-full sm:w-1/2 p-4">
                            <BoxBlue titleBox="Nombre *" squareBlue="Ingrese su nombre" />
                            <BoxBlue titleBox="DNI/NIE *" squareBlue="Ingrese su DNI/NIE" />
                            <BoxBlue titleBox="Email *" squareBlue="Ingrese su correo electrónico" />
                            <BoxBlue titleBox="Ciudad" squareBlue="Ingrese su ciudad" />
                            <BoxBlue titleBox="Código Postal" squareBlue="Ingrese su código postal" />
                        </div>
                
                        <div className="w-full sm:w-1/2 p-4">
                            <BoxBlue titleBox="Apellidos *" squareBlue="Ingrese sus apellidos" />
                            <BoxBlue titleBox="Teléfono" squareBlue="Ingrese su número de teléfono" />
                            <BoxBlue titleBox="Dirección" squareBlue="Ingrese su dirección" />
                            <BoxBlue titleBox="Provincia" squareBlue="Ingrese su provincia" />
                            <BoxBlue titleBox="País" squareBlue="Ingrese su país" />
                        </div>
                </div>
            </div> */}

        <button>Send</button>

        </form>
    



    </div>
  )
}

export default FormMailing