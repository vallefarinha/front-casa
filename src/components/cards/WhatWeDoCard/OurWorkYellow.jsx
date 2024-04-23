import React from 'react';
import OurWorkCardWithIcon from './OurWorkCardWithIcon';
import Title from '../../title/Title';
import OurWorkText from '../../texts/OurWorkText';
import leftbubbles from '../../../assets/icons/leftBubbles.svg';
import rightbubbles from '../../../assets/icons/rightBubbles.svg';
import homeyellowicon from '../../../assets/icons/homeyellowicon.svg';
import iconYellowHeart from '../../../assets/icons/iconYellowHeart.svg';
import iconYellowPin from '../../../assets/icons/iconYellowPin.svg';
import iconYellowLight from '../../../assets/icons/iconYellowLight.svg';
import iconYellowSmiley from '../../../assets/icons/iconYellowSmiley.svg';
import iconYellowCup from '../../../assets/icons/iconYellowCup.svg';




const OurWorkYellow = () => {
  return (
    <div className="w-full">
      <section className="flex w-[90%] md:w-[95%] mx-auto justify-center items-center">
        <img src={leftbubbles} alt="left bubbles" className='w-1/4'/>
        <Title
          wordBlue="Nuestro"
          wordPink="trabajo"
          textAlign="text-center"
        />
        <img src={rightbubbles} alt="right bubbles" className='w-1/4'/>
      </section>
      <OurWorkText />
      <div className="flex flex-col items-center justify-center w-[90%] md:w-[80%] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-2"> 
          <OurWorkCardWithIcon
            imgSrc={homeyellowicon}
            altText="yellow card"
            cardText="Desarrollo De Valores Humanos"
          />
          <OurWorkCardWithIcon
            imgSrc={iconYellowHeart}
            altText="yellow heart"
            cardText="Capacitación en Habilidades Maternales"
          />
          <OurWorkCardWithIcon
            imgSrc={iconYellowPin}
            altText="yellow pin"
            cardText="Fomento de la Responsabilidad"
          />
          <OurWorkCardWithIcon
            imgSrc={iconYellowLight}
            altText="yellow light"
            cardText="Descubrimiento de Potencialidades"
          />
          <OurWorkCardWithIcon
            imgSrc={iconYellowSmiley}
            altText="yellow smile"
            cardText="Acompañamiento Emocional"
          />
          <OurWorkCardWithIcon
            imgSrc={iconYellowCup}
            altText="yellow cup"
            cardText="Mejora de la Calidad de Vida"
          />
        </div>
      </div>
    </div>
  );
}

export default OurWorkYellow;
