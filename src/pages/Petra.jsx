import imageMadrePetra from "../assets/images/imageMadrePetra.svg";
import madreYellowcircle from "../assets/images/madreYellowcircle.png";
import Title from "../components/title/Title.jsx";
import ArrowButton from "../components/arrowbuttons/ArrowButton.jsx";
import TitleHistory from "../components/title/TitleHistory.jsx";
import Number from "../components/title/Number.jsx";
import Quote from "../components/quote/Quote.jsx";
import petraImageGreenCircle from "../assets/images/petraImageGreenCircle.png";
import petraImageWithFlower from "../assets/images/petraImageWithFlower.png";
import photo1994 from "../assets/images/photo1994.png";
import { Link } from "react-router-dom";

function Petra() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="mx-4 my-6" id="section1">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mt-28">
            <div className="flex-col">
              <Title wordBlue="Beata" wordPink="Petra de San José" />
              <p className="text-xl md:text-xl lg:text-xl text-justify font-poppinsRegular text-LetterColor mb-4">
                Ana Josefa fue un gran apóstol, orante y contemplativa. Supo
                tocar las fibras más sensibles de los que sufrían cualquiera que
                fuese la razón de su dolor. A continuación, revisa tu historia
                hermosa e inspiradora.
              </p>
            </div>
            <img src={imageMadrePetra} alt="madre petra" className="w-5/12" />
          </div>
          <ArrowButton rotate={"down"} onClick={() => scrollToSection("section2")} />
        </div>

        <div className="bg-bgPinkPetra1 bg-cover h-full flex flex-col items-center justify-center" id="section2">
          <div className="flex flex-col items-center justify-center z-10 py-6">
          <ArrowButton rotate={"up"} onClick={() => scrollToSection("section1")} />
            <img
              src={madreYellowcircle}
              alt="madre petra"
              className="w-2/6 my-6"
            />
            <div className="flex-col w-full p-6">
              <Number wordBlue="1845" />
              <TitleHistory
                wordBlue="El comienzo de"
                wordPink="todo"
                className="mb-4 text-left"
              />
            </div>
            <div className="text-center">
              <p className="text-xl md:text-xl lg:text-xl text-justify p-6 font-poppinsRegular text-LetterColor mb-4">
                Ana Josefa Pérez Florido nació en el magnífico Valle de
                Abdalajís, Málaga, España, el 7 de diciembre de 1845. Fue la
                última de cinco hermanos. Perdió a su madre siendo niña y se
                cobijó en María adoptándola como tal:
              </p>
            </div>
            <div className="text-center">
              <Quote quote="Me postré delante de la Virgen suplicándole que no dejara de ser mi Madre, que yo procuraría santificarme ayudada por su gracia." />
            </div>
            <ArrowButton rotate={"down"} onClick={() => scrollToSection("section3")} />              
           </div>
        </div>

        <div className="h-full flex flex-col items-center justify-center" id="section3">
          <div className="flex flex-col items-center justify-center z-10 py-6">
          <ArrowButton rotate={"up"} onClick={() => scrollToSection("section2")} />
           <div className="flex-col w-full p-6">
              <Number wordBlue="1873" />
              <TitleHistory
                wordBlue="La abertura de la"
                wordPink="Casa de los Pobres"
                className="mb-4 text-left"
              />
            </div>
            <p className="text-xl md:text-xl lg:text-xl text-justify p-6 font-poppinsRegular text-LetterColor mb-4">
              Otros habrían desistido de su empeño dejando que se enfriara el
              celo apostólico inicial, o juzgando que tal vez su camino era
              distinto. Pero ella persistió en el intento con fe, prodigando el
              bien a su alrededor. En ese compás de espera, hasta que la
              voluntad de Dios se manifestó permitiéndole seguir adelante con su
              vocación, oraba y atendía a las personas más débiles del pueblo,
              en particular a los enfermos y ancianos que vivían una situación
              de abandono. Pensando en ellos, en 1873 abrió la conocida Casa de
              los pobres en la calle Alameda, cuya sede fue trasladada después
              frente a la parroquia de san Lorenzo. Compartían su ideal
              Frasquita, Isabel, Josefita, y Rafaela; todas fueron conocidas
              entre el vecindario como Hermanitas de los Pobres.
            </p>
            <ArrowButton rotate={"down"} onClick={() => scrollToSection("section4")} />             
          </div>
        </div>

        <div className="bg-bgPinkPetra2 bg-cover flex flex-col items-center justify-center py-6" id="section4">
        <ArrowButton rotate={"up"} onClick={() => scrollToSection("section3")} />               
          <div className="flex items-center w-full p-6 justify-between">
            <div className="flex-col">
              <Number wordBlue="1878" />
              <TitleHistory
                wordBlue="Ingresión en la"
                wordPink="Congregación de las Mercedarias de la Caridad"
                className="mb-4 text-left"
              />
            </div>
            <img
              src={petraImageGreenCircle}
              alt="madre petra"
              className="mb-4 h-72 my-4"
            />{" "}
          </div>
          <p className="text-xl md:text-xl lg:text-xl text-justify p-6 font-poppinsRegular text-LetterColor mb-4">
            En 1878, después de morir su padre, fiel al sentimiento que latía en
            su corazón: Señor, Vos sobre todas las cosas, y bien orientada por
            su confesor, ingresó en la Congregación de las Mercedarias de la
            Caridad. Siguieron sus pasos Frasquita, Isabel y Rafaela, artífices
            junto a ella de las obras de caridad en Abdalajís y en Álora.
            Josefita, con la ayuda de otras personas, continuó durante años al
            frente de la casa abierta en el Valle de Abdalajís.
          </p>
          <ArrowButton rotate={"down"} onClick={() => scrollToSection("section5")} />                   
           </div>

        <div className="h-full flex flex-col items-center justify-center" id="section5">
          <div className="flex flex-col items-center justify-center z-10 py-6">
          <ArrowButton rotate={"up"} onClick={() => scrollToSection("section4")} />                 
                <div className="flex-col w-full p-6">
              <Number wordBlue="1881" />
              <TitleHistory
                wordBlue="Adopta el nombre"
                wordPink="Petra de San José"
                className="mb-4 text-left"
              />
            </div>
            <p className="text-xl md:text-xl lg:text-xl text-justify p-6 font-poppinsRegular text-LetterColor mb-4">
            Poco duró la estancia de las cuatro mujeres en el convento, porque
              a los pocos meses comprendieron que no era su camino. Fueron
              instantes difíciles ya que si bien querían seguir a Cristo,
              ignoraban la vía que debían tomar. Ana Josefa abrió su corazón al
              obispo de Málaga, D. Manuel Gómez Salazar, quien le marcó su
              sendero: ser fundadora. Y junto a las tres compañeras erigió la
              Congregación de Hermanas Madres de Desamparados y San José de la
              Montaña con el carisma Amor misericordioso. Su experiencia
              personal de orfandad que le había hecho volver sus ojos a María
              tomándola como Madre, revivió con particular fuerza en esos
              momentos. No tenía duda de que, en medio de la consagración y
              teniendo su vida centrada en Cristo, las religiosas podrían llevar
              la ternura maternal a todas las personas que carecían de hogar y
              de cariño, ya fuesen niños, jóvenes o ancianos. En 1881 profesó
              los votos temporales en la iglesia de San Juan Bautista, de
              Vélez-Málaga y tomó el nombre religioso de Petra de San José.
            </p>
            <ArrowButton rotate={"down"} onClick={() => scrollToSection("section6")} />             
              </div>
        </div>

        <div className="bg-bgPinkPetra3 bg-cover h-full flex flex-col items-center justify-center" id="section6">
          <div className="flex flex-col items-center justify-center z-10 py-6">
          <ArrowButton rotate={"up"} onClick={() => scrollToSection("section5")} />             
          <img
              src={petraImageWithFlower}
              alt="madre petra"
              className="mb-4 h-72 my-4"
            />
            <div className="flex-col w-full p-6">
            <Number wordBlue="1892" />
              <TitleHistory
                wordBlue="La fuerza de la"
                wordPink="virtud"
                className="mb-4 text-left"
              />
            </div>
            <div className="text-center">
              <p className="text-xl md:text-xl lg:text-xl text-justify p-6 font-poppinsRegular text-LetterColor mb-4">
              En 1892 en la iglesia de la casa de Ronda emitió los definitivos. Selló este instante con la siguiente determinación:
              </p>
            </div>
            <div className="text-center">
              <Quote quote="Me postré delante de la Virgen suplicándole que no dejara de ser mi Madre, que yo procuraría santificarme ayudada por su gracia." />
            </div>
            <div className="text-center">
              <p className="text-xl md:text-xl lg:text-xl text-justify p-6 font-poppinsRegular text-LetterColor mb-4">
              Por fortuna, sus numerosas cualidades le sirvieron para sobrellevar todos los contratiempos que surgieron. Era una mujer de recia personalidad, carácter equilibrado, y admirable capacidad para afrontar el día a día en medio del rigor, siempre con esperanza, alegría y sencillez, sabiéndose en manos de Dios. <br></br>
              Las dificultades de distinto signo, calumnias y persecuciones incluidas, no hicieron más que acrecentar sus virtudes. Quienes la vituperaron no hallaron en ella más respuesta que la caridad y el perdón. De algún modo previno a sus hijas de lo que podía recaer sobre la comunidad. Así, un día, celebrando entrañablemente la festividad de la epifanía en la que cada una ofrecía al Niño lo que brotaba de su interior, la fundadora les advirtió:
              </p>
            </div>
              <div className="text-center">
              <Quote quote="Hijas, si esto que hemos ofrecido ha sido de verdad, Nuestro Señor lo ha recibido y hay que prepararse para grandes trabajos. Pronto veremos los efectos de esta oblación. Pongamos el hombro para una cruz muy grande, y de seguro que estará cerca, porque Nuestro Señor no acostumbra a dilatar esta clase de gracias, cuando se las pedimos de todo corazón. Digo gracias porque no dejan de ser los trabajos favores extraordinarios que reserva el Señor para los suyos. Más tarde, en días de tribulación, recordábamos el ofrecimiento del día de Reyes, que una ofrecía su honra por amor a Jesucristo; la otra, quedarse desnuda y vivir pobre como Él; otra, desear ser perseguida." />
            </div>
            <ArrowButton rotate={"down"} onClick={() => scrollToSection("section7")} />             
              </div>
        </div>

        <div className="h-full flex flex-col items-center justify-center" id="section7">
          <div className="flex flex-col items-center justify-center z-10 py-6">
          <ArrowButton rotate={"up"} onClick={() => scrollToSection("section6")} />             
            <div className="flex-col w-full p-6">
              <Number wordBlue="1906" />
              <TitleHistory
                wordBlue="El triste"
                wordPink="adiós"
                className="mb-4 text-left"
              />
            </div>
            <p className="text-xl md:text-xl lg:text-xl text-justify p-6 font-poppinsRegular text-LetterColor mb-4">
            Al final de su generosa vida en pro de los necesitados, y después
              de haber fundado 10 casas, le sorprendió una grave enfermedad que
              le produjo gran sufrimiento, uniéndose a los muchos que ya había
              padecido. Entregó su alma a Dios en Barcelona, a los 60 años, el
              16 de agosto de 1906. A fuerza de amar llegaba a la cima soñada de
              la que habló a sus religiosas:
            </p>
            <div className="text-center">
              <Quote quote="Hijas es el amor quien debe prestarnos alas para subir más arriba." />
            </div>
            <ArrowButton rotate={"down"} onClick={() => scrollToSection("section8")} />             
          </div>
        </div>

        <div className="bg-bgPinkPetra4 flex flex-col items-center justify-center py-6" id="section8">
        <ArrowButton rotate={"up"} onClick={() => scrollToSection("section7")} />             
          <div className="flex items-center w-full p-6 justify-between">
            <div className="flex-col">
              <Number wordBlue="1994" />
              <TitleHistory
                wordBlue="La beatificación de la"
                wordPink="Madre Petra"
                className="mb-4 text-left"
              />
            </div>
            <img
              src={photo1994}
              alt="madre petra"
              className="mb-4 h-72 my-4"
            />{" "}
          </div>
          <div className="w-full text-center">
          <p className="text-xl md:text-xl lg:text-xl text-justify p-6 font-poppinsRegular text-LetterColor mb-4">
          Su devoción a san José, en cuyo honor había tomado su nombre, le ha conferido el título de apóstol josefino del siglo XIX. Dio a sus hijas como modelo para su santificación el de la Sagrada Familia. Aludiendo a Cristo, confesaba humildemente:
          </p>
          </div>
          <div className="text-center">
              <Quote quote="¡Ojalá que yo pudiese aprender las lecciones que siempre me ha dado! Pero soy tan miserable que parece que vamos a porfía: Él, con tanta misericordia a regalarme, y yo, con tanta frialdad e indiferencia en su santo servicio. Él me perdone y reciba mis deseos y buena voluntad, que ésta siempre la he tenido." />
            </div>
            <div className="w-full text-center">
            <p className="text-xl md:text-xl lg:text-xl text-justify p-6 font-poppinsRegular text-LetterColor mb-4">
            Juan Pablo II la beatificó el 16 de octubre de 1994.  </p>
          </div>          
          <ArrowButton rotate={"up"} onClick={() => scrollToSection("section1")} /> 
        </div>
</div>
    </>
  );
}

export default Petra;

