import React from 'react';
import { useNavigate } from 'react-router-dom';

const Lesson1 = () => {
  const navigate = useNavigate();

  const handltest = () => {
    navigate('/English/lesson2/test');
  }

  return (
    <div className="bg-[#cebcff] min-h-screen pt-5">
      <div className="container mx-auto pt-2 max-w-full px-4 lg:px-16">
        <h1 className="font-nunito font-bold text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-8xl text-[#885AEF] text-center lg:text-left my-10">
          Алфавит и звуки
        </h1>
        <p className="font-nunito text-lg sm:text-xl md:text-2xl lg:text-2xl text-black py-3 leading-loose">
          Добро пожаловать на 1й урок по английского языка World Lang! Сегодня мы поговорим и изучем алфавит и звуки в английском языке.
        </p>
        <div>
          <h2 className="font-nunito font-bold text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-5xl text-[#885AEF] text-center lg:text-left my-10">
            Буквы и звуки
          </h2>
          <h3 className="font-nunito font-regular text-xl sm:text-2xl md:text-3xl lg:text-2xl">
            Гласные буквы: A, E, I, O, U (и иногда Y)
          </h3>
          <ul className="list-disc pl-5">
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">A: [æ] в слове "cat", [eɪ] в слове "cake".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">E: [ɛ] в слове "bed", [i:] в слове "he".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">I: [ɪ] в слове "sit", [aɪ] в слове "like".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">O: [ɒ] в слове "not", [oʊ] в слове "go".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">U: [ʌ] в слове "cup", [ju:] в слове "use".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">Y: [j] в слове "yes", [ɪ] в слове "gym".</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-nunito font-regular text-xl sm:text-2xl md:text-3xl lg:text-2xl pt-10">
            Согласные буквы: Остальные 21 буквы
          </h3>
          <ul className="list-disc pl-5">
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">B: [b] в слове "bat".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">C: [k] в слове "cat", [s] в слове "cent".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">D: [d] в слове "dog".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">F: [f] в слове "fish".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">G: [ɡ] в слове "go", [dʒ] в слове "gem".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">H: [h] в слове "hat".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">J: [dʒ] в слове "jam".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">K: [k] в слове "kite".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">L: [l] в слове "lamp".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">M: [m] в слове "man".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">N: [n] в слове "net".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">P: [p] в слове "pen".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">Q: [kw] в слове "queen".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">R: [r] в слове "red".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">S: [s] в слове "sun", [z] в слове "rose".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">T: [t] в слове "top".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">V: [v] в слове "van".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">W: [w] в слове "win".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">X: [ks] в слове "box".</li>
            <li className="font-nunito font-regular text-lg sm:text-xl md:text-2xl pt-5">Z: [z] в слове "zoo".</li>
          </ul>
        </div>

        <button className="my-10 py-4 px-10 sm:px-16 lg:px-20 bg-[#9D76F3] font-nunito font-bold text-lg sm:text-xl rounded-lg text-white hover:scale-110 transition-all ease-linear" onClick={handltest}>Далее</button>      
      </div>
    </div>
  );
};

export default Lesson1;
