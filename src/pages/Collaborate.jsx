import React, { useRef } from 'react';
import SendMail from '../services/SendMail';
import TitleCard from "../components/cards/ColaborateCard/TitleCard";
import DonationCard from "../components/cards/ColaborateCard/DonationCard";
import RegularText30 from "../components/texts/RegularText30";
import Title from "../components/title/Title";
import TitleAboutUs from "../components/title/TitleAboutUs";
import ColaboraRegularText from "../components/colaboration/ColaboraRegularText";
import SendButtonForm from "../components/form/SendButtonForm";
import Legislation from "../components/form/Legislation"
import Tax from "../components/form/Tax";
import TaxForm from '../components/form/TaxForm';
import Swal from 'sweetalert2';





function Collaborate() {

  function showAlert(icon,text) {
    Swal.fire({
        position: "center",
        icon: icon,
        text: text,
        showCloseButton: true,
        showConfirmButton: false,
        timer: 7000,
        color: "#073B4C",
        // background:"#FBB",
        iconColor: "#073B4C",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
    });
}

  // const MySwal = withReactContent(Swal)
  const refForm = useRef();
  const handleSubmit = async (event) => {
    event.preventDefault();
   const templateID = import.meta.env.VITE_REACT_APP_TEMPLATE_ID_TAXES; 
   //const formData = new FormData(refForm.current);     
          try {
            const result = await SendMail(templateID, refForm.current);
            console.log(result);
            
            showAlert('success', "Su mensaje ha sido envidado con éxtio. Mire su email.");
            //alert("mensaje enviado con éxito, en breve recibirá una confirmación. Gracias")

          } catch (error) {
            console.error(error);
            showAlert('error', "Ha ocurrido un error en el envío de formulario. Por favor intentelo más tarde o pongase en contacto con casadeacogidaguia@hotmail.es .");
            //Swal.fire('Error', message, 'error')
          }
  };

  return (
    <div className="w-[80%] mx-auto">
    
      <Title wordBlue={"Hazte socio y"} wordPink={"dona"}></Title>
      <RegularText30
        text={
          "Puedes hacer el donativo que estimes oportuno, mediante ingreso o transferencia en la cuenta corriente de la Casa de Acogida"
        }
      ></RegularText30>
      <TitleCard>
        {" "}
        <TitleAboutUs firstword={"Hola"} secondword={"Mundo"}></TitleAboutUs>
      </TitleCard>
      <DonationCard></DonationCard>
      <TitleCard></TitleCard>
      <div className=" flex justify-center items-center">
        <div className="flex flex-col justify-center">
          <ColaboraRegularText
            wordone={"Contribuye de forma periódica con una aportación. "}
          />
          <ColaboraRegularText
            wordone={"Envíanos datos"}
            wordtwo={"usando este formulario. "}
          />
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        <form ref={refForm} onSubmit={handleSubmit}>
        <TaxForm></TaxForm>
        <SendButtonForm />
        </form>
      </div>

      <div className="flex justify-around" style={{ height: "60px" }}>
        <img src="src/assets/images/Corazon.png" alt="Corazon" />
        <img src="src/assets/images/octagono.png" alt="octagono" />
      </div>
      <TitleCard></TitleCard>
      <Tax/>
      <Legislation/>
     
    </div>
  );
}

export default Collaborate;