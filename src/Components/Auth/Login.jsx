import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import LogoGreen from '../../img/LogoGreen.svg';
import { useCookies } from 'react-cookie';

const Login = () => {
    const navigate = useNavigate(); // Хук для навигации
    const [cookies, setCookie] = useCookies(['token', 'username']);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const url = process.env.REACT_APP_URL

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${url}/api/auth`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Ошибка входа');
            }

            const data = await response.json();
            setCookie('token', data.token, { path: '/' });
            setCookie('email', formData.username, { path: '/' });
            navigate('/home'); // Перенаправляем на страницу профиля после успешного входа
        } catch (error) {
            setErrors(error.message);
        }
    };

    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <img
                src={LogoGreen}
                alt="LogoGreen"
                className='my-5'
            />

            <input
                type="text"
                name="username"
                value={formData.username}
                autoComplete="off"
                onChange={handleInputChange}
                placeholder="Имя пользователя"
                className='w-[400px] my-5 py-3 text-white font-nunito font-regular bg-transparent border-b-4 appearance-auto border-[#CEBCFF] md:w-[300px] focus:outline-none'
            />

            <input
                type="password"
                name="password"
                autoComplete="off"
                value={formData.password}
                onChange={handleInputChange}
                placeholder='Пароль'
                className='w-[400px] my-5 py-3 text-white font-nunito font-regular bg-transparent border-b-4 border-[#CEBCFF] md:w-[300px] focus:outline-none'
            />

            {errors && <div className='text-red-500'>{errors}</div>}

            <button
                onClick={handleLogin}
                className='bg-[#D2FF1F] text-black font-nunito font-bold text-2xl px-28 py-4 my-5 hover:rounded-[20px] transition-all ease-linear'
            >
                Войти
            </button>

            <p className='my-5 text-white font-regular font-nunito'>
                Забыли пароль?
                <span className='text-[#D2FF1F] pl-2'>Восстановить</span>
            </p>
        </div>
    );
};

export default Login;
