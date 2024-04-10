import React from 'react'
import OurWorkCardWithIcon from "./OurWorkCardWithIcon";
import Title from "../../title/Title"
import OurWorkText from "../../texts/OurWorkText";


const OurWorkYellow = () => {
  return (
    <div className="w-full">
    <section className="flex md:w-[80%] mx-auto">
        <Title 
            wordBlue="Nuestro"
            wordPink="trabajo"
            textAlign="text-center"
        />
      </section>
      <OurWorkText></OurWorkText>
        <div className="flex flex-col items-center justify-center w-[80%] mx-auto">
            <div className="flex justify-center w-full">
                <OurWorkCardWithIcon
                    imgSrc="src\assets\icons\homeyellowicon.svg" 
                    altText="yellow card" 
                    cardText="Desarrollo De 
                    Valores Humanos" 
                />
                <OurWorkCardWithIcon
                    imgSrc="src\assets\icons\iconYellowHeart.svg" 
                    altText="yellow heart" 
                    cardText="Capacitación en Habilidades Maternales" 
                />
                <OurWorkCardWithIcon
                    imgSrc="src\assets\icons\iconYellowPin.svg" 
                    altText="yellow pin" 
                    cardText="Fomento de la Responsabilidad" 
                />
            </div>
            <div className="flex justify-center w-full">
                <OurWorkCardWithIcon
                    imgSrc="src\assets\icons\iconYellowLight.svg" 
                    altText="yellow light" 
                    cardText="Descubrimiento de Potencialidades" 
                />
                <OurWorkCardWithIcon
                    imgSrc="src\assets\icons\iconYellowSmiley.svg" 
                    altText="yellow smile" 
                    cardText="Acompañamiento Emocional" 
                />
                <OurWorkCardWithIcon
                    imgSrc="src\assets\icons\iconYellowCup.svg" 
                    altText="yellow cup" 
                    cardText="Mejora de la Calidad de Vida" 
                />
            </div>
        </div>
    </div>
  )
}

export default OurWorkYellow
