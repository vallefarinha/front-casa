import React from 'react'
import bannerPendientes from '../../assets/banners/bannerPendientes.svg'
import bannerPendientesMobile from '../../assets/banners/pendientes-banner-mobile.svg'
import { useMediaQuery } from 'react-responsive';



function Earings() {
  const isMobile = useMediaQuery({ query: '(max-width: 758px)' });
  return (
    <>
    {isMobile ? (
      <img
        src={bannerPendientesMobile}
        alt="Banner"
        className="h-auto m-auto"
      />
    ) : (
      <img
        src={bannerPendientes}
        alt="Banner"
        className="w-[80%] h-auto m-auto"
      />
    )}
  </>
  )
}

export default Earings