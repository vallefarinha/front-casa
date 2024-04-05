import Help from "../components/banners/Help";
import HouseGallery from "../components/sliders/HouseGallery";

function OurHouse() {
  return (
    <>
      <div className="lg:mt-[100px]">OurHome</div>
      <div className="lg:w-[65%] mx-auto my-8">
        <HouseGallery></HouseGallery>
      </div>
      <Help />
    </>
  );
}

export default OurHouse;
