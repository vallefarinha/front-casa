import heartBelly from "../../../assets/images/heartBelly.png";

function WhatWeDoCardWithImage() {
  return (
    <div className="flex flex-col h-56 md:flex-row bg-white rounded-lg shadow-xl shadow-pink-700 justify-between hover:bg-gray-100">
    <div className="w-full md:w-1/2">
      <img className="object-cover w-full md:h-full rounded-t-lg md:rounded-l-lg md:rounded-r-none" src={heartBelly} alt="belly" />
    </div>
    <div className="w-full md:w-1/2 p-4 md:p-6">
      <div className="flex flex-col justify-center h-full">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Maternidade consciente</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Favorecer el progreso de una maternidad consciente.</p>
      </div>
    </div>
  </div>
);
}

export default WhatWeDoCardWithImage;