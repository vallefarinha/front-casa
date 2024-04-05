import Help from "../components/banners/Help"
import HouseGallery from "../components/sliders/HouseGallery"

function OurHouse() {
  return (
    <>
    <div className="lg:mt-[100px]">OurHome</div>
    <Help/>
    <div className="lg:w-[65%] m-auto">

    <HouseGallery></HouseGallery>
    </div>
    </>
  )
}

export default OurHouse