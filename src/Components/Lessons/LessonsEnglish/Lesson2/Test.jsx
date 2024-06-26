import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Test = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "Какой звук издает буква A в слове 'cat'?",
      options: ["[æ]", "[eɪ]", "[ɑː]"],
      correct: 0
    },
    {
      question: "Какой звук издает буква E в слове 'he'?",
      options: ["[i:]", "[ɛ]", "[eɪ]"],
      correct: 0
    },
    {
      question: "Какой звук издает буква O в слове 'go'?",
      options: ["[ɒ]", "[oʊ]", "[ʌ]"],
      correct: 1
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [isTestPassed, setIsTestPassed] = useState(false);

  const handleAnswerClick = (index) => {
    setAnswers([...answers, index]);
    if (index === questions[currentQuestion].correct) {
      if (currentQuestion === questions.length - 1) {
        setIsTestCompleted(true);
        setIsTestPassed(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    } else {
      setIsTestCompleted(true);
      setIsTestPassed(false);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsTestCompleted(false);
    setIsTestPassed(false);
  };

  return (
    <div className="bg-white min-h-screen py-5 flex justify-center text-center items-center">
      <div className="container mx-auto pt-2">
        {!isTestCompleted ? (
          <div>
            <h2 className="font-nunito font-bold text-4xl lg:text-3xl xl:text-5xl text-black text-center lg:my-10">
              Вопрос {currentQuestion + 1} / {questions.length}
            </h2>
            <p className="font-nunito text-lg lg:text-2xl text-black py-10 leading-loose">
              {questions[currentQuestion].question}
            </p>
            <div className="flex flex-col justify-center items-center  md:flex-row ">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="my-2 mx-2 py-2 px-4 bg-[#9D76F3] font-nunito font-medium text-xl rounded-lg text-white hover:scale-110 transition-all ease-linear"
                  onClick={() => handleAnswerClick(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center">
            {isTestPassed ? (
              <div>
                <h2 className="font-nunito font-bold text-4xl lg:text-3xl xl:text-5xl text-black my-10">
                  <span className='text-[#D2FF1F]'>Поздравляем!</span> Вы прошли тест!
                </h2>
                <button
                  className="my-10 py-4 px-20 bg-[#9D76F3] font-nunito font-bold text-xl rounded-lg text-white hover:scale-110 transition-all ease-linear"
                  onClick={() => navigate('/English/lesson3')}
                >
                  Далее
                </button>
              </div>
            ) : (
              <div>
                <h2 className="font-nunito font-bold text-4xl lg:text-3xl xl:text-5xl text-black my-10">
                  <span className=' text-red-600'>К сожалению</span>, вы не прошли тест.
                </h2>
                <button
                  className="my-10 py-4 px-20 bg-[#9D76F3] font-nunito font-bold text-xl rounded-lg text-white hover:scale-110 transition-all ease-linear"
                  onClick={handleRetry}
                >
                  Попробовать снова
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;