import BankBlue from "../components/form/BankBlue";
import FormBlue from "../components/form/FormBlue";
import MoneySelect from "../components/form/MoneySelect"
import Periodicity from "../components/form/Periodicity";
import TitleAllForm from "../components/form/TitleAllForm";
import DonationOption from "../components/form/DonationOption";
import SendButtonForm from "../components/form/SendButtonForm";

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
      
    </div>
  );
}

export default PartnerForm;
