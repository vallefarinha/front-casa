import React from "react";

const OurWorkCardWithIcon = ({ imgSrc, altText, cardText }) => {
  return (
    <div>
      <div className="flex mt-20 flex-col items-center pb-10">
        <img
          class="w-14 h-14 mb-3 rounded-full"
          src={imgSrc}
          alt={altText}
        />
        <span className="text-x font-poppinsRegular text-LetterColor">
          {cardText}
        </span>
      </div>
    </div>
  );
};

export default OurWorkCardWithIcon;
