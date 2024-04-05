import WhatWeDoCardText from "../components/cards/WhatWeDoCard/WhatWeDoCardText";
import WhatWeDoCardWithImageLeft from "../components/cards/WhatWeDoCard/WhatWeDoCardWithImageLeft";
import WhatWeDoCardWithImageRight from "../components/cards/WhatWeDoCard/WhatWeDoCardWithImageRight";
import Earings from "../components/banners/Earings";
import Title from "../components/title/Title";
import heartBelly from "../assets/images/heartBelly.png";
import sunset from "../assets/images/sunset.png";
import studying from "../assets/images/studying.png";
import momAndDaughter from "../assets/images/momAndDaughter.png";

function WhatWeDo() {
  return (
    <>
      <div className="w-5-6">
      <Title
  wordBlue="Que"
  wordPink="hacemos"
/>
        <div className="flex flex-col">
          <WhatWeDoCardWithImageLeft
            img={heartBelly}
            title="Maternidad consciente"
            text="Favorecer el progreso de una maternidad consciente."
            shadowColor="shadow-quarteryColor"
          />
        </div>
        <div className="flex-col justify-between md:flex md:flex-row gap-6 m-6">
          <WhatWeDoCardText
            title="Ambiente hogareño"
            description="Establecer un ambiente hogareño que brinde serenidad y seguridad tanto a la madre como a su bebé."
            shadowColor="shadow-primaryColor"
          />
          <WhatWeDoCardText
            title="Ambiente hogareño"
            description="Establecer un ambiente hogareño que brinde serenidad y seguridad tanto a la madre como a su bebé."
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
        <div className="flex-col justify-between md:flex md:flex-row gap-6 m-6">
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
        </div>

        <div className="flex flex-col">
          <WhatWeDoCardWithImageLeft
            img={studying}
            title="Continuación de estudios"
            text="La oportunidad de proseguir con sus estudios (según su nivel)."
            shadowColor="shadow-primaryColor"
          />
        </div>
        <div className="flex-col justify-between md:flex md:flex-row gap-6 m-6">
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
        <div className="flex-col justify-between md:flex md:flex-row gap-6 m-6">
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
        <div className="w-full">
          <Earings />
        </div>
      </div>
    </>
  );
}

export default WhatWeDo;
