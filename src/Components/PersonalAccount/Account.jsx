import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Header from '../Home/MainScreen/Header';

const Profile = () => {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['userData', 'token']);
    const [userData, setUserData] = useState(null);

    const url = process.env.REACT_APP_URL

    useEffect(() => {
        const token = cookies.token;

        // Проверка наличия токена внутри useEffect
        if (!token) {
            navigate('/login');
            return;
        }

        const fetchUserData = async () => {
            try {
                const response = await fetch(`${url}/api/user/profile/`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Token ${token}`, // Используем токен из cookies
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Ошибка загрузки данных пользователя');
                }
                const userData = await response.json();
                setUserData(userData);
            } catch (error) {
                console.error('Ошибка загрузки данных пользователя:', error.message);
                navigate('/login');
            }
        };

        fetchUserData();
    }, [cookies.token, navigate]);

    const handleLogout = () => {
        removeCookie('token', { path: '/' });
        removeCookie('userData', { path: '/' });
        navigate('/home');
    };

    if (!userData) return <div>Loading...</div>;

    return (
        <div className="container mx-auto">
            <Header />
            <h2 className='text-6xl font-bold font-nunito text-white py-5'>Личный кабинет</h2>
            <div className="user-profile">
                <h3 className='font-nunito text-2xl text-white py-5'>Информация о пользователе</h3>
                <div className="flex">
                    <p className='flex  bg-white  py-10 px-20 my-5 rounded-lg'><strong className='font-nunito font-black text-2xl'>Имя:</strong> <span className=' mx-2 Font-nunito font-regular text-xl'>{userData.name || 'Нет данных'}</span></p>
                    <p className='flex bg-white  py-10 px-20 m-5 rounded-lg'><strong className='font-nunito font-bold text-2xl'>Email:</strong> <span className=' mx-2 Font-nunito font-regular text-xl'>{userData.email || 'Нет данных'}</span></p>
                </div>
                <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Выйти</button>
            </div>
        </div>
    );
};

export default Profile;
