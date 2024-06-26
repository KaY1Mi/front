import React from 'react';
import { useNavigate } from 'react-router-dom';

const Spain2 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/Spain/Spain2/TestSpain'); // Изменил ссылку на следующий урок для испанского языка
  }

  return (
    <div className="bg-[#D2FF1F] min-h-screen pt-5">
      <div className="container mx-auto pt-2 max-w-full px-4 lg:px-16">
        <h1 className="font-nunito font-bold text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-8xl text-[#84A501] text-center lg:text-left my-10">
          Алфавит и звуки в испанском языке
        </h1>
        <p className="font-nunito text-lg sm:text-xl md:text-2xl lg:text-2xl text-black py-3 leading-loose">
          Добро пожаловать на первый урок по испанскому языку World Lang! Сегодня мы изучим испанский алфавит и основные звуки.
        </p>
        <div>
          <h2 className="font-nunito font-bold text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-5xl text-[#84A501] text-center lg:text-left my-10">
            Буквы и их произношение
          </h2>
          <h3 className="font-nunito font-regular text-xl sm:text-2xl md:text-3xl lg:text-2xl">
            Гласные буквы: A, E, I, O, U
          </h3>
          <ul className="list-disc pl-5">
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">A: [a] как в слове "casa".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">E: [e] как в слове "escuela".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">I: [i] как в слове "niño".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">O: [o] как в слове "oso".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">U: [u] как в слове "guitarra".</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-nunito font-regular text-xl sm:text-2xl md:text-3xl lg:text-2xl pt-10">
            Согласные буквы: Остальные буквы испанского алфавита
          </h3>
          <ul className="list-disc pl-5">
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">B: [b] как в слове "banco".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">C: [k] как в слове "casa", [θ] как в слове "ciudad".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">D: [d] как в слове "día".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">F: [f] как в слове "flor".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">G: [ɡ] как в слове "gato", [x] как в слове "gente".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">H: [h] без звука в начале слов.</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">J: [x] как в слове "juego".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">K: [k] как в слове "kilómetro".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">L: [l] как в слове "luna".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">M: [m] как в слове "manzana".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">N: [n] как в слове "noche".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">P: [p] как в слове "perro".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">Q: [k] как в слове "queso".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">R: [ɾ] или [r] как в слове "rápido".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">S: [s] как в слове "sol", [θ] как в слове "lápiz".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">T: [t] как в слове "toro".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">V: [b] как в слове "vino".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">W: [w] как в слове "whisky".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">X: [ks] как в слове "taxi".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">Z: [θ] или [s] как в слове "zapato".</li>
          </ul>
        </div>

        <button className="my-10 py-4 px-10 sm:px-16 lg:px-20 bg-[#84A501] font-nunito font-bold text-lg sm:text-xl rounded-lg text-white hover:scale-110 transition-all ease-linear" onClick={handleNext}>Далее</button>      
      </div>
    </div>
  );
};

export default Spain2;

