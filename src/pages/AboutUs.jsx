import OurValorsCard from "../components/cards/WhatWeDoCard/OurValorsCard";
import compromiso from "../assets/icons/compromiso.svg";
import security from "../assets/icons/security.svg";
import autonomy from "../assets/icons/autonomy.svg";
import respect from "../assets/icons/respect.svg";
import formation from "../assets/icons/formation.svg";
import development from "../assets/icons/development.svg";

function AboutUs() {
  return (
    <div>
      <OurValorsCard
        title={"Empatia y compromiso"}
        icon={compromiso}
        alt={"compromiso"}
        text={
          "Demostramos empatía y compromiso al acompañar a cada madre en su camino, brindándole apoyo emocional para superar dificultades y asegurando que nunca se sienta sola."
        }
      ></OurValorsCard>
      <OurValorsCard
        title={"Dignidad y Seguridad:"}
        icon={security}
        alt={"security"}
        text={
          "Promovemos la dignidad y seguridad de cada madre al mejorar su calidad de vida, proporcionándole un entorno estable y digno donde pueda sentirse protegida y cuidada."
        }
      ></OurValorsCard>
      <OurValorsCard
        title={"Responsabilidad y Autonomía:"}
        icon={autonomy}
        alt={"autonomy"}
        text={
          "Promovemos la dignidad y seguridad de cada madre al mejorar su calidad de vida, proporcionándole un entorno estable y digno donde pueda sentirse protegida y cuidada."
        }
      ></OurValorsCard>
      <OurValorsCard
        title={"Respeto y Autenticidad:"}
        icon={respect}
        alt={"respect"}
        text={
          "Cultivamos valores humanos esenciales como el respeto y la autenticidad, que son fundamentales para establecer relaciones interpersonales sólidas y saludables."
        }
      ></OurValorsCard>
      <OurValorsCard
        title={"Formación y Crianza Responsable:"}
        icon={formation}
        alt={"formation"}
        text={
          "Valoramos la formación en habilidades maternales, incluyendo la ternura, la paciencia y el sacrificio, para capacitar a las madres en la crianza de sus hijos con amor y seguridad."
        }
      ></OurValorsCard>
      <OurValorsCard
        title={"Empoderamiento y Desarrollo Personal:"}
        icon={development}
        alt={"development"}
        text={
          "Promovemos el descubrimiento y desarrollo de potencialidades en cada madre, proporcionándoles recursos y oportunidades que les permitan sentirse empoderadas y confiadas en sí mismas."
        }
      ></OurValorsCard>
    </div>
  );
}

export default AboutUs;
