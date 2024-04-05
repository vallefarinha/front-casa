import React from "react";

const ArrowButton = () => {
  return (
    <>
      <button
        type="button"
        className="text-LetterColor mt-20 bg-tertiaryColor  hover:bg-gray-400 focus:ring-2 focus:outline-none focus:ring-gray-200
        font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
        <span className="sr-only">Icon description</span>
      </button>
    </>
  );
};

export default ArrowButton;
