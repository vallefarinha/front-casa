import TitleCard from "../components/cards/ColaborateCard/TitleCard";
import DonationCard from "../components/cards/ColaborateCard/DonationCard";
import RegularText30 from "../components/texts/RegularText30";
import Title from "../components/title/Title";

function BecameAPartner() {
  return (
    <div className="w-[80%] mx-auto mb-10">
      <Title wordBlue={"Hazte socio y"} wordPink={"dona"}></Title>
      <RegularText30
        text={
          "Puedes hacer el donativo que estimes oportuno, mediante ingreso o transferencia en la cuenta corriente de la Casa de Acogida"
        }
      ></RegularText30>
      <TitleCard></TitleCard>
      <DonationCard></DonationCard>
    </div>
  );
}

export default BecameAPartner;
