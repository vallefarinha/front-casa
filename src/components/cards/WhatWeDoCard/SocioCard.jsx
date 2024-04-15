import { Accordion } from "flowbite-react";
import CardNumberTitle from "../../title/CardNumberTitle";
import TitleAboutUs from "../../title/TitleAboutUs";
import ColaboraRegularText from "../../texts/ColaboraRegularText";
import PrimaryBtn from "../../buttons/PrimaryBtn";

function SocioCard() {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title className=" bg-bgColorColaborateCards">
          <TitleAboutUs
            firstword={"2. Hazte"}
            secondword={"socio "}
          ></TitleAboutUs>
        </Accordion.Title>
        <Accordion.Content>
          <ColaboraRegularText
            wordone={
              "Contribuye de forma periódica con una aportación. Envíanos datos"
            }
            wordtwo={"usando este formulario."}
          ></ColaboraRegularText>
          <div>
            <PrimaryBtn data={""} go={""}></PrimaryBtn>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
export default SocioCard;
