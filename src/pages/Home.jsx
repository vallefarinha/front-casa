import Earings from "../components/banners/Earings";
import Help from "../components/banners/Help";
import HomeBannerSlider from "../components/sliders/HomeBannerSlider";

function Home() {
  return (
    <div className="lg:mt-[100px]">
      <div className="w-full">
        <HomeBannerSlider />
      </div>
      <Earings/>
      <Help />
    </div>
  );
}

export default Home;
