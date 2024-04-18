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
  //  const formData = new FormData(refForm.current);     
          try {
            const result = await SendMail(templateID, refForm.current);
            console.log(result);
          } catch (error) {
            console.error(error);
          }
        };

        return (
          <div className="w-[80%] mx-auto">
            <form ref={refForm} onSubmit={handleSubmit}>
              <section className="md:h-screen">
                <TitleAllForm />
                <FormBlue />
                <MoneySelect />
                <Periodicity />
                <BankBlue />
                <DonationOption />
                <SendButtonForm />
              </section>
            </form>
            <div style={{ height: '100vh' }} />
          </div>
        );
      }

export default PartnerForm;
