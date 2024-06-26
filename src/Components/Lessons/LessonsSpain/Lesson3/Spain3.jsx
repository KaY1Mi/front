import React from 'react';
import { useNavigate } from 'react-router-dom';

const Spain3 = () => {
  const navigate = useNavigate();

  const handltest = () => {
    navigate('/Spain/Spain3/TestSpain3');
  };

  return (
    <div className="bg-[#D2FF1F] min-h-screen pt-5">
      <div className="container mx-auto pt-2">
        <h1 className="font-nunito font-bold text-4xl lg:text-5xl xl:text-7xl text-[#84A501] text-center lg:text-left my-10">
        Приветствия и представление в испанском языке
        </h1>
        <p className="font-nunito text-lg lg:text-2xl text-black py-3 leading-loose">
        Приветствия и представление - это важные навыки, которые помогают вам начать общение на испанском языке. Вот основные фразы и выражения, которые помогут вам в этом.
        </p>
        <div className="">
          <h2 className="font-nunito font-bold text-4xl lg:text-3xl xl:text-5xl text-[#84A501] text-center lg:text-left my-10">
          Приветствия
          </h2>
          <h3 className="font-nunito font-regular text-2xl">Простые приветствия:</h3>
          <li className="font-nunito font-regular text-xl pt-10">¡Hola! (Hola)</li>
          <li className="font-nunito font-regular text-xl pt-10">¡Hola! (Hola)</li>
          <li className="font-nunito font-regular text-xl pt-10">¡Ey! (¡Hola!) - menos formal</li>
        </div>

        <div className="">
          <h3 className="font-nunito font-regular text-2xl pt-10">Доброе утро, день и вечер:</h3>
          <li className="font-nunito font-regular text-xl pt-10">¡Buenos días! (Buenos días) - se usa hasta el mediodía.</li>
          <li className="font-nunito font-regular text-xl pt-10">¡Buenas tardes! (Buenas tardes) - se usa después del mediodía hasta la puesta del sol.</li>
          <li className="font-nunito font-regular text-xl pt-10">¡Buenas noches! (Buenas noches) - se usa después de la puesta del sol.</li>
        </div>

        <div className="">
          <h3 className="font-nunito font-regular text-2xl pt-10">Прощания:</h3>
          <li className="font-nunito font-regular text-xl pt-10">¡Adiós! (Adiós)</li>
          <li className="font-nunito font-regular text-xl pt-10">¡Chao! (¡Chao!)</li>
          <li className="font-nunito font-regular text-xl pt-10">¡Nos vemos luego! (¡Nos vemos luego!)</li>
          <li className="font-nunito font-regular text-xl pt-10">¡Cuídate! (¡Cuídate!)</li>
        </div>

        <div className="">
          <h2 className="font-nunito font-bold text-4xl lg:text-3xl xl:text-5xl text-[#84A501] text-center lg:text-left my-10">
          Представление
          </h2>
          <h3 className="font-nunito font-regular text-2xl">Как представиться:</h3>
          <li className="font-nunito font-regular text-xl pt-10">Mi nombre es [Tu Nombre]. (Mi nombre es [Tu Nombre].)</li>
          <li className="font-nunito font-regular text-xl pt-10">Soy [Tu Nombre]. (Soy [Tu Nombre].)</li>
        </div>

        <div className="">
          <h3 className="font-nunito font-regular text-2xl pt-10">Спрашивать имя собеседника:</h3>
          <li className="font-nunito font-regular text-xl pt-10">¿Cómo te llamas? (¿Cómo te llamas?)</li>
          <li className="font-nunito font-regular text-xl pt-10">¿Quién eres? (¿Quién eres?)</li>
        </div>

        <div className="">
          <h3 className="font-nunito font-regular text-2xl pt-10">Дополнительные вопросы для знакомства:</h3>
          <li className="font-nunito font-regular text-xl pt-10">¿De dónde eres? (¿De dónde eres?)</li>
          <li className="font-nunito font-regular text-xl pt-10">¿A qué te dedicas? (¿A qué te dedicas?)</li>
          <li className="font-nunito font-regular text-xl pt-10">¿Cómo estás? (¿Cómo estás?)</li>
        </div>

        <button className="my-10 py-4 px-20 bg-[#84A501] font-nunito font-bold text-xl rounded-lg text-white hover:scale-110 transition-all ease-linear" onClick={handltest}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default Spain3;
