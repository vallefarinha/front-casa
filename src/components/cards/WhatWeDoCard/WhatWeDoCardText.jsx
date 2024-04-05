function WhatWeDoCardText({ title, description, shadowColor }) {
  return (
    <div className={`h-48 p-6 mt-2 bg-bgColor content-center md:max-w-2xl rounded-lg shadow-xl ${shadowColor} hover:bg-gray-100`}>
    <h5 className="mb-2 text-xl font-poppinsBlack tracking-tight text-LetterColor text-center">{title}</h5>
    <p className="font-poppinsRegular text-LetterColor text-center ">{description}</p>
    </div>
  );
  }
  
  export default WhatWeDoCardText;
