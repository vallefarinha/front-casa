import TitleCard from "../components/cards/ColaborateCard/TitleCard";
import DonationCard from "../components/cards/ColaborateCard/DonationCard";
import RegularText30 from "../components/texts/RegularText30";
import Title from "../components/title/Title";
import TitleAboutUs from "../components/title/TitleAboutUs";
import ColaboraRegularText from "../components/colaboration/ColaboraRegularText";
import SendBtn from "../components/buttons/SendBtn";
import Legislation from "../components/form/Legislation"
import Tax from "../components/form/Tax";

function Collaborate() {
  return (
    <div className="w-[80%] mx-auto mb-10">
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
      <div className="flex justify-around" style={{ height: "60px" }}>
        <img src="src/assets/images/Corazon.png" alt="Corazon" />
        <SendBtn data="Enviar"></SendBtn>
        <img src="src/assets/images/octagono.png" alt="octagono" />
      </div>
      <TitleCard></TitleCard>
      <Tax/>
      <Legislation/>
    </div>
  );
}

export default Collaborate;
