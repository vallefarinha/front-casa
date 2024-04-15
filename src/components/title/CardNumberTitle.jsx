import React from "react";

const CardNumberTitle = ({ wordGreen, wordWhite, textAlign }) => {
  return (
    <h1
      className={`my-4 ml-5 ${textAlign} text-2xl font-poppinsSemiBold w-full`}
    >
      <span className="text-LetterColor">{wordGreen}</span>{" "}
      <span className=" text-white font-poppinsExtraBold">{wordWhite}</span>
    </h1>
  );
};

export default CardNumberTitle;
