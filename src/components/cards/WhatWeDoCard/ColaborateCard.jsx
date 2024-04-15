import { Accordion } from "flowbite-react";
import CardNumberTitle from "../../title/CardNumberTitle";
import TitleAboutUs from "../../title/TitleAboutUs";
import ColaboraRegularText from "../../texts/ColaboraRegularText";

function ColaborateCard() {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title className=" bg-bgColorColaborateCards">
          <TitleAboutUs
            firstword={"1. Donación por"}
            secondword={"transferencia bancaria "}
          ></TitleAboutUs>
        </Accordion.Title>
        <Accordion.Content>
          <img
            src="../../src/assets/images/cubic.png"
            alt="yellow cirlces"
            className=""
          />
          <div className="flex flex-col items-center justify-center ">
            {" "}
            <div className="mx-0 bg-quarteryColor w-3/4 rounded-lg ">
              <CardNumberTitle
                wordGreen={"ENTIDAD BANCARIA:"}
                wordWhite={"CAIXA"}
              ></CardNumberTitle>
              <CardNumberTitle
                wordGreen={"NÚMERO DE CUENTA:"}
                wordWhite={"ES65 2100 2181 68 0200229273"}
              ></CardNumberTitle>
            </div>{" "}
            <div className=" p-10">
              {" "}
              <ColaboraRegularText
                wordone={"¿Deseas recibir el certificado de "}
                wordtwo={"donación?"}
              ></ColaboraRegularText>
              <ColaboraRegularText
                wordone={"Informa tu correo que nos pondremos en contacto."}
              ></ColaboraRegularText>
            </div>
            <form class="max-w-sm mx-auto">
              <div class="mb-5">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-LetterColor"
                >
                  Tu Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-LetterColor block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
                  placeholder="name@casadelaguia.com"
                  required
                />
              </div>
            </form>
          </div>
          <img
            src="../../src/assets/images/yellowcircle.png"
            alt="yellow cirlces"
            className=""
          />
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
export default ColaborateCard;
