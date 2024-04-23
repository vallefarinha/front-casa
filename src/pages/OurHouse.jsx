import Help from "../components/banners/Help";
import HouseGallery from "../components/sliders/HouseGallery";
import Title from "../components/title/Title";

function OurHouse() {
  return (
    <div>
      <div className="lg:w-[65%] mx-auto mb-8">
        <div className="my-10">
          <Title wordBlue={"Conoce nuestra"} wordPink={"Casa"}></Title>
        </div>
        <HouseGallery></HouseGallery>
      </div>
      <Help />
    </div>
  );
}

export default OurHouse;
