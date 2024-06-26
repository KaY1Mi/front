import React from 'react';
import Btn from '../../../img/btn.svg';
import { useNavigate } from 'react-router-dom';

const Learn = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/Choose'); 
  };
  return (
    <div className='py-5 px-4 md:px-8 lg:px-16'>
      <h1 className='text-center font-nunito font-bold text-3xl md:text-5xl lg:text-7xl my-10 text-white'>
        Что ты получишь
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
        <div className='py-4 px-10 flex justify-center items-center text-center bg-transparent sm:bg-[#D2FF1F] sm:border-none border-2 border-[#D2FF1F] font-nunito font-bold text-white sm:text-black rounded-[15px] text-sm md:text-base lg:text-lg'>
          Полезные ресурсы  
        </div>

        <div className='py-4 px-10 flex justify-center items-center text-center bg-transparent sm:bg-white sm:border-none border-2 border-white font-nunito font-bold text-white sm:text-black rounded-[15px] text-sm md:text-base lg:text-lg'>
          Много теории
        </div>

        <div className='py-4 px-10 flex justify-center items-center text-center bg-transparent sm:bg-[#CEBCFF] sm:border-none border-2 border-[#CEBCFF] font-nunito font-bold text-white sm:text-black rounded-[15px] text-sm md:text-base lg:text-lg'>
          Опыт
        </div>

        <div className='py-4 px-10 flex justify-center items-center text-center bg-transparent sm:bg-[#D2FF1F] sm:border-none border-2 border-[#D2FF1F] font-nunito font-bold text-white sm:text-black rounded-[15px] text-sm md:text-base lg:text-lg'>
          Тесты для усвоения материала
        </div>

        <div className='py-4 px-10 flex justify-center items-center text-center bg-transparent sm:bg-white sm:border-none border-2 border-white font-nunito font-bold text-white sm:text-black rounded-[15px] text-sm md:text-base lg:text-lg'>
          Качественный материал
        </div>

        <div className='py-4 px-10 flex justify-center items-center text-center bg-transparent sm:bg-[#CEBCFF] sm:border-none border-2 border-[#CEBCFF] font-nunito font-bold text-white sm:text-black rounded-[15px] text-sm md:text-base lg:text-lg'>
          Новый навыки  
        </div>

      </div>

      <button 
        type="button" 
        className='flex justify-between items-center p-5 my-5 rounded-[20px] w-full bg-[#FF4710] py-8 transform shadow-lg transition duration-300 animate-pulse hover:scale-105'
        onClick={handleNavigate}
      >
        <img className='h-8 w-8 md:h-12 md:w-12' src={Btn} alt="" />
        <span className='uppercase font-nunito font-black text-white text-[18px] lg:text-3xl  '>Начать Обучение!</span>
        <img className='h-8 w-8 md:h-12 md:w-12' src={Btn} alt="" />
      </button>
  
    </div>
  );
}

export default Learn;
