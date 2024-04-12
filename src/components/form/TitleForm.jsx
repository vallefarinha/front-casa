import React from 'react';

function TitleForm({ wordBlue, wordPink }) {
  return (
    <div style={{width: '900px'}} className="h-[186px] relative bg-rose-50 rounded-[20px] shadow flex items-center justify-center">
      <h1 className="text-6xl font-poppinsMedium">
        <span className="text-cyan-950">{wordBlue}</span>{" "}
        <span className="text-rose-500 font-poppinsExtraBold">
          {wordPink}
        </span>
      </h1>
    </div>
  );
}

export default TitleForm;
