import TitleForm from "./TitleForm";
import BoxBlueAtom from "./BoxBlueAtom";

const BankBlue = () => {

  return (
    <div className="flex flex-col items-center justify-center mt-5 mb-1">
        <TitleForm wordBlue="Datos" wordPink="bancarios" textAlign="center" />
      
        <div className="relative w-1/2 h-1/2 flex flex-wrap mt-5 mb-1  bg-bgColorForm rounded-3xl justify-center items-center">
          <div className="w-full  p-5 z-15">
            <BoxBlueAtom titleBox="Titular" name="accountholder" squareBlue="Ingrese el titular de la cuenta" type="text" />
            <BoxBlueAtom titleBox="IBAN" name="iban" squareBlue="Ingrese su IBAN" type="text" />
          </div>
        </div>
    </div>
  );
};

export default BankBlue;