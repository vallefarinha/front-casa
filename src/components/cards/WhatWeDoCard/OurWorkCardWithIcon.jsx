import React from "react";

const OurWorkCardWithIcon = () => {
  return (
    <div>
      <div className="flex mt-20 flex-col items-center pb-10">
        <img
          class="w-14 h-14 mb-3 rounded-full"
          src="src\assets\icons\homeyellowicon.svg"
          alt="yellow card"
        />
        <span className="text-x font-poppinsRegular text-LetterColor">
          Desarrollo De Valores Humanos
        </span>
      </div>
    </div>
  );
};

export default OurWorkCardWithIcon;
