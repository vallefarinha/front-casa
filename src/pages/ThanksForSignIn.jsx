import React from 'react'
import RegularText30 from "../components/texts/RegularText30"
import Title from "../components/title/Title"

const ThanksForSignIn = () => {
  return (
    <>
      <div className="w-full">
        <Title 
            wordBlue="Gracias por"
            wordPink="suscribirte"
            textAlign="text-center"
        />
        </div>
      <div className="w-full">
        <RegularText30 
            text="Tus datos se han guardado correctamente!"
            textAlign="center"
            size="xl"
        />
      </div>
      <div className="w-full">
        <RegularText30 
            text="Te hemos enviado un email y en breves nos pondremos en contacto contigo!"
            textAlign="center"
            size="xl"
        />
      </div>
      <div className='flex justify-center'>
      <img src="src\assets\icons\heartSun.svg" alt="heart Sun" className="w-1/4" />
      </div>
    </>
  )
}

export default ThanksForSignIn
