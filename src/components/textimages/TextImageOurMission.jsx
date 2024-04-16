import React from "react";

const TextImageOurMission = ({ paragraph, image }) => {
  return (
    <div className="mb-5 flex flex-wrap justify-between ">
      <p className="font-poppinsRegular text-lg lg:text-xl text-LetterColor my-auto text-justify lg:w-1/2 ">
        {paragraph}
      </p>
      <img
        className="md:w-[40%] lg:w-[20%] mx-auto mt-5 lg:my-auto  "
        src={image}
      />
    </div>
  );
};

export default TextImageOurMission;
