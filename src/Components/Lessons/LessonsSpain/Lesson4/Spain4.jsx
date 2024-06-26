import React from 'react';
import { useNavigate } from 'react-router-dom';

const Spain4 = () => {
  const navigate = useNavigate();

  const handleTest = () => {
    navigate('/Spain/Spain4/TestSpain4');
  };

  return (
    <div className="bg-[#D2FF1F] min-h-screen pt-5">
      <div className="container mx-auto pt-2">
        <h1 className="font-nunito font-bold text-4xl lg:text-5xl xl:text-7xl text-[#84A501] text-center lg:text-left my-10">
          Числа и время в испанском языке
        </h1>
        <p className="font-nunito text-lg lg:text-2xl text-black py-3 leading-loose">
          Числа и время - важные навыки для ориентации в испанском языке. Вот основные термины.
        </p>
        
        <div className="">
          <h2 className="font-nunito font-bold text-4xl lg:text-3xl xl:text-5xl text-[#84A501] text-center lg:text-left my-10">
            Количественные числительные
          </h2>
          <h3 className="font-nunito font-regular text-2xl">
            Количественные числительные используются для счета и обозначения количества. Вот основные:
          </h3>
          <li className="font-nunito font-regular text-xl pt-10">Uno (Уно) — один</li>
          <li className="font-nunito font-regular text-xl pt-10">Dos (Дос) — два</li>
          <li className="font-nunito font-regular text-xl pt-10">Tres (Трес) — три</li>
          <li className="font-nunito font-regular text-xl pt-10">Cuatro (Куатро) — четыре</li>
          <li className="font-nunito font-regular text-xl pt-10">Cinco (Синко) — пять</li>
          <li className="font-nunito font-regular text-xl pt-10">Seis (Сейс) — шесть</li>
          <li className="font-nunito font-regular text-xl pt-10">Siete (Сьете) — семь</li>
          <li className="font-nunito font-regular text-xl pt-10">Ocho (Очо) — восемь</li>
          <li className="font-nunito font-regular text-xl pt-10">Nueve (Нуэве) — девять</li>
          <li className="font-nunito font-regular text-xl pt-10">Diez (Диес) — десять</li>
          <li className="font-nunito font-regular text-xl pt-10">11: Once (Онсе) — одиннадцать</li>
          <li className="font-nunito font-regular text-xl pt-10">12: Doce (Досе) — двенадцать</li>
          <li className="font-nunito font-regular text-xl pt-10">13: Trece (Тресе) — тринадцать</li>
          <li className="font-nunito font-regular text-xl pt-10">14: Catorce (Каторсе) — четырнадцать</li>
          <li className="font-nunito font-regular text-xl pt-10">15: Quince (Кинсе) — пятнадцать</li>
          <li className="font-nunito font-regular text-xl pt-10">16: Dieciséis (Диэсисеис) — шестнадцать</li>
          <li className="font-nunito font-regular text-xl pt-10">17: Diecisiete (Диэсисьете) — семнадцать</li>
          <li className="font-nunito font-regular text-xl pt-10">18: Dieciocho (Диэсьиочо) — восемнадцать</li>
          <li className="font-nunito font-regular text-xl pt-10">19: Diecinueve (Диэсиуэве) — девятнадцать</li>
          <li className="font-nunito font-regular text-xl pt-10">20: Veinte (Вейнте) — двадцать</li>
        </div>

        <div className="">
          <h3 className="font-nunito font-regular text-2xl pt-10">
            Начиная с 21, числа образуются комбинированием десятков и единиц:
          </h3>
          <li className="font-nunito font-regular text-xl pt-10">21: Veintiuno (Вейнтиуно) — двадцать один</li>
          <li className="font-nunito font-regular text-xl pt-10">22: Veintidós (Вейнтидос) — двадцать два</li>
          <li className="font-nunito font-regular text-xl pt-10">30: Treinta (Трейнта) — тридцать</li>
          <li className="font-nunito font-regular text-xl pt-10">40: Cuarenta (Куарента) — сорок</li>
          <li className="font-nunito font-regular text-xl pt-10">50: Cincuenta (Синкуента) — пятьдесят</li>
          <li className="font-nunito font-regular text-xl pt-10">60: Sesenta (Сесента) — шестьдесят</li>
          <li className="font-nunito font-regular text-xl pt-10">70: Setenta (Сетента) — семьдесят</li>
          <li className="font-nunito font-regular text-xl pt-10">80: Ochenta (Очента) — восемьдесят</li>
          <li className="font-nunito font-regular text-xl pt-10">90: Noventa (Новента) — девяносто</li>
          <li className="font-nunito font-regular text-xl pt-10">100: Cien (Сиен) — сто</li>
        </div>

        <div className="">
          <h3 className="font-nunito font-regular text-2xl pt-10">
            Для тысяч и миллионов:
          </h3>
          <li className="font-nunito font-regular text-xl pt-10">1,000: Mil (Миль) — одна тысяча</li>
          <li className="font-nunito font-regular text-xl pt-10">1,000,000: Millón (Мильон) — один миллион</li>
        </div>

        <div className="">
          <h2 className="font-nunito font-bold text-4xl lg:text-3xl xl:text-5xl text-[#84A501] text-center lg:text-left my-10">
            Порядковые числительные (Ordinal Numbers)
          </h2>
          <h3 className="font-nunito font-regular text-2xl">
            Порядковые числительные показывают порядок или позицию чего-либо. Вот основные:
          </h3>
          <li className="font-nunito font-regular text-xl pt-10">Primero (Примеро) — первый</li>
          <li className="font-nunito font-regular text-xl pt-10">Segundo (Сегундо) — второй</li>
          <li className="font-nunito font-regular text-xl pt-10">Tercero (Терсеро) — третий</li>
          <li className="font-nunito font-regular text-xl pt-10">Cuarto (Куарто) — четвертый</li>
          <li className="font-nunito font-regular text-xl pt-10">Quinto (Кинто) — пятый</li>
          <li className="font-nunito font-regular text-xl pt-10">Sexto (Сексто) — шестой</li>
          <li className="font-nunito font-regular text-xl pt-10">Séptimo (Септимо) — седьмой</li>
          <li className="font-nunito font-regular text-xl pt-10">Octavo (Октаво) — восьмой</li>
          <li className="font-nunito font-regular text-xl pt-10">Noveno (Новено) — девятый</li>
          <li className="font-nunito font-regular text-xl pt-10">Décimo (Десимо) — десятый</li>
          <li className="font-nunito font-regular text-xl pt-10">20th: Vigésimo (Вигесимо) — двадцатый</li>
        </div>

        <div className="">
            <button className="my-10 py-4 px-20 bg-[#84A501] font-nunito font-bold text-xl rounded-lg text-white hover:scale-110 transition-all ease-linear" onClick={handleTest}>
            Далее
            </button>
        </div>
      </div>
    </div>
  );
};

export default Spain4;
