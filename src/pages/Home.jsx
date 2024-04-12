import Earings from "../components/banners/Earings";;
import Help from "../components/banners/Help";

import HomeBannerSlider from "../components/sliders/HomeBannerSlider";
import InstagramPosts from "../components/sliders/InstagramPosts";
import OurWorkYellow from "../components/cards/WhatWeDoCard/OurWorkYellow"

function Home() {
  return (
    <div className="w-full">
      <div className="w-full mb-5">
        <HomeBannerSlider />
      </div>
      <OurWorkYellow />
      <Earings />
      <section className="md:w-[80%] mx-auto">
        <InstagramPosts />
      </section>
      <Help />
    </div>
  );
}

export default Home;
