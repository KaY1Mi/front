import React from 'react';
import { useNavigate } from 'react-router-dom';

const Lesson1 = () => {
  const navigate = useNavigate();

  const handlenext = () => {
    navigate('/English/lesson2');
  }

  return (
    <div className="bg-[#cebcff] min-h-screen pt-5">
      <div className="container mx-auto pt-2 max-w-full px-4 lg:px-16">
        <h1 className="font-nunito font-bold text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-8xl text-[#885AEF] text-center lg:text-left my-10">
          Введение
        </h1>
        <p className="font-nunito text-lg sm:text-xl md:text-2xl lg:text-2xl text-black py-3 leading-loose">
          Добро пожаловать на курс английского языка World Lang! Этот курс предназначен для студентов, стремящихся овладеть английским языком на высоком уровне. Независимо от вашего текущего уровня владения языком, наш курс предложит структурированный и всесторонний подход к обучению.
        </p>
        <p className="font-nunito text-lg sm:text-xl md:text-2xl lg:text-2xl text-black py-3 leading-loose">
          Мы начинаем с основ, чтобы создать прочную базу: алфавит, произношение, базовые грамматические конструкции и лексический минимум. Постепенно, по мере продвижения, мы будем углубляться в сложные аспекты языка, такие как идиомы, фразовые глаголы, сложные времена и условия.
        </p>
        <p className="font-nunito text-lg sm:text-xl md:text-2xl lg:text-2xl text-black py-3 leading-loose">
          Особое внимание в курсе уделяется развитию навыков аудирования, чтения, письма и говорения. Каждое занятие включает разнообразные упражнения и интерактивные задания, направленные на практическое применение изученного материала. Мы используем современные методы обучения, включая аудио- и видеоматериалы, онлайн-платформы и групповые обсуждения.
        </p>     
        <p className="font-nunito text-lg sm:text-xl md:text-2xl lg:text-2xl text-black py-3 leading-loose">
          Наш курс также знакомит студентов с культурными аспектами англоязычных стран, что поможет лучше понять контекст и нюансы языка. Успешное завершение курса даст вам уверенность в использовании английского в различных жизненных и профессиональных ситуациях.
        </p>
        <p className="font-nunito text-lg sm:text-xl md:text-2xl lg:text-2xl text-black py-3 leading-loose">
          Присоединяйтесь к нам и откройте для себя мир английского языка с World Lang!
        </p>

        <button className='my-10 py-4 px-10 sm:px-16 lg:px-20 bg-[#9D76F3] font-nunito font-bold text-lg sm:text-xl rounded-lg text-white hover:scale-110 transition-all ease-linear' onClick={handlenext}>Далее</button>      
      </div>
    </div>
  );
};

export default Lesson1;
