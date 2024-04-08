import React from "react";
import ImgCruz from "../assets/images/imagenCruz.png";
import ImgCasa1963 from "../assets/images/imagenCasa1963.png";
import ImgCasa1968 from "../assets/images/imagenCasa1968.png";
import ImgCasa2006 from "../assets/images/imagenCasa2006.png";
import ArrowButton from "../components/arrowbuttons/ArrowButton";

const OurHistory = () => {
  return (
    <div className="mt-[88px] md:mt-28 lg:mt-32 mx-auto">
      <div className="bg-inherit">
        <div className="flex flex-wrap justify-around w-[80%] mx-auto mb-2">
          <div className="lg:w-[45%] my-auto ">
            <h1 className="text-xl md:text-5xl text-LetterColor font-poppinsSemiBold mt-3 mb-5 text-start ">
              Nuestra
              <span className="text-primaryColor font-poppinsBold">
                Historia
              </span>
            </h1>
            <div className="my-8">
              <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold">
                1947
              </h2>
              <p className="text-LetterColor text-xl md:text-lg lg:text-xl text-justify">
                Las Madres de Desamparados habíamos llegado a Gijón con los
                Jesuitas a la fundación de Natahoyos.
              </p>
            </div>
            <div className="my-8">
              <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold">
                1957
              </h2>
              <p className="text-LetterColor text-xl text-justify">
                Nos mudamos a la Avenida de Portugal, donde acogimos a niñas
                pobres y desamparadas.
              </p>
            </div>
          </div>
          <div className="md:w-[45%] ">
            <img
              src={ImgCruz}
              alt="Imagen de una cruz"
              className="max-w-full h-auto"
            />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <ArrowButton rotate={"down"} />
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 180 1440 100">
        <path
          fill="#118AB2"
          fill-opacity="0.6"
          d="M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,250.7C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className=" bg-quarteryColor bg-opacity-60 relative">
        <div className="w-full flex justify-center mb-5">
          <ArrowButton rotate={"up"} />
        </div>
        <div className="flex flex-wrap justify-around w-[80%] mx-auto">
          <div className="md:w-[40%]">
            <img
              src={ImgCasa1963}
              alt="Imagen de la casa en 1963"
              className="max-w-full h-auto"
            />
          </div>
          <div className="lg:w-[45%]">
            <div className="my-8">
              <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold">
                1963
              </h2>
              <p className="text-LetterColor text-xl md:text-lg lg:text-xl text-justify">
                La Madre General nos informó sobre la próxima fundación en
                Oviedo para niñas huérfanas y pobres, pero necesitábamos un
                lugar más grande. Buscamos una casa con patios y espacios
                adecuados, y encontramos un chalet que requería algunas obras.
              </p>
            </div>
            <div className="my-8">
              <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold">
                1965
              </h2>
              <p className="text-LetterColor text-xl text-justify">
                Se propone la compra de dicha finca en Gijón “Ya las huerfanitas
                tenían casa”. En Gijón, vivíamos todas en la Avenida de
                Portugal. Algunas Madres se trasladaron al Colegio Virgen Reina,
                mientras que otras, las destinadas a la Casa de la Guía,
                permanecimos un tiempo en Portugal.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <ArrowButton rotate={"down"} />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 130">
        <path
          fill="#118AB2"
          fill-opacity="0.6"
          d="M0,128L40,128C80,128,160,128,240,117.3C320,107,400,85,480,74.7C560,64,640,64,720,69.3C800,75,880,85,960,85.3C1040,85,1120,75,1200,74.7C1280,75,1360,85,1400,90.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>

      <div className=" bg-inherit">
        <div className="w-full flex justify-center mb-5">
          <ArrowButton rotate={"up"} />
        </div>
        <div className="w-[80%] lg:px-10 mx-auto">
          <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold">
            1967
          </h2>
          <p className="text-LetterColor text-xl md:text-lg lg:text-xl text-justify mb-2">
            El 27 de abril de 1967 marcó un hito importante, ya que fue la
            primera vez que las madres y las niñas durmieron juntas en la Guía.
          </p>
          <p className="text-LetterColor text-xl md:text-lg lg:text-xl text-justify">
            En octubre de 1967 se inauguró la Casa de la Guía, creando así dos
            comunidades en Gijón (en las calles Avilés y La Guía).Se celebraba
            la Eucaristía diariamente en la casa y las niñas recibían todo lo
            necesario; eran muy queridas por los asturianos, quienes a menudo
            ayudaban económicamente con limosnas generosas y pequeños donativos
          </p>
        </div>
        <div className="flex flex-wrap justify-around w-[80%] mx-auto">
          <div className="lg:w-[45%] my-8">
            <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold">
              1968
            </h2>
            <p className="text-LetterColor text-xl md:text-lg lg:text-xl text-justify">
              Para 1968, se reconoció que la casa era demasiado pequeña para
              nuestras actividades y era necesario construir. Se consideró la
              posibilidad de adquirir terrenos adyacentes, pero parecía
              imposible.
            </p>
          </div>
          <div className="md:w-[40%]">
            <img
              src={ImgCasa1968}
              alt="Imagen de la casa en 1967"
              className="max-w-full h-auto"
            />
          </div>
        </div>
        <div className="w-full flex justify-center mb-4">
          <ArrowButton rotate={"down"} />
        </div>
      </div>

      <div className=" bg-quarteryColor bg-opacity-60 py-4 lg:py-2 px-4 lg:px-7">
        <div className="w-full flex justify-center pb-2">
          <ArrowButton rotate={"up"} />
        </div>
        <div className="border-dashed border-4 border-secondaryColor p-4 mx-auto rounded-lg">
          <div className="w-[92%] lg:w-[80%] mx-auto flex flex-col gap-2">
            <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold">
              1972
            </h2>
            <p className="text-LetterColor text-xl md:text-lg lg:text-xl text-justify">
              Se tomó la decisión de que las niñas de la Casa Hogar asistieran a
              clases en el colegio durante el día y regresaran por la noche para
              dormir. Sin embargo, esta situación fue de corta duración.
            </p>
            <p className="text-LetterColor text-xl md:text-lg lg:text-xl text-justify">
              El 19 de octubre de 1972, se decidió unificar las dos comunidades,
              cerrando la Casa de la Guía y trasladando a todas las niñas al
              Colegio Virgen Reina, lo que llevó al cierre definitivo de la Casa
              Hogar en 1972.
            </p>
            <p className="text-LetterColor text-xl md:text-lg lg:text-xl text-justify">
              Una de las madres que vivió este momento recuerda con tristeza el
              día en que dejaron la Casa de la Guía. Arrodilladas junto al pozo
              que se encuentra en el prado, rezaron a San José y, con gran
              pesar, decidió arrojar una pequeña imagen del santo al fondo del
              pozo, pidiéndole que cuidara de la Casa donde habían sido tan
              felices con las niñas.
            </p>
            <p className="text-LetterColor text-xl md:text-lg lg:text-xl text-justify">
              A partir de ese momento, la Casa de la Guía quedó al servicio de
              la comunidad del Colegio de Gijón. Durante mucho tiempo, se
              utilizó como parvulario del colegio y también para convivencias de
              los alumnos, así como colonias de verano para los niños de los
              hogares. Con el paso del tiempo, la casa se deterioró
              considerablemente al no estar habitada. A pesar de intentos de
              venta, no fue posible, incluso después de colocar letreros de
              venta.
            </p>
            <p className="text-LetterColor text-xl md:text-lg lg:text-xl text-justify">
              Las experiencias de las niñas del Hogar de Madrid que venían a
              veranear inspiraron la idea de reavivar el futuro de esta casa, ya
              que su especial carácter no se entendía sin vida y sin niños.
              Cuando la vieja Casa Indiana se hundió, surgieron muchas voces que
              hablaban de reconstruirla, pensando en crear un hogar para niños
              necesitados, que fue el motivo principal por el que la
              Congregación la adquirió.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <ArrowButton rotate={"down"} />
        </div>
      </div>

      <div className="bg-inherit py-4">
        <div className="flex justify-center mt-2">
          <ArrowButton rotate={"up"} />
        </div>
        <div className="flex flex-wrap justify-around w-[80%] mx-auto">
          <div className="lg:w-[40%]">
            <img
              src={ImgCasa2006}
              alt="Imagen de la demolicion de la casa"
              className="max-w-full h-auto"
            />
          </div>
          <div className="lg:w-[45%]">
            <div className="my-8">
              <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold">
                2006
              </h2>
              <p className="text-LetterColor text-xl md:text-lg lg:text-xl text-justify">
                Recibieron una llamada de alguien vinculado al Hogar en Madrid,
                interesado en buscar ayuda para restaurar la Casa de la Guía y
                permitir que las niñas pudieran ir allí en verano. Se entregaron
                planos para avanzar en el proyecto de un nuevo hogar. Mientras
                tanto, la casa vieja fue demolida y se preparó el terreno para
                la nueva construcción.
              </p>
            </div>
            <div className="my-8">
              <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold">
                2008
              </h2>
              <p className="text-LetterColor text-xl md:text-lg lg:text-xl text-justify">
                El presidente de la vecindad de la Casa de la Guía propuso
                construir una ermita para la Virgen de la Guía en el terreno
                donde se estaba construyendo la nueva casa.(Se aceptó)
              </p>
            </div>
            <div className="my-8">
              <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold">
                2010
              </h2>
              <p className="text-LetterColor text-xl md:text-lg lg:text-xl text-justify">
                La obra nueva se completó el 29 de octubre de 2010.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <ArrowButton rotate={"down"} />
        </div>
      </div>


      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 190 1440 60">
        <path
          fill="#118AB2"
          fill-opacity="0.6"
          d="M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,250.7C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className=" bg-quarteryColor bg-opacity-60 px-4 lg:px-7">
        <div className="w-full flex justify-center pb-2">
          <ArrowButton rotate={"up"} />
        </div>
        <div className="border-dashed border-4 border-secondaryColor p-4 mx-auto rounded-lg">
          <div className="w-[92%] lg:w-[80%] mx-auto flex flex-col gap-2">
            <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold">
              2011
            </h2>
            <p className="text-LetterColor text-xl md:text-lg lg:text-xl text-justify">
              El Sr. Arzobispo de Oviedo recibió a Nuestra Madre y tres
              consejeras para discutir todo lo relacionado con la Ermita, y su
              construcción comenzó ese mismo año. También miembros del grupo
              próvida CIDEVIDA se reunieron con la Madre General y su consejo
              para proponer que la Casa de la Guía se convirtiera en un hogar
              para madres gestantes, apoyando la maternidad y luchando contra el
              aborto.
            </p>
            <p className="text-LetterColor text-xl md:text-lg lg:text-xl text-justify">
              La propuesta fue acogida y se acordó brindar toda la ayuda
              necesaria para emprender este proyecto, que se llamó "Casa de
              Acogida para Madres Gestantes Nuestra Señora de los Desamparados".
            </p>
            <p className="text-LetterColor text-xl md:text-lg lg:text-xl text-justify">
              Así, las Madres de Desamparados, junto con un grupo comprometido
              por la vida, han seguido este camino de acuerdo con la voluntad de
              Dios. El 25 de marzo, Monseñor Jesús Sanz bendijo las
              instalaciones de la casa de acogida con gran celebración,
              agradeciendo a Dios por la entrañable misión que nos había
              preparado, siguiendo el legado de Nuestra Fundadora, la Beata
              Petra, de “ser madres para los desamparados, como las madres son
              para sus hijos por amor natural”.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <ArrowButton rotate={"down"} />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 130">
        <path
          fill="#118AB2"
          fill-opacity="0.6"
          d="M0,128L40,128C80,128,160,128,240,117.3C320,107,400,85,480,74.7C560,64,640,64,720,69.3C800,75,880,85,960,85.3C1040,85,1120,75,1200,74.7C1280,75,1360,85,1400,90.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>


    </div>
  );
};

export default OurHistory;
