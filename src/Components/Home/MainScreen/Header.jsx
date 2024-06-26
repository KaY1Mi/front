import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from "../../../img/Vector.svg";
import { useCookies } from 'react-cookie';
import menu from './img/menu.svg'

const Header = () => {
    const [cookies, removeCookie] = useCookies(['token', 'email']);
    const navigate = useNavigate(); // Хук для навигации
    const email = cookies.email || ''; // Получаем имя пользователя из cookies
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        // Удаляем куки при выходе
        removeCookie('token');
        removeCookie('email');
        // Редирект на страницу входа
        navigate('/login');
    };

    return (
        <div className="h-[50px] p-5 my-10 bg-white rounded-[20px] flex justify-between items-center  md:rounded-[20px] md:h-[70px]">

            <NavLink to="/home">
                <img 
                    src={Logo} 
                    alt="Logo" 
                    className="h-8 md:h-12"
                />
            </NavLink>

            <div className="relative">
                {email && (
                    <div className="flex items-center cursor-pointer" onClick={toggleMenu}>
                        <span className="mr-2 font-nunito font-light text-2xl">{email}</span>
                        <img src={menu} className="" />
                    </div>
                )}
                {isMenuOpen && email && (
                    <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48">
                        <NavLink to="/profile" className="block font-nunito font-regular text-[18px] px-4 py-2 hover:bg-gray-200" onClick={() => setIsMenuOpen(false)}>Редактировать профиль</NavLink>
                        <NavLink to="/liked" className="block font-nunito font-regular text-[18px] px-4 py-2 hover:bg-gray-200" onClick={() => setIsMenuOpen(false)}>Понравившиеся курсы</NavLink>
                        <NavLink to="#" className="block font-nunito font-regular text-[18px] px-4 py-2 hover:bg-gray-200" onClick={handleLogout}>Выход</NavLink>
                    </div>
                )}
            </div>

            {!email && (
                <div className="flex space-x-4 md:space-x-5">
                    <NavLink 
                        className='font-nunito font-bold text-lg md:text-2xl  md:px-10' 
                        to="/registration">Регистрация
                    </NavLink>

                    <NavLink 
                        className='font-nunito font-bold text-lg md:text-2xl  md:px-0' 
                        to="/login">Вход
                    </NavLink>
                </div>
            )}
        </div>
    );
};

export default Header;
