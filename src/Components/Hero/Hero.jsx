import React from 'react'
import './hero.css'
import Carousel from '../Carousel/Carousel'


export default function Hero() {
  return (
    <div className='heroSection'>
      <div className='welcomeSection'>
        <h2 className='HeroTitle'>Travel without limits and make your dreams come true.</h2>
        <Carousel />
        <button className='HeroButton'>More</button>
      </div>
    </div>
  )
}
