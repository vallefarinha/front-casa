import React from 'react'
import OurWorkCardWithIcon from "./OurWorkCardWithIcon";


const OurWorkYellow = () => {
  return (
    <div>
        <OurWorkCardWithIcon
            imgSrc="src\assets\icons\homeyellowicon.svg" 
            altText="yellow card" 
            cardText="Desarrollo De Valores Humanos" 
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
  )
}

export default OurWorkYellow