import React from "react";
import TitleAboutUs from "../../title/TitleAboutUs";

const TitleCard = () => {
  return (
    <div className=" bg-bgColorColaborateCards h-20 rounded-xl flex items-center justify-start">
      {" "}
      <div className="ml-5">
        <TitleAboutUs
          firstword={"1. Donación por"}
          secondword={"transferencia bancaria"}
        ></TitleAboutUs>
      </div>
    </div>
  );
};

export default TitleCard;
