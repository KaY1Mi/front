import React from 'react'
import one from './img/one.png'
import two from './img/two.png'
import three from './img/three.png'
import four from './img/four.png'
import { useNavigate } from 'react-router-dom'

const Choose = () => {

  const navigate = useNavigate();

  const handleEnglish = () => {
    navigate('/English')
  }

  const handleSpain = () => {
    navigate('/Spain')
  }

  const handleItalia = () => {
    navigate('/Italia')
  }

  const handleFrance = () => {
    navigate('/France')
  }


  return (
   <div className=" mx-auto ">
      <div className=" h-screen flex flex-wrap justify-center items-center" >

          <div className="w-[660px] h-[452px] bg-[#CEBCFF] flex flex-col justify-center items-center m-3 rounded-[40px] md:space-y-5 cursor-pointer" onClick={handleEnglish}>
            <img src={one} alt="" />
            <p className='font-nunito font-bold text-3xl pt-10 md:text-5xl py-4'>Английский Язык</p>
          </div>

          <div className="w-[660px] h-[452px] bg-[#D2FF1F] flex flex-col justify-center items-center m-3 rounded-[40px] md:space-y-5 cursor-pointer" onClick={handleSpain}>
            <img src={two} alt="" />
            <p className='font-nunito font-bold text-3xl pt-10 md:text-5xl md:pt-1'>Испанский язык</p>
          </div>

          <div className="w-[660px] h-[452px] bg-[#EC704B] flex flex-col justify-center items-center m-3 rounded-[40px] md:space-y-5 cursor-pointer" onClick={handleItalia}>
            <img src={three} alt="" />
            <p className='font-nunito font-bold text-3xl pt-10 md:text-5xl py-4'>Итальянский язык</p>
          </div>

          <div className="w-[660px] h-[452px] bg-[#0077B6] flex flex-col justify-center items-center m-3 rounded-[40px] md:space-y-5 cursor-pointer" onClick={handleFrance}>
            <img src={four} alt="" />
            <p className='font-nunito font-bold text-3xl pt-10 md:text-5xl  md:pt-1'>Французский язык</p>
          </div>
      </div>
   </div>
  )
}

export default Choose
