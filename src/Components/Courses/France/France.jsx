import React from 'react'
import Header from '../../Home/MainScreen/Header'
import BigFlower from '../../../img/France/Bigflower.svg'
import Btn from '../../../img/btn.svg'
import one from '../../../img/France/one.svg'
import two from '../../../img/France/two.svg'
import three from '../../../img/France/three.svg'
import four from '../../../img/France/four.svg'
import Slider from './Slider'
import FooterFrance from './FooterFrance'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { useCookies } from 'react-cookie'

const Modal = ({ show, onClose }) => {
    const navigate = useNavigate();
  
    const handleLogin = () => {
      navigate('/login'); // Переход на страницу входа
    };
  
    const handleRegister = () => {
      navigate('/registration'); // Переход на страницу регистрации
    };
  
    if (!show) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg mx-2 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="font-nunito text-xl text-center font-bold mb-4 md:text-left">Войдите или зарегистрируйтесь</h2>
        <p className="mb-4 font-nunito text-center md:text-left">Для прохождения курса, пожалуйста, войдите в систему или зарегистрируйтесь.</p>
        <div className="flex justify-center space-x-4 md:justify-start">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={handleLogin}
          >
            Войти
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
            onClick={handleRegister}
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
    );
  };
  
  const France = () => {
    const [cookies] = useCookies(['token']);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!cookies.token) {
        setIsModalOpen(true);
      }
    }, [cookies.token]);
  
    const handlePay = () => {
      if (cookies.token) {
        navigate('/Pay');
      } else {
        setIsModalOpen(true);
      }
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div className="bg-[#0077B6] min-h-screen">
        <div className="container mx-auto pt-5">
            <Header />
            <div className="pt-10 lg:pt-20 xl:pt-32">
                <h1 className='font-nunito font-bold text-4xl lg:text-5xl xl:text-8xl text-[#023E8A] text-center lg:text-left'>
                    ФРАНЦУЗСКИЙ
                </h1>
                <h1 
                className='font-nunito font-bold text-4xl lg:text-5xl xl:text-8xl text-[#023E8A] text-center lg:text-right'>
                    ЯЗЫК
                </h1>

                <img 
                src={BigFlower} 
                className='mx-auto lg:float-right xl:float-none' alt="" 
                />

            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center text-center mt-10 lg:mt-20">
                <div className="mb-8 lg:mb-0 lg:mr-16">
                    <div className="font-nunito font-bold text-5xl lg:text-8xl text-[#023E8A] ">5</div>
                    <div className="font-nunito font-bold text-3xl lg:text-6xl text-white pt-3 lg:pt-5">Уроков</div>
                </div>
                <div className="mb-8 lg:mb-0 lg:mx-16">
                    <div className="font-nunito font-bold text-5xl lg:text-8xl text-[#023E8A] ">8.7</div>
                    <div className="font-nunito font-bold text-3xl lg:text-6xl text-white pt-3 lg:pt-5">Рейтинг курса</div>
                </div>
                <div>
                    <div className="font-nunito font-bold text-5xl lg:text-8xl text-[#023E8A] ">2</div>
                    <div className="font-nunito font-bold text-3xl lg:text-6xl text-white pt-3 lg:pt-5">Место</div>
                </div>
            </div>

            <button 
                type="button" 
                className='flex justify-between items-center p-5 my-10 rounded-[20px] w-full bg-[#023E8A] py-8 transform shadow-lg transition duration-300 animate-pulse hover:scale-105'
                onClick={handlePay}
                >
                <img className='h-12 w-12' src={Btn} alt="" />
                <span className='uppercase font-nunito font-black text-white text-3xl '>Купить курс !</span>
                <img className='h-12 w-12' src={Btn} alt="" />
            </button>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                <div className="rounded-[40px] bg-white lg:col-span-2">
                    <div className="h-full flex flex-col lg:flex-row justify-between items-center">
                        <div className="p-4">
                            <h1 className='text-[#023E8A]  font-nunito font-bold text-3xl lg:text-5xl'>
                            ВЫДАЧА МАТЕРИАЛОВ
                            </h1>
                            <p className='font-nunito font-regular text-lg lg:text-2xl mt-4'>
                            Мы предоставим материалы, которые<br />
                            были специально подготовлены<br />
                            для курса. Материал был тщательно<br />
                            проверен перед тем как мы вести его в<br />
                            программу.
                            </p>
                        </div>
                        <div className="p-4">
                            <img src={one} alt="Material" />
                        </div>
                    </div>
                </div>
                <div className="rounded-[40px] bg-white">
                    <div className="h-full flex flex-col justify-center p-4">
                        <h1 className='text-[#023E8A]  font-nunito font-bold text-3xl lg:text-5xl'>
                            Закрепление материала
                        </h1>
                        <p className='font-nunito font-regular text-lg lg:text-2xl mt-4'>
                            После прохождения каждого урока, мы<br />
                            предлагаем закрепить материал с<br />
                            помощью тестов. Каждый тест состоит<br />
                            из 3 вопросов.
                        </p>
                        <div className="mt-4">
                            <img src={two} alt="Test" />
                        </div>
                    </div>
                </div>
                <div className="rounded-[40px] bg-white">
                        <div className="h-full flex flex-col justify-center p-4">
                        <h1 className='text-[#023E8A]  font-nunito font-bold text-3xl lg:text-5xl'>
                            Преодоление границ
                        </h1>
                        <p className='font-nunito font-regular text-lg lg:text-2xl mt-4'>
                            Если вы считаете, что не способны достичь<br />
                            желаемого результата, то мы это исправим.<br />
                            World Lang станет новой зоной комфорта<br />
                            для вас.
                        </p>
                        <div className="mt-4">
                            <img src={three} alt="Boundary" />
                        </div>
                    </div>
                </div>
                <div className="rounded-[40px] bg-white lg:col-span-2">
                    <div className="h-full flex flex-col lg:flex-row justify-between items-center">
                        <div className="p-4">
                            <img src={four} alt="Theory" />
                        </div>
                        <div className="p-4">
                            <h1 className='text-[#023E8A]  font-nunito font-bold text-3xl lg:text-5xl'>
                            ИЗУЧЕНИЕ ТЕОРИИ С НУЛЯ
                            </h1>
                            <p className='font-nunito font-regular text-lg lg:text-2xl mt-4'>
                            Курс идеально подходит новичкам, потому<br />
                            что базовый уровень нацелен на то, чтобы<br />
                            объяснить каждую тему максимально<br />
                            подробно и без воды.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <Slider/>
            <FooterFrance />
        </div>
        <Modal show={isModalOpen} onClose={closeModal} />
    </div>

  )
}

export default France