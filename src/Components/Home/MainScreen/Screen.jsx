import React from 'react'
import Header from './Header'
import Gif from '../../../img/home.gif'

const Screen = () => {
  return (
    <div className=''>
      <Header />
        <div className="">
          <img style={{ borderRadius: '40px' }} src={Gif} alt="" />
        </div>
        
    </div>
  )
}

export default Screen
