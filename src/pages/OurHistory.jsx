import React from "react";
import ImgCruz from "../assets/images/imagenCruz.png"
import ArrowButton from "../components/arrowbuttons/ArrowButton";

const OurHistory = () => {
  return (
    <div className="mt-[88px] md:mt-28 lg:mt-32 w-[80%] mx-auto">
      <div className="flex flex-wrap justify-between">
        <div className="lg:w-[45%] my-auto">
          <h1 className="text-xl md:text-5xl text-LetterColor font-poppinsSemiBold mt-3 mb-5 text-start ">
            Nuestra
            <span className="text-primaryColor font-poppinsBold">  Historia</span>
          </h1>
          <div className="my-8">
            <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold">1947</h2>
            <p className="text-LetterColor text-xl md:text-lg lg:text-xl text-justify">Las  Madres de Desamparados  habíamos  llegado a Gijón con los Jesuitas a la fundación de Natahoyos.</p>
          </div>
          <div className="my-8">
            <h2 className="text-2xl md:text-4xl text-LetterColor font-poppinsExtraBold">1957</h2>
            <p className="text-LetterColor text-xl text-justify">Nos mudamos a la Avenida de Portugal, donde acogimos a niñas pobres y desamparadas.</p>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={ImgCruz} alt="Imagen de una cruz" className="" />
        </div>
      </div>
      <div className="bg-slate-500 w-full flex justify-center">
      <ArrowButton rotate={"down"}/>
      </div>
    </div>
  );
};

export default OurHistory;
