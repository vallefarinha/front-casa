import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';




const BoxBlue = ({ titleBox, squareBlue, id}) => {
    return (
      <div className="flex flex-col mb-6 w-full px-2">
        <label htmlFor={titleBox} className="text-LetterColor font-poppinsBold text-xl mb-2">{titleBox}</label>
        <input
          type="text"
          id={id}
          placeholder={squareBlue}
          className="border-2 border-quarteryColor rounded-lg py-4 px-6 shadow-xl focus:outline-none bg-white"
        />
      </div>
      
     )
    }

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

     emailjs.sendForm(serviceID, templateID,restForm.current, apikey)
     .then(result=>console.log(result.text))
     .catch(error=>console.error(error))



   }


  return (

    <div>
        <form ref={refForm} action="" onSubmit={handleSubmit}>
            <label   htmlFor="name">Name</label>
            <input placeholder='nombre' name="name" type="text" id="name" required />

            <label  htmlFor="email">Email</label>
            <input placeholder='email' name="name" type="email" id="email" required />

            <label  htmlFor="message">Email</label>
            <textarea name="message" maxLength="500" placeholder='Insert your message' required id="message" cols="30" rows="10"></textarea>

            <button>Send</button>

        </form>
    
    



    </div>
  )
}

export default FormMailing