import React from 'react';

function TitleForm({ wordBlue, wordPink, textAlign }) {
  return (
    <div className="w-full max-w-[85%] h-[186px] relative bg-rose-50 rounded-[20px] shadow">
      <div className="w-[825px] h-[91px] mx-auto my-4">
        <h1 className={`my-4 ${textAlign} text-6xl font-poppinsMedium w-full`}>
          <span className="text-cyan-950">{wordBlue}</span>{" "}
          <span className="text-rose-500 font-poppinsExtraBold">
            {wordPink}
          </span>
        </h1>
      </div>
    </div>
  );
}

export default TitleForm;
