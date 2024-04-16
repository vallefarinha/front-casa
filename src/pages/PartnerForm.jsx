import React, { useRef } from 'react';
import SendMail from '../services/SendMail';

import BankBlue from "../components/form/BankBlue";
import FormBlue from "../components/form/formBlue";
import MoneySelect from "../components/form/MoneySelect"
import Periodicity from "../components/form/Periodicity";
import TitleAllForm from "../components/form/TitleAllForm";
import DonationOption from "../components/form/DonationOption";
import SendButtonForm from "../components/form/SendButtonForm";

function PartnerForm() {
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
    <div className="w-[80%] mx-auto">
      
      <section className="md:h-screen">
        <TitleAllForm />

        <form ref={refForm} onSubmit={handleSubmit}>
          
          <FormBlue />
      
        </form>
        
        </section>
      <section className="md:h-screen">
        
        <MoneySelect />
        <Periodicity />
        <BankBlue />
        <DonationOption />
        <SendButtonForm />

        <button type="submit">Send</button>
        
       
       
      </section>
      
    </div>
  );
}

export default PartnerForm;
