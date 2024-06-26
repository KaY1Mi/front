import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoGreen from '../../img/LogoGreen.svg';
import { useCookies } from 'react-cookie';

const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
    });
    const [token, setToken] = useCookies(['token']);
    const navigate = useNavigate();
    const [errors, setErrors] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const url = process.env.REACT_APP_URL

    const handleInputSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${url}/api/reg`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error);
            } else {
                const data = await response.json();
                setToken('token', data.token);
                // Сохраняем имя пользователя в cookies
                setToken('email', formData.email);
                navigate('/home');
            }
        } catch (error) {
            setErrors(error.message);
        }
    };

    return (
        <div className=''>
            <form onSubmit={handleInputSubmit} className='h-screen flex flex-col justify-center items-center'>
                <img
                    src={LogoGreen}
                    alt="LogoGreen"
                    className='my-5'
                />
                <input
                    onChange={handleInputChange}
                    type="text"
                    value={formData.name}
                    placeholder="Имя"
                    autoComplete="off"
                    name='name'
                    required
                    className='w-[300px] my-5 py-3 text-white font-nunito font-regular bg-transparent border-b-4 appearance-auto border-[#CEBCFF] md:w-[400px] focus:outline-none'
                />
                {/* Остальные поля, которые необходимы для регистрации, оставляются здесь */}
                <input
                    onChange={handleInputChange}
                    type="email"
                    value={formData.email}
                    autoComplete="off"
                    name='email'
                    placeholder="E-mail"
                    required
                    className='w-[300px] my-5 py-3 text-white font-nunito font-regular bg-transparent border-b-4 appearance-auto border-[#CEBCFF] md:w-[400px] focus:outline-none'
                />
                <input
                    onChange={handleInputChange}
                    type="password"
                    value={formData.password}
                    autoComplete="off"
                    name='password'
                    placeholder='Пароль'
                    required
                    className='w-[300px] my-5 py-3 text-white font-nunito font-regular bg-transparent border-b-4 border-[#CEBCFF] md:w-[400px] focus:outline-none'
                />
                <input
                    onChange={handleInputChange}
                    type="password"
                    value={formData.confirm_password}
                    autoComplete="off"
                    name='confirm_password'
                    placeholder='Подтверждение пароля'
                    className='w-[300px] my-5 py-3 text-white font-nunito font-regular bg-transparent border-b-4 border-[#CEBCFF] md:w-[400px] focus:outline-none'
                />

                {errors && <div className='text-red-500'>{errors}</div>}
                <button
                    type='submit'
                    className='bg-[#D2FF1F] text-black font-nunito font-bold text-2xl px-14 py-4 my-5 hover:rounded-[20px] transition-all ease-linear'
                >
                    Создать аккаунт
                </button>
            </form>
        </div>
    );
};

export default Registration;
