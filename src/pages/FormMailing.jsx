import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';





const FormMailing = () => {
   const refForm = useRef();
    //  estamos diciendo al navegador que no ejecute el comportamiento predeterminado de enviar el formulario.alguna acción adicional antes de enviar el formulario. Por ejemplo, podríamos validar los datos del formulario en JavaScript para asegurarnos de que estén en el formato correcto antes de enviarlos al servidor.
   const handleSubmit = (event) =>{
    //
     event.preventDefault();
     console.log(refForm.current);
     //defino constantes
     const serviceID = "service_4jji07i";
     const templateID = "template_duo14qk";
     //3 parametro
     const apikey ="bIhYCe7gWQU3IfgdW";

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

            <button>Send</button>

        </form>
    
    



    </div>
  )
}

export default FormMailing