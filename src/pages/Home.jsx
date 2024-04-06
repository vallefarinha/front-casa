import Earings from "../components/banners/Earings";
import Help from "../components/banners/Help";
import HomeBannerSlider from "../components/sliders/HomeBannerSlider";
import InstagramPosts from "../components/sliders/InstagramPosts";

function Home() {
  return (
    <div className="mt-[88px] md:mt-[98px]  lg:mt-[97px] w-full">
      <div className="w-full mb-5">
        <HomeBannerSlider />
      </div>
      <Earings />
      <section>
        <InstagramPosts />
      </section>
      <Help />
    </div>
  );
}

export default Home;
