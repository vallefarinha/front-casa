import React from "react";
import CardNumberTitle from "../../title/CardNumberTitle";
const DonationCard = () => {
  return (
    <div className="flex flex-row items-center justify-between pt-16 pb-16 ">
      <img src="src/assets/images/cubic.png" alt="cubic imgage" />
      <div className=" bg-blue-500  w-2/3 rounded-lg">
        <CardNumberTitle
          wordGreen={"ENTIDAD BANCARIA:"}
          wordWhite={" CAIXA"}
        ></CardNumberTitle>
        <CardNumberTitle
          wordGreen={"NÚMERO DE CUENTA:"}
          wordWhite={"ES65 2100 2181 68 0200229273"}
        ></CardNumberTitle>
      </div>{" "}
      <img src="src/assets/images/yellowcircle.png" alt="yellow circles" />
    </div>
  );
};

export default DonationCard;
