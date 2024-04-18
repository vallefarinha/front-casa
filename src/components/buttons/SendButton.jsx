import React from "react";
import PrimaryBtn from "../buttons/PrimaryBtn";

const SendButton = () => {
  return (
    <div className="flex justify-center">
      <PrimaryBtn data="Hazte Socio" go="/thanks" />
    </div>
  );
};
export default SendButton;
