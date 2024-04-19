import BankBlue from "../components/form/BankBlue";
import FormBlue from "../components/form/formBlue";
import MoneySelect from "../components/form/MoneySelect"
import Periodicity from "../components/form/Periodicity";
import TitleAllForm from "../components/form/TitleAllForm";
import DonationOption from "../components/form/DonationOption";
import SendButtonForm from "../components/form/SendButtonForm";
import Legislation from "../components/form/Legislation"

function PartnerForm() {
  return (
    <div className="w-[80%] mx-auto">
      
      <section className="md:h-screen">
        <TitleAllForm />
        <FormBlue />
      </section>
      <section className="md:h-screen">
        
        <MoneySelect />
        <Periodicity />
        <BankBlue />
        <DonationOption />
        <SendButtonForm />
      </section>
      <Legislation/>
    </div>
  );
}

export default PartnerForm;
