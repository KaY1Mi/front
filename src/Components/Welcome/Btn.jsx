import React from 'react'

const Btn = ({ onClick }) => {
  return (
    <div className="py-5">
        <button onClick={onClick} class="bg-gradient text-white py-5 px-20 rounded-full animate-gradient hover:scale-110 duration-300 ">
           <div className="text-black font-nunito font-bold text-3xl">Вперёд</div>  
        </button>
    </div>
  )
}

export default Btn
