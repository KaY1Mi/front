import React from 'react'
import { useNavigate } from 'react-router-dom'
const FinalPage = () => {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/home');
    }
  return (
    <div className='bg-white '>
        <div className="container h-screen mx-auto flex flex-col justify-center items-center">
            <h1 className='font-bold font-nunito text-5xl text-center leading-relaxed'><span className='text-[#D2FF1F]'>Поздавляем</span>, вы прошли курс по английскому языку!</h1>
            <button className='my-10 py-4 px-20 bg-[#9D76F3] font-nunito font-bold text-xl rounded-lg text-white hover:scale-110 transition-all ease-linear' onClick={handleHome}>Домой</button>
        </div>
    </div>
  )
}

export default FinalPage
