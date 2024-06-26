import React from 'react'
import { useNavigate } from 'react-router-dom';

const Spain1 = () => {
    const navigate = useNavigate();
    const handlenext = () => {
        navigate('/Spain/Spain2');
    }
  return (
    <div className="bg-[#D2FF1F] min-h-screen pt-5">
      <div className="container mx-auto pt-2 max-w-full px-4 lg:px-16">
        <h1 className="font-nunito font-bold  text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-8xl text-[#84A501] text-center lg:text-left my-10">
          Введение
        </h1>
        <p className="font-nunito text-lg leading-loose sm:text-xl md:text-2xl lg:text-2xl text-black py-3 lg:leading-loose">
        Добро пожаловать на увлекательное путешествие в мир испанского языка! Этот курс не только представляет возможность освоить один из самых распространенных языков мира, но и открывает двери к многочисленным культурам, истории и искусству, которые сформировали его. Испанский язык, с его мелодичностью и выразительностью, привлекает не только своей звучностью, но и возможностью наслаждаться литературными произведениями, фильмами, музыкой и танцами из испаноязычных стран. Мы приглашаем вас на этот курс, чтобы вместе изучать не только грамматику и лексику, но и погружаться в культурное наследие, которое испанский язык так щедро предлагает. Под руководством опытных преподавателей вы узнаете не только о правилах языка, но и об обычаях, традициях и образе жизни людей из разных уголков испаноязычного мира. Давайте вместе откроем для себя мир испанского языка – языка страстей, красоты и культурного богатства!
        </p>

        <button className='my-10 py-4 px-10 sm:px-16 lg:px-20 bg-[#84A501] font-nunito font-bold text-lg sm:text-xl rounded-lg text-white hover:scale-110 transition-all ease-linear' onClick={handlenext}>Далее</button>      
      </div>
    </div>
  )
}

export default Spain1
