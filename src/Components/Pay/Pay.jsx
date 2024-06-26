import React from 'react';
import LogoGreen from '../../img/LogoGreen.svg';

const Pay = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-[#0A0A0A] p-4 md:p-10'>
      <img 
        src={LogoGreen} 
        alt="" 
        className='py-5 w-40 md:w-52 lg:w-64'
      />
      <form className='w-full max-w-md'>
        <p className='font-nunito font-normal text-white text-[16px] md:text-[18px] py-2'>Номер карты</p>
        <input 
          type="text" 
          className='w-full py-2 font-nunito font-normal text-[#D2FF1F] text-[14px] md:text-[16px] rounded-lg bg-transparent border-[3px] appearance-none border-[#CEBCFF] focus:outline-none pl-2' 
          placeholder='1234 5678 9101 1121' 
        />

        <div className="flex flex-col md:flex-row pt-5">
          <div className="flex-1">
            <p className='font-nunito font-normal text-white text-[16px] md:text-[18px] py-2'>Срок действия</p>
            <input 
              type="text" 
              placeholder='MM/YY' 
              className='w-full py-2 font-nunito font-normal text-[#D2FF1F] text-[14px] md:text-[16px] rounded-lg bg-transparent border-[3px] appearance-none border-[#CEBCFF] focus:outline-none pl-2' 
            />
          </div>
          <div className="flex-1 md:pl-4 mt-4 md:mt-0">
            <p className='font-nunito font-normal text-white text-[16px] md:text-[18px] py-2'>CVV</p>
            <input 
              type="text" 
              placeholder='123'  
              className='w-full py-2 font-nunito font-normal text-[#D2FF1F] text-[14px] md:text-[16px] rounded-lg bg-transparent border-[3px] appearance-none border-[#CEBCFF] focus:outline-none pl-2' 
            />
          </div>
        </div>

        <button className='w-full my-6 bg-[#D2FF1F] py-4 font-nunito font-black text-lg md:text-xl rounded-[4px]'>10 000 ₽</button>

        <p className='font-nunito font-regular text-white text-[12px] md:text-[14px]'>
          Ваши персональные данные будут использованы для обработки<br/>
          вашего заказа, поддержки вашего взаимодействия на этом веб-<br/>
          сайте и для других целей, описанных в нашей политике<br/>
          конфиденциальности.
        </p>
      </form>
    </div>
  );
}

export default Pay;
