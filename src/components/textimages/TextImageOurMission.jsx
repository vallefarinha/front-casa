import React from "react";

const TextImageOurMission = ({ paragraph, image }) => {
  return (
    <div className="mx-4 my-2 flex">
      <p className="font-poppinsRegular text-xl text-LetterColor mt-20 text-justify mr-10">
        {paragraph}
      </p>
      <img className="float-right h-96 -mt-16 mb-10" src={image} />
    </div>
  );
};

export default TextImageOurMission;
