import React from 'react';
import backgroundImage from '../../../img/flower.svg'; 
import pc from '../../../img/pc.svg';
import watch from '../../../img/watch.svg';
import money from '../../../img/money.svg';
import heart from '../../../img/heart.svg';
import cardArrow from '../../../img/arrowcard.svg';
import { useNavigate } from 'react-router-dom';

const Card = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/English'); 
  };

  return (
    <div className='relative rounded-[30px] my-10 bg-[#CEBCFF] p-5'>
      <div className='relative z-10 p-5'>
        <h1 className='font-bold font-nunito text-3xl lg:text-6xl text-black text-center lg:text-left'>Английский язык</h1>
        <p className='font-regular font-nunito text-lg lg:text-2xl mt-2 lg:mt-[20px] text-black text-center lg:text-left'>Старт : 01.08.24</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center pt-3 lg:pt-[180px] pb-2 justify-center lg:justify-between relative z-10">
        <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4">
          <div className="flex items-center justify-center lg:justify-start">
            <img src={pc} className='w-6 h-6 lg:w-10 lg:h-10' alt="pc" />
            <p className='px-2 lg:px-5 font-nunito font-bold text-lg lg:text-3xl'>Online</p>
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <img src={watch} className='w-6 h-6 lg:w-10 lg:h-10' alt="watch" />
            <p className='px-2 lg:px-5 font-nunito font-bold text-lg lg:text-3xl'>No limit</p>
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <img src={money} className='w-8 h-8 lg:w-12 lg:h-12' alt="money" />
            <p className='px-2 lg:px-5 font-nunito font-bold text-lg lg:text-3xl'>Бесплатно</p>
          </div>
        </div>
        <div className="flex space-x-4 mt-4 lg:mt-0">
          <button className='flex items-center justify-center h-[40px] w-[40px] lg:h-[70px] lg:w-[70px] rounded-full bg-black'>
            <img className='h-4 w-4 lg:h-8 lg:w-8' src={heart} alt="heart" />
          </button>
          <button  className='flex items-center justify-center h-[40px] w-[40px] lg:h-[70px] lg:w-[70px] rounded-full bg-black  hover:scale-110 transition-all ease-linear'
            onClick={handleNavigate}>
            <img className='h-3 w-3 lg:h-5 lg:w-5' src={cardArrow} alt="card arrow" />
          </button>
        </div>
      </div>
      <div className='hidden xl:block'>
        <img 
          src={backgroundImage} 
          alt="background" 
          className='absolute right-0 bottom-0 w-[41.3%]' 
          style={{ zIndex: 0 }}
        />
      </div>
    </div>
  );
}

export default Card;
