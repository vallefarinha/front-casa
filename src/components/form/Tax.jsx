import React from 'react';
import TaxText from '../texts/TaxText';
import TitleForm from './TitleForm';


const Tax = () => {
  return (
    <div>
        <TitleForm wordBlue="Conoce los beneficios " wordPink="fiscales" textAlign="center" />
        <TaxText/>
    </div>
  )
}

export default Tax