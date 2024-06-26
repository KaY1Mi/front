import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoGreen from '../../img/LogoGreen.svg';
import { useCookies } from 'react-cookie';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
            const response = await fetch(`${url}/api/auth`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error);
            } else {
                const data = await response.json();
                setToken('token', data.token);
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
                    type="email"
                    value={formData.email}
                    name='email'
                    placeholder="E-mail"
                    required
                    className='w-[400px] my-5 py-3 text-white font-nunito font-regular bg-transparent border-b-4 appearance-auto border-[#CEBCFF] focus:outline-none'
                />
                <input
                    onChange={handleInputChange}
                    type="password"
                    value={formData.password}
                    name='password'
                    placeholder='Пароль'
                    required
                    className='w-[400px] my-5 py-3 text-white font-nunito font-regular bg-transparent border-b-4 border-[#CEBCFF] focus:outline-none'
                />

                {errors && <div className='text-red-500'>{errors}</div>}
                <button
                    type='submit'
                    className='bg-[#D2FF1F] text-black font-nunito font-bold text-2xl px-14 py-4 my-5 hover:rounded-[20px] transition-all ease-linear'
                >
                    Войти
                </button>
            </form>
        </div>
    );
}

export default Login;
