import React from 'react'
import LogoW from '../../../img/LogoW.svg'
import { NavLink } from 'react-router-dom';
import Tg from '../../../img/telegram.svg'
import Vk from '../../../img/vk.svg'

const FooterItalia = () => {
    return (
        <footer className='flex flex-row md:flex-row justify-between items-center p-5 mt-5 bg-[#FF4710] rounded-[20px] md:mt-10 md:rounded-[40px]'>
          <div>
            <NavLink to="/home">
              <img className="h-8 md:h-12" src={LogoW} alt="Logo" />
            </NavLink>
          </div>
          <div>
            <p className='font-nunito font-medium text-white text-lg md:text-2xl'>©World Lang</p>
          </div>
          <div className="flex gap-x-5 md:gap-x-10">
            <a href="https://t.me/+rzzrnS5rCmo1OTQy" target="_blank" rel="noopener noreferrer">
              <img className='h-8 w-8 md:h-12 md:w-12' src={Tg} alt="Telegram" />
            </a>
            <a href="https://vk.com/club226210466" target="_blank" rel="noopener noreferrer">
              <img className='h-8 w-8 md:h-12 md:w-12' src={Vk} alt="VK" />
            </a>
          </div>
        </footer>
      );
    }

export default FooterItalia
