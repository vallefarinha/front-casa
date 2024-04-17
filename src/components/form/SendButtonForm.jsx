import React from "react";
import PrimaryBtn from "../buttons/PrimaryBtn";

const SendButtonForm = () => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <PrimaryBtn data="Hazte Socio" go="/thanks" />
    </div>
  );
};

export default SendButtonForm;
