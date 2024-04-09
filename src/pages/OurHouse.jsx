import Help from "../components/banners/Help";
import HouseGallery from "../components/sliders/HouseGallery";

function OurHouse() {
  return (
    <div>
      <div className="lg:w-[65%] mx-auto my-8">
      <h1 className="text-3xl md:text-5xl text-LetterColor font-poppinsSemiBold mt-3 mb-5 text-start pl-3">Nuestra <span className="text-primaryColor font-poppinsBold">Casa</span></h1>
        <HouseGallery></HouseGallery>
      </div>
      <Help />
    </div>
  );
}

export default OurHouse;
