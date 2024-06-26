import React, { useState } from 'react';
import Arrow from '../../../img/Arrow.svg';

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAnswer = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const faqs = [
    {
      question: "В чем особенность методики World Lang?",
      answer: "Наша методика разработана специально для русскоговорящих. Она учитывает их особенности артикуляции и построения фраз. Благодаря этому вы быстрее начнёте говорить и сможете избежать ошибок, типичных для носителей русского языка. Методика учитывает особенности вашей речи и предусматривает максимум практики. Благодаря специальным упражнениям вы уже за пару месяцев занятий заметно улучшите свой разговорный английский."
    },
    {
      question: "Чем этот курс отличается от других подобных?",
      answer: "Курс дает возможность любому, кто знает английский язык на базовом уровне, стать преподавателем английского языка и получить работу за 3 месяца даже без специального образования."
    },
    {
      question: "Сколько часов в неделю нужно будет уделять учёбе?",
      answer: "Всё зависит только от вас. Чтобы пройти курс за 3 месяца, вам предстоит заниматься по 2–3 часа в неделю с преподавателем и ещё столько же самостоятельно."
    },
    {
      question: "Кому подойдёт данный курс?",
      answer: "Абсолютно всем! Мы пытаемся развивать индустрию преподавания иностранных языков. Так что смело начинайте учиться вместе с World Lang."
    }
  ];

  return (
    <div className="px-4 py-10 text-white">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold font-nunito mb-10 text-center">Часто задаваемые вопросы</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="py-5 md:py-10">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAnswer(index)}>
            <p className="text-lg md:text-2xl lg:text-[30px] font-medium font-nunito">{faq.question}</p>
            <button
              className={`w-7 h-7 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-[#D2FF1F] transform transition-transform duration-300 ${openIndexes.includes(index) ? 'rotate-180' : ''}`}
              style={{ aspectRatio: '1' }}
            >
              <img src={Arrow} className='w-4 h-4 md:w-7 md:h-7' alt="" />
            </button>
          </div>
          {openIndexes.includes(index) && (
            <div className="mt-2">
              <p className='text-sm md:text-base lg:text-lg font-regular font-nunito text-[#939393]'>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
