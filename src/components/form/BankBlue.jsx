import rainbowpink from "../../assets/icons/rainbowpink.svg"
import TitleForm from "./TitleForm";
import BoxBlueAtom from "./BoxBlueAtom";

const BankBlue = () => {

  return (
    <div className="flex flex-col items-center justify-center mt-6 mb-4">
        <TitleForm wordBlue="Datos" wordPink="bancarios" textAlign="center" />
      
        <div className="relative w-1/2 h-1/2 flex flex-wrap mt-5 mb-2  bg-bgColorForm rounded-3xl">
          <div className="w-full sm:w-1/2 p-4">
            <BoxBlueAtom titleBox="Titular" name="accountholder" squareBlue="Ingrese el titular de la cuenta" type="text" />
            <BoxBlueAtom titleBox="IBAN" name="iban" squareBlue="Ingrese su IBAN" type="text" />
          </div>
          <img src={rainbowpink} alt="rainbowpink" className="w-[65px] h-[69px] absolute top-[52%] left-[68%] transform -translate-x-1/2 -translate-y-1/2 md:w-[178px] md:h-[170px] md:left-[78%] md:top-[42%]" />
        </div>
      
    </div>
  );
};

export default BankBlue;