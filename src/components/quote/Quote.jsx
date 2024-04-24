import rigthquote from "../../assets/icons/quoteright.svg";
import leftquote from "../../assets/icons/quoteleft.svg";

function Quote({quote, bgClass }) {
    return (
      <>

<div className={`bg-cover bg-no-repeat bg-center text-center text-xl font-poppinsMediumItalic relative ${bgClass} m-6`}>
      <img src={leftquote} className="h-8 absolute left-0 top-0" alt="" />
      <p className="text-xl md:text-xl lg:text-xl p-6 font-poppinsRegular text-LetterColor mb-4">{quote}</p>
      <img src={rigthquote} className="h-8 absolute right-0 bottom-0" alt="" />
    </div>
    
      </>
    );
  }
  
export default Quote