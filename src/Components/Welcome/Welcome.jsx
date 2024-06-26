import React, { useState, useEffect } from 'react'
import { ReactTyped } from 'react-typed'
import Btn from './Btn'
import { useNavigate } from 'react-router-dom';

const Welcome = () => {

    const [isButtonVisible, setButtonVisible] = useState(false);
    const [isFadingOut, setFadingOut] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      const firstString = "Добро пожаловать в World Lang";
      const secondString = "Здесь вы изучите иностранные языки";
      const typeSpeed = 100;
      const startDelay = 1000;
  
      const totalTypingTime = firstString.length * typeSpeed + startDelay + secondString.length * typeSpeed;
  
      const timer = setTimeout(() => {
        setButtonVisible(true);
      }, totalTypingTime);
  
      return () => clearTimeout(timer);
    }, []);

    const handleButtonClick = () => {
        setFadingOut(true);
        setTimeout(() => {
          navigate('/home');
        }, 1000); 
      };

  return (
    <div className='container mx-auto text-center flex flex-col justify-center items-center h-screen'>
        <div className="">
            <ReactTyped 
                strings={["Добро пожаловать в <span class='Purple'>W</span>orld <span class='Green'>L</span>ang"]} 
                typeSpeed={50} 
                className='text-white font-nunito text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold h-screen '
                showCursor={false}
            />
        </div>
        <div className="py-10">
            <ReactTyped 
                strings={["Здесь вы <span class='Green'>изучите</span> иностранные языки"]} 
                typeSpeed={50} 
                startDelay={3500}
                showCursor={false}
                className=' text-white font-nunito text-xl sm:text-2xl md:text-3xl lg:text-4xl font-regular'

            />
        </div>
        {isButtonVisible && (
                <div className="transition-opacity duration-1000 ease-in-out opacity-100 transform translate-y-0">
                    <Btn 
                        onClick={handleButtonClick} 
                        className="text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5"
                    />
                </div>
            )}
    </div>
  )
}

export default Welcome
