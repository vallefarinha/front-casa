import { Accordion } from "flowbite-react";
import React from "react";

function OurValorsCard() {
  return (
    <div className="mt-20 mx-4">
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title className=" font-poppinsBold text-2xl text-LetterColor">
            <div className="flex gap-5">
              {" "}
              <img
                className="w-14 h-14 mb-3"
                src="src\assets\icons\compromiso.svg"
                alt="compromiso"
              />
              Empatía y Compromiso:
            </div>
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 font-poppinsRegular text-xl text-LetterColor ml-10 pl-10">
              Demostramos empatía y compromiso al acompañar a cada madre en su
              camino, brindándole apoyo emocional para superar dificultades y
              asegurando que nunca se sienta sola.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}

export default OurValorsCard;
