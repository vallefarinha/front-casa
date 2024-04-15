import Title from "../../components/title/Title";
import cloudPink from "../../assets/icons/cloudPink.svg";

function TitleAllForm() {
    return (
        <div className="flex flex-col items-center w-[85%] mx-auto mt-6">
            <Title wordBlue="Formulario de" wordPink="socio" textAlign="center" />
            <div className="flex flex-wrap justify-center space-x-4 mt-8 relative">
                <img src={cloudPink} alt="cloudpink" className="w-[45px] h-[49px] absolute top-[100%] left-[90%] transform -translate-x-1/2 -translate-y-1/2 md:w-[98px] md:h-[70px] md:left-[112%] md:top-[42%]" />
            </div>
        
    </div>
    );
}

export default TitleAllForm;