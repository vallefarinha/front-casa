import WhatWeDoCardText from "../components/cards/WhatWeDoCard/WhatWeDoCardText";
import WhatWeDoCardWithImageLeft from "../components/cards/WhatWeDoCard/WhatWeDoCardWithImageLeft";
import WhatWeDoCardWithImageRight from "../components/cards/WhatWeDoCard/WhatWeDoCardWithImageRight";
import Earings from "../components/banners/Earings";
import Title from "../components/title/Title";
import heartBelly from "../assets/images/heartBelly.png";
import sunset from "../assets/images/sunset.png";
import studying from "../assets/images/studying.png";
import momAndDaughter from "../assets/images/momAndDaughter.png";
import hands from "../assets/images/hands.png";
import house from "../assets/icons/house.svg";
import heart from "../assets/icons/heart.svg";
import rainbow from "../assets/icons/rainbow.svg";
import blueBall from "../assets/icons/blueBall.svg";
import orangeLines from "../assets/icons/orangeLines.svg";
import irregularPinkCircle from "../assets/icons/irregularPinkCircle.svg";

function WhatWeDo() {
  return (
    <>
<div className="mx-4 relative w-[80%] mx-auto">
  <div className="flex items-center justify-center relative">
    <Title wordBlue="Que" wordPink="hacemos" />
    <div className="w-80 relative flex justify-center items-center mt-24">
      <img src={hands} alt="photo of hands" className="h-60 w-60 transform scale-110" />
      <div className="absolute bottom-0 right-0">
        <img
          src={irregularPinkCircle}
          alt="irregular pink circle"
          className="h-60 w-96 z-10 transform scale-125"
        />
        <img
          src={blueBall}
          alt="blue ball"
          className="h-12 absolute bottom-4 right-0 z-20"
        />
        <img
          src={orangeLines}
          alt="orange lines"
          className="h-16 absolute bottom-8 -right-12 z-20"
        />
      </div>
    </div>
  </div>
  <div className="flex-col">
    <div className="flex flex-col">
      <WhatWeDoCardWithImageLeft
        img={heartBelly}
        title="Maternidad consciente"
        text="Favorecer el progreso de una maternidad consciente."
        shadowColor="shadow-quarteryColor"
      />
    </div>
    <img src={house} alt="house" className="h-16 z-20 absolute mt-6"/>
    <div className="flex-col justify-between md:flex md:flex-row gap-6 my-6">
      <WhatWeDoCardText
        title="Ambiente hogareño"
        description="Establecer un ambiente hogareño que brinde serenidad y seguridad tanto a la madre como a su bebé."
        shadowColor="shadow-primaryColor"
      />
      <WhatWeDoCardText
        title="Relaciones sociales positivas"
        description="Incentivar la formación y conservación de relaciones sociales constructivas."
        shadowColor="shadow-tertiaryColor"
      />
    </div>
    <div className="flex flex-col">
      <WhatWeDoCardWithImageRight
        img={sunset}
        title="Dimensión espiritual"
        text="Ayudar a descubrir la dimensión trascendente de su existencia."
        shadowColor="shadow-secondaryColor"
      />
    </div>
    <div className="flex-col justify-between md:flex md:flex-row gap-6 my-6">
      <WhatWeDoCardText
        title="Crianza de los hijos"
        description=" Ayuda en la crianza, apoyo mediante pequeñas acciones con amor."
        shadowColor="shadow-quarteryColor"
      />
      <WhatWeDoCardText
        title="Independencia personal "
        description="Promover el desarrollo de la autonomía personal."
        shadowColor="shadow-tertiaryColor"
      />
      <img src={heart} alt="heart" className="h-24 z-30 absolute -right-6"/>
    </div>
    <div className="flex flex-col">
      <WhatWeDoCardWithImageLeft
        img={studying}
        title="Continuación de estudios"
        text="La oportunidad de proseguir con sus estudios (según su nivel)."
        shadowColor="shadow-primaryColor"
      />
    </div>
    <img src={rainbow} alt="rainbow" className="mt-6 h-20 z-20 absolute"/>
    <div className="flex-col justify-between md:flex md:flex-row gap-6 my-6">
      <WhatWeDoCardText
        title="Soporte Psicológico"
        description="Apoyo Psicológico."
        shadowColor="shadow-tertiaryColor"
      />
      <WhatWeDoCardText
        title="Asistencia personalizada"
        description="Acompañamiento personalizado en la vida diaria."
        shadowColor="shadow-quarteryColor"
      />
    </div>
    <div className="flex flex-col">
      <WhatWeDoCardWithImageRight
        img={momAndDaughter}
        title="Actividades recreativas"
        text="Educación en ocio y tiempo libre."
        shadowColor="shadow-secondaryColor"
      />
    </div>
    <div className="flex-col justify-between md:flex md:flex-row gap-6 my-6">
      <WhatWeDoCardText
        title="Seminarios educativos"
        description="Talleres formativos."
        shadowColor="shadow-primaryColor"
      />
      <WhatWeDoCardText
        title="Experiencias de aprendizaje"
        description="Fortalecer experiencias de aprendizaje y el acceso a los recursos sociales apropiados."
        shadowColor="shadow-quarteryColor"
      />
    </div>
  </div>
</div>
<div className="w-screen">
  <Earings />
</div>
</>
  );
}

export default WhatWeDo;
