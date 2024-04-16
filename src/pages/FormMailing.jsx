import React, { useRef } from 'react';
import SendMail from '../services/SendMail';


const FormMailing = () => {

    const refForm = useRef();
    const handleSubmit = async (event) => {
    event.preventDefault();
    const templateID = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;      
            try {
              const result = await SendMail(templateID, refForm.current);
              console.log(result);
            } catch (error) {
              console.error(error);
            }
          };

          return (
            <div>
              <form ref={refForm} onSubmit={handleSubmit}>

               <label   htmlFor="name">Name</label>
               <input placeholder='nombre' name="name" type="text" id="name" required />
               
               <label  htmlFor="email">Email</label>
               <input placeholder='email' name="email" type="email" id="email" required /> 
               
                <button type="submit">Send</button>
              </form>
            </div>
          );
}

export default FormMailing