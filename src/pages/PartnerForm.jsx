import BankBlue from "../components/form/BankBlue";
import FormBlue from "../components/form/formBlue";
import MoneySelect from "../components/form/MoneySelect"
import Periodicity from "../components/form/Periodicity";
import Title from "../components/title/Title";
import DonationOption from "../components/form/DonationOption";

function PartnerForm() {
  return (
    <div>
      <Title
          wordBlue="Formulario de"
          wordPink="socio"
          textAlign="text-center"
        />
      <FormBlue />
      <MoneySelect />
      <Periodicity />
      <BankBlue />
      <DonationOption />
    </div>
  );
}

export default PartnerForm;
