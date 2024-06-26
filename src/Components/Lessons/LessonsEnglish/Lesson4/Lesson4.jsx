import React from 'react'
import { useNavigate } from 'react-router-dom';

const Lesson4 = () => {
    const navigate = useNavigate();
    const handltest = () => {
    navigate('/English/lesson4/test');
    }
    
  return (
    <div className="bg-[#cebcff] min-h-screen pt-5">
      <div className="container mx-auto pt-2">
        <h1 className="font-nunito font-bold text-4xl lg:text-5xl xl:text-7xl text-[#885AEF] text-center lg:text-left my-10">
        Числа и время в английском языке
        </h1>
        <p className="font-nunito text-lg lg:text-2xl text-black py-3 leading-loose">
            Числа и время - это важные навыки, которые помогую с ориентираваться по времени. Вот основные термены.
        </p>
        <div className="">
          <h2 className="font-nunito font-bold text-4xl lg:text-3xl xl:text-5xl text-[#885AEF] text-center lg:text-left my-10" >Количественные числительные</h2>
          <h3 className='font-nunito font-regular text-2xl '>Количественные числительные используются для счёта и обозначения количества. Вот основные:</h3>
          <li className='font-nunito font-regular text-xl pt-10 '>One (ван) — один</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Two (ту) — два</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Three (сри) — три</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Four (фо) — четыре</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Five (файв) — пять</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Six (сикс) — шесть</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Seven (севен) — семь</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Eight (эйт) — восемь</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Nine (найн) — девять</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Ten (тен) — десять</li>
          <li className='font-nunito font-regular text-xl pt-10 '>11: Eleven (илевен) — одиннадцать</li>
          <li className='font-nunito font-regular text-xl pt-10 '>12: Twelve (твелв) — двенадцать</li>
          <li className='font-nunito font-regular text-xl pt-10 '>13: Thirteen (сёртин) — тринадцать</li>
          <li className='font-nunito font-regular text-xl pt-10 '>14: Fourteen (фортин) — четырнадцать</li>
          <li className='font-nunito font-regular text-xl pt-10 '>15: Fifteen (фифтин) — пятнадцать</li>
          <li className='font-nunito font-regular text-xl pt-10 '>16: Sixteen (сикстин) — шестнадцать</li>
          <li className='font-nunito font-regular text-xl pt-10 '>17: Seventeen (севентин) — семнадцать</li>
          <li className='font-nunito font-regular text-xl pt-10 '>18: Eighteen (эйтин) — восемнадцать</li>
          <li className='font-nunito font-regular text-xl pt-10 '>19: Nineteen (найнтин) — девятнадцать</li>
          <li className='font-nunito font-regular text-xl pt-10 '>20: Twenty (твенти) — двадцать</li>

        </div>
        
        <div className="">
          <h3 className='font-nunito font-regular text-2xl pt-10'>Начиная с 21, числа образуются комбинированием десятков и единиц:</h3>
          <li className='font-nunito font-regular text-xl pt-10 '>21: Twenty-one (твенти-ван) — двадцать один</li>
          <li className='font-nunito font-regular text-xl pt-10 '>22: Twenty-two (твенти-ту) — двадцать два</li>
          <li className='font-nunito font-regular text-xl pt-10 '>30: Thirty (сёрти) — тридцать</li>
          <li className='font-nunito font-regular text-xl pt-10 '>40: Forty (форти) — сорок</li>
          <li className='font-nunito font-regular text-xl pt-10 '>50: Fifty (фифти) — пятьдесят</li>
          <li className='font-nunito font-regular text-xl pt-10 '>60: Sixty (сиксти) — шестьдесят</li>
          <li className='font-nunito font-regular text-xl pt-10 '>70: Seventy (севенти) — семьдесят</li>
          <li className='font-nunito font-regular text-xl pt-10 '>80: Eighty (эйти) — восемьдесят</li>
          <li className='font-nunito font-regular text-xl pt-10 '>90: Ninety (найнти) — девяносто</li>
          <li className='font-nunito font-regular text-xl pt-10 '>100: One hundred (ван хандред) — сто</li>
        </div>

        <div className="">
          <h3 className='font-nunito font-regular text-2xl pt-10'>Для тысяч и миллионов:</h3>
          <li className='font-nunito font-regular text-xl pt-10 '>1,000: One thousand (ван фаузанд) — одна тысяча</li>
          <li className='font-nunito font-regular text-xl pt-10 '>1,000,000: One million (ван миллион) — один миллион</li>
        </div>

        <div className="">
          <h2 className="font-nunito font-bold text-4xl lg:text-3xl xl:text-5xl text-[#885AEF] text-center lg:text-left my-10" >Порядковые числительные (Ordinal Numbers)</h2>
          <h3 className='font-nunito font-regular text-2xl '>Порядковые числительные показывают порядок или позицию чего-либо. Вот основные:</h3>
          <li className='font-nunito font-regular text-xl pt-10 '>First (фёрст) — первый</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Second (сэкенд) — второй</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Third (сёрд) — третий</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Fourth (форс) — четвертый</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Fifth (фифс) — пятый</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Sixth (сиксс) — шестой</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Seventh (севенс) — седьмой</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Eighth (эйтс) — восьмой</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Ninth (найнс) — девятый</li>
          <li className='font-nunito font-regular text-xl pt-10 '>Tenth (тенс) — десятый</li>
          <li className='font-nunito font-regular text-xl pt-10 '>11th: Eleventh (илевенс) — одиннадцатый</li>
          <li className='font-nunito font-regular text-xl pt-10 '>12th: Twelfth (твелфс) — двенадцатый</li>
          <li className='font-nunito font-regular text-xl pt-10 '>13th: Thirteenth (сёртинс) — тринадцатый</li>
          <li className='font-nunito font-regular text-xl pt-10 '>14th: Fourteenth (фортинс) — четырнадцатый</li>
          <li className='font-nunito font-regular text-xl pt-10 '>20th: Twentieth (твентис) — двадцатый</li>
          <li className='font-nunito font-regular text-xl pt-10 '>21st: Twenty-first (твенти-фёрст) — двадцать первый</li>
          <li className='font-nunito font-regular text-xl pt-10 '>30th: Thirtieth (сёртис) — тридцатый</li>
          <li className='font-nunito font-regular text-xl pt-10 '>40th: Fortieth (фортис) — сороковой</li>
          <li className='font-nunito font-regular text-xl pt-10 '>50th: Fiftieth (фифтис) — пятидесятый</li>
          <li className='font-nunito font-regular text-xl pt-10 '>60th: Sixtieth (сикстис) — шестидесятый</li>
          <li className='font-nunito font-regular text-xl pt-10 '>70th: Seventieth (севентис) — семидесятый</li>
          <li className='font-nunito font-regular text-xl pt-10 '>80th: Eightieth (эйтис) — восьмидесятый</li>
          <li className='font-nunito font-regular text-xl pt-10 '>90th: Ninetieth (найнтис) — девяностый</li>
          <li className='font-nunito font-regular text-xl pt-10 '>100th: One hundredth (ван хандредс) — сотый</li>
        </div>

        <div className="">
          <h2 className="font-nunito font-bold text-4xl lg:text-3xl xl:text-5xl text-[#885AEF] text-center lg:text-left my-10" >Как говорить о времени на английском</h2>
          <h3 className='font-nunito font-regular text-2xl '>Часы</h3>
          <li className='font-nunito font-regular text-xl pt-10 '>1:00 - One o'clock (ван оклок) — час</li>
          <li className='font-nunito font-regular text-xl pt-10 '>2:00 - Two o'clock (ту оклок) — два часа</li>
          <li className='font-nunito font-regular text-xl pt-10 '>3:00 - Three o'clock (сри оклок) — три часа</li>
          <li className='font-nunito font-regular text-xl pt-10 '>4:00 - Four o'clock (фо оклок) — четыре часа</li>
          <li className='font-nunito font-regular text-xl pt-10 '>5:00 - Five o'clock (файв оклок) — пять часов</li>
          <li className='font-nunito font-regular text-xl pt-10 '>6:00 - Six o'clock (сикс оклок) — шесть часов</li>
          <li className='font-nunito font-regular text-xl pt-10 '>7:00 - Seven o'clock (севен оклок) — семь часов</li>
          <li className='font-nunito font-regular text-xl pt-10 '>8:00 - Eight o'clock (эйт оклок) — восемь часов</li>
          <li className='font-nunito font-regular text-xl pt-10 '>9:00 - Nine o'clock (найн оклок) — девять часов</li>
          <li className='font-nunito font-regular text-xl pt-10 '>10:00 - Ten o'clock (тен оклок) — десять часов</li>
          <li className='font-nunito font-regular text-xl pt-10 '>11:00 - Eleven o'clock (илевен оклок) — одиннадцать часов</li>
          <li className='font-nunito font-regular text-xl pt-10 '>12:00 - Twelve o'clock (твелв оклок) — двенадцать часов</li>
        </div>

        <div className="">
          <h2 className="font-nunito font-bold text-4xl lg:text-3xl xl:text-5xl text-[#885AEF] text-center lg:text-left my-10" >Минуты</h2>
          <h3 className='font-nunito font-regular text-2xl '>Минуты добавляются с использованием слов "past" (после) или "to" (до).</h3>
          <li className='font-nunito font-regular text-xl pt-10 '>1:05 - Five past one (файв паст ван) — пять минут второго</li>
          <li className='font-nunito font-regular text-xl pt-10 '>1:10 - Ten past one (тен паст ван) — десять минут второго</li>
          <li className='font-nunito font-regular text-xl pt-10 '>1:15 - Quarter past one (квортер паст ван) — четверть второго</li>
          <li className='font-nunito font-regular text-xl pt-10 '>1:20 - Twenty past one (твенти паст ван) — двадцать минут второго</li>
          <li className='font-nunito font-regular text-xl pt-10 '>1:25 - Twenty-five past one (твенти-файв паст ван) — двадцать пять минут второго</li>
          <li className='font-nunito font-regular text-xl pt-10 '>1:30 - Half past one (халф паст ван) — полвторого</li>
        </div>

        <div className="">
          <h3 className='font-nunito font-regular text-2xl pt-10'>1:35 - Twenty-five to two (твенти-файв ту ту) — без двадцати пяти два</h3>
          <li className='font-nunito font-regular text-xl pt-10 '>1:40 - Twenty to two (твенти ту ту) — без двадцати два</li>
          <li className='font-nunito font-regular text-xl pt-10 '>1:45 - Quarter to two (квортер ту ту) — без четверти два</li>
          <li className='font-nunito font-regular text-xl pt-10 '>1:45 - Quarter to two (квортер ту ту) — без четверти два</li>
          <li className='font-nunito font-regular text-xl pt-10 '>1:55 - Five to two (файв ту ту) — без пяти два</li>
        </div>

        <div className="">
          <h2 className="font-nunito font-bold text-4xl lg:text-3xl xl:text-5xl text-[#885AEF] text-center lg:text-left my-10" >AM и PM</h2>
          <h3 className='font-nunito font-regular text-2xl '>Чтобы различать утро и день/вечер, используются "AM" (до полудня) и "PM" (после полудня):</h3>
          <li className='font-nunito font-regular text-xl pt-10 '>7:00 AM - Seven o'clock in the morning (севен оклок ин зе морнинг) — семь часов утра</li>
          <li className='font-nunito font-regular text-xl pt-10 '>7:00 PM - Seven o'clock in the evening (севен оклок ин зе ивнинг) — семь часов вечера</li>
        </div>

        <button className='my-10 py-4 px-20 bg-[#9D76F3] font-nunito font-bold text-xl rounded-lg text-white hover:scale-110 transition-all ease-linear' onClick={handltest}>Далее</button>      
      </div>
    </div>
  )
  
}

export default Lesson4
