import React from 'react'
import { useNavigate } from 'react-router-dom';

const Lesson3 = () => {

    const navigate = useNavigate();
    const handltest = () => {
    navigate('/English/lesson3/test');
    }
    
  return (
    <div className="bg-[#cebcff] min-h-screen pt-5">
      <div className="container mx-auto pt-2">
        <h1 className="font-nunito font-bold text-4xl lg:text-5xl xl:text-7xl text-[#885AEF] text-center lg:text-left my-10">
        Приветствия и представление в английском языке
        </h1>
        <p className="font-nunito text-lg lg:text-2xl text-black py-3 leading-loose">
        Приветствия и представление - это важные навыки, которые помогают вам начать общение на английском языке. Вот основные фразы и выражения, которые помогут вам в этом.
        </p>
        <div className="">
          <h2 className="font-nunito font-bold text-4xl lg:text-3xl xl:text-5xl text-[#885AEF] text-center lg:text-left my-10" >Приветствия</h2>
          <h3 className='font-nunito font-regular text-2xl '>Простые приветствия:</h3>
          <li className='font-nunito font-regular text-xl pt-10 '>Hello! (Привет!)</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Hi! (Привет!)</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Hey! (Привет!) - более неформальное</li>
        </div>
        
        <div className="">
          <h3 className='font-nunito font-regular text-2xl pt-10'>Доброе утро, день и вечер:</h3>
          <li className='font-nunito font-regular text-xl pt-10 '>Good morning! (Доброе утро!) - используется до полудня.</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Good afternoon! (Добрый день!) - используется после полудня до заката.</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Good evening! (Добрый вечер!) - используется после заката.</li>
        </div>

        <div className="">
          <h3 className='font-nunito font-regular text-2xl pt-10'>Прощания:</h3>
          <li className='font-nunito font-regular text-xl pt-10 '>Goodbye! (До свидания!)</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Bye! (Пока!)</li>
          <li className='font-nunito font-regular text-xl pt-10 '>See you later! (Увидимся позже!)</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Take care! (Береги себя!)</li>
        </div>

        <div className="">
          <h2 className="font-nunito font-bold text-4xl lg:text-3xl xl:text-5xl text-[#885AEF] text-center lg:text-left my-10" >Представление</h2>
          <h3 className='font-nunito font-regular text-2xl '>Как представиться:</h3>
          <li className='font-nunito font-regular text-xl pt-10 '>My name is [Your Name]. (Меня зовут [Ваше Имя].)</li>
          <li className='font-nunito font-regular text-xl pt-10 '>I'm [Your Name]. (Я [Ваше Имя].)</li>
        </div>

        <div className="">
          <h3 className='font-nunito font-regular text-2xl pt-10'>Спрашивать имя собеседника:</h3>
          <li className='font-nunito font-regular text-xl pt-10 '>What's your name? (Как вас зовут?)</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Who are you? (Кто вы?)</li>
        </div>

        <div className="">
          <h3 className='font-nunito font-regular text-2xl pt-10'>Дополнительные вопросы для знакомства:</h3>
          <li className='font-nunito font-regular text-xl pt-10 '>Where are you from? (Откуда вы?)</li>
          <li className='font-nunito font-regular text-xl pt-10 '>What do you do? (Чем вы занимаетесь?)</li>
          <li className='font-nunito font-regular text-xl pt-10 '>How are you? (Как дела?)</li>
        </div>

        <button className='my-10 py-4 px-20 bg-[#9D76F3] font-nunito font-bold text-xl rounded-lg text-white hover:scale-110 transition-all ease-linear' onClick={handltest}>Далее</button>      
      </div>
    </div>
  )
}

export default Lesson3
