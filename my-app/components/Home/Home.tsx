import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Feature from './Feature/Feature'
import Service from './Service/Service'
import Review from './Review/Review'
import Team from './Team/Team'
import Price from './Price/Price'


const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <About/>
      <Feature/>
      <Service/>
      <Review/>
      <Team/>
      <Price/>
    </div>
  )
}

export default Home