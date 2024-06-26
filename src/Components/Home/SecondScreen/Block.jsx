import React from 'react';

const Block = () => {
  return (
    <div className="">
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 gap-4">
        <div className="bg-white text-black rounded-[20px] p-4 flex flex-col items-center justify-center">
          <span className="font-nunito font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl text-center">Более</span>
          <span className="font-nunito font-bold text-[#CEBCFF] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-center">1000</span>
          <span className="font-nunito font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl text-center">выпускников</span>
        </div>

        <div className="bg-white text-black rounded-[20px] p-4 flex flex-col items-center justify-center">
          <span className="font-nunito font-bold text-[#D2FF1F] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-center">4</span>
          <span className="font-nunito font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl text-center">Активных курса</span>
        </div>

        <div className="bg-white text-black rounded-[20px] p-4 flex flex-col items-center justify-center">
          <span className="font-nunito font-bold text-[#D2FF1F] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-center">20%</span>
          <span className="font-nunito font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl text-center">Скидки на обучение</span>
        </div>

        <div className="bg-white text-black rounded-[20px] p-4 flex flex-col items-center justify-center">
          <span className="font-nunito font-bold text-[#CEBCFF] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-center">1</span>
          <span className="font-nunito font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl text-center">Топ школа</span>
        </div>
      </div>
    </div>
  );
};

export default Block;
