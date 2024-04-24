import React from 'react';
import TaxText from '../texts/TaxText';
import TitleForm from './TitleForm';


const Tax = () => {
  return (
    <div className="flex flex-col items-center mx-auto mt-6 mb-4">
        <TitleForm wordBlue="Conoce los beneficios " wordPink="fiscales" textAlign="center" />
        <TaxText/>
    </div>
  )
}

export default Tax