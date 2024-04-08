import imageMadrePetra from "../assets/images/imageMadrePetra.svg";
import madreYellowcircle from "../assets/images/madreYellowcircle.png";
import Title from "../components/title/Title.jsx";
import ArrowButton from "../components/arrowbuttons/ArrowButton.jsx";
import pinkRectangle3 from "../assets/images/pinkRectangle3.svg";
import pinkRectangle1 from "../assets/images/pinkRectangle1.svg";
import TitleHistory from "../components/title/TitleHistory.jsx";
import Number from "../components/title/Number.jsx";

function Petra() {
  return (
    <>
      <div className="mx-4 relative">
        <div className="flex-col items-center">
          <div className="flex items-center justify-center relative mt-28">
            <div className="flex-col">
              <Title wordBlue="Beata" wordPink="Petra de San José" />
              <p className="text-xl md:text-xl lg:text-xl text-justify font-poppinsRegular text-LetterColor mb-4">
                Ana Josefa fue un gran apóstol, orante y contemplativa. Supo
                tocar las fibras más sensibles de los que sufrían cualquiera que
                fuese la razón de su dolor. A continuación, revisa tu historia
                hermosa e inspiradora.
              </p>
            </div>

            <img src={imageMadrePetra} alt="madre petra" className="w-1/2" />
          </div>
          <ArrowButton rotate={"down"} />
        </div>

        <div className="relative">

  <img
    src={pinkRectangle1}
    alt="pinkRectangle"
    className="absolute object-cover inset-0 mx-auto z-0"
  />

  <div className="flex flex-col items-center justify-center relative z-10">
    <ArrowButton rotate={"up"} className="mb-4" />
    <img
      src={madreYellowcircle}
      alt="madre petra"
      className="mb-4 h-96 my-4"
    />
    <div className="flex-col w-full p-6">
    <Number wordBlue="1845" />
    <TitleHistory
      wordBlue="El comienzo de"
      wordPink="todo"
      className="mb-4 text-left" />
    </div>

    <p className="text-xl md:text-xl lg:text-xl text-justify p-6 font-poppinsRegular text-LetterColor mb-4">
      Ana Josefa Pérez Florido nació en el magnífico Valle de Abdalajís,
      Málaga, España, el 7 de diciembre de 1845. Fue la última de cinco
      hermanos. Perdió a su madre siendo niña y se cobijó en María
      adoptándola como tal:
    </p>
    <p className="text-xl md:text-xl lg:text-xl text-justify font-poppinsRegular text-LetterColor mb-4 p-6">
      Aunque heredó la fe de sus padres, crecía sin que nada hiciera
      pensar que su vida iba a dar un giro hacia la consagración. De
      hecho, se prometió con José Mir, un muchacho del pueblo. Rompió
      con él para seguir a Cristo: la gracia me solicitaba, explicó con
      posterioridad. Su padre no compartía su idea de ingresar en un
      convento, por lo que ese anhelo solo pudo hacerlo realidad cuando
      falleció.
    </p>
    <ArrowButton rotate={"down"} className="mb-4" />
  </div>
</div>

       </div>
    </>
  );
}

export default Petra;
