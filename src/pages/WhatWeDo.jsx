import WhatWeDoCardText from "../components/cards/WhatWeDoCard/WhatWeDoCardText";
import WhatWeDoCardWithImageLeft from "../components/cards/WhatWeDoCard/WhatWeDoCardWithImageLeft";
import WhatWeDoCardWithImageRight from "../components/cards/WhatWeDoCard/WhatWeDoCardWithImageRight";
import Earings from "../components/banners/Earings";

function WhatWeDo() {
  return (
    <>
      <div className="flex flex-col mt-20">
        <h1 className="text-4xl text-left mb-5">Que hacemos</h1>
        <WhatWeDoCardWithImageLeft />
        <div className="flex justify-between my-4">
        <WhatWeDoCardText />
        <WhatWeDoCardText />
        </div>
        <WhatWeDoCardWithImageRight />
        <div className="flex justify-between my-4">
        <WhatWeDoCardText />
        <WhatWeDoCardText />
        </div>
        <WhatWeDoCardWithImageLeft />
        <div className="flex justify-between my-4">
        <WhatWeDoCardText />
        <WhatWeDoCardText />
        </div>
        <WhatWeDoCardWithImageRight />
        <div className="flex justify-between my-4">
        <WhatWeDoCardText />
        <WhatWeDoCardText />
        </div>
        <Earings />
      </div>
    </>
  );
}

export default WhatWeDo;
