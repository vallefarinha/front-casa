import React from 'react';
import TaxText from '../texts/TaxText';
import TitleForm from './TitleForm';


const Tax = () => {
  return (
    <div className="flex flex-col items-center mx-auto pt-10 pb-10">
        <TitleForm wordBlue="Conoce los beneficios " wordPink="fiscales" textAlign="center" />
        <div className="w-[80%] mx-auto">
        <TaxText/>
        </div>
    </div>
  )
}

export default Tax