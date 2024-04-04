import React from "react";
import { Link } from "react-router-dom";

const PrimaryBtn = ({data}) => {
  return (
    <>
      <a
        type="button"
        className="text-LetterColor bg-tertiaryColor hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-tertiaryColor font-medium rounded-3xl text-sm px-6 py-2 text-center"
      >
        {data}
      </a>
    </>
  );
};

export default PrimaryBtn;