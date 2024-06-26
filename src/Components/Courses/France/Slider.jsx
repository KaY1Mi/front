import React, { useState } from 'react';
import miha from '../../../img/english/miha.png';
import alina from '../../../img/english/alina.png';
import star from '../../../img/english/Star.svg';
import right from '../../../img/english/arrowright.svg';
import left from '../../../img/english/arrowleft.svg';

const Slider = () => {
  const comments = [
    {
      name: 'Полина',
      image: alina,
      text: 'Была цель подтянуть уровень английского и вспомнить забытое, так как язык давно не практиковался. Друзья посоветовали World Lang, прошла вводный урок, все понравилось и решила заниматься. В итоге занимаюсь уже 3 месяца, всем довольна.',
      date: '21.03.24',
    },
    {
      name: 'Лиза',
      image: alina,
      text: 'Была цель подтянуть уровень английского и вспомнить забытое, так как язык давно не практиковался. Друзья посоветовали World Lang, прошла вводный урок, все понравилось и решила заниматься. В итоге занимаюсь уже 3 месяца, всем довольна.',
      date: '21.03.24',
    },
    {
      name: 'Михаил',
      image: miha,
      text: 'Прошел вводный урок, и сразу понял, что здесь мне помогут достичь нужного уровня английского. Занимаюсь всего месяц, но уже вижу результаты!',
      date: '15.04.24',
    },
    {
      name: 'Анна',
      image: alina,
      text: 'Очень довольна курсами World Lang! Преподаватели профессионалы, материал подается доступно и интересно. Спасибо!',
      date: '05.05.24',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % comments.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + comments.length) % comments.length);
  };

  return (
    <div className="px-4 md:px-8 lg:px-16">
      <h1 className='font-nunito font-bold uppercase text-4xl md:text-5xl lg:text-6xl text-center py-10 md:py-20 text-[#023E8A] '>Отзывы учеников</h1>
      <div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0">

        <div className="bg-white w-full md:w-[48%] rounded-[40px]">
          <div className="p-4">
            <div className="flex items-center space-x-4">
              <img src={comments[currentSlide].image} alt="" className="w-16 h-16" />
              <h1 className="font-nunito font-bold text-2xl">{comments[currentSlide].name}</h1>
            </div>

            <div className="mt-4">
              <p className="font-nunito font-light text-xl">{comments[currentSlide].text}</p>
            </div>

            <div className="flex items-center justify-between pt-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={star} alt="" className="w-5 h-5" />
                ))}
              </div>
              <div>
                <p className="font-nunito font-bold text-xl">{comments[currentSlide].date}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white w-full md:w-[48%] rounded-[40px] hidden md:block">
          <div className="p-4">
            <div className="flex items-center space-x-4">
              <img src={comments[(currentSlide + 1) % comments.length].image} alt="" className="w-16 h-16" />
              <h1 className="font-nunito font-bold text-2xl">{comments[(currentSlide + 1) % comments.length].name}</h1>
            </div>

            <div className="mt-4">
              <p className="font-nunito font-light text-xl">{comments[(currentSlide + 1) % comments.length].text}</p>
            </div>

            <div className="flex items-center justify-between pt-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={star} alt="" className="w-5 h-5" />
                ))}
              </div>
              <div>
                <p className="font-nunito font-bold text-xl">{comments[(currentSlide + 1) % comments.length].date}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="flex justify-center pt-5 space-x-5 lg:justify-start">
        <img src={left} className="h-12 w-12 rounded-full bg-white cursor-pointer" alt="" onClick={prevSlide} />
        <img src={right} className="h-12 w-12 rounded-full bg-white cursor-pointer" alt="" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Slider;
