import Title from "../../components/title/Title";
import RegularText30 from "../../components/texts/RegularText30";
import TitleForm from "../form/TitleForm";

function TitleAllForm() {
    return (
        <div>
            <div className="flex flex-col items-center mx-auto">
                <Title wordBlue="Hazte" wordPink="socio" textAlign="center" />
            </div>
            
            <RegularText30
                text={
                    "Hazte socio  con una donación regular y únete a nuestra misión de cambio. Tu apoyo no solo fortalece nuestra causa, sino que también amplía nuestro alcance, permitiéndonos tocar más vidas."
                }></RegularText30>
                <RegularText30
                text={
                    "Al hacerte socio, te conviertes en parte de una comunidad que está trabajando activamente para un futuro mejor. Únete a gente que como tú, que creen que apoyar la maternidad es construir futuro."
                }></RegularText30>
                <RegularText30
                text={
                    "Rellena el siguiente formulario:"
                }></RegularText30>
                <div className="flex flex-col items-center justify-center mt-5 mb-1">
                <TitleForm wordBlue="Rellena el siguiente" wordPink="formulario" textAlign="center" />
                </div>
        </div>
    );
}

export default TitleAllForm;