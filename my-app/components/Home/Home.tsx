import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Feature from './Feature/Feature'
import Service from './Service/Service'
import Review from './Review/Review'
import Team from './Team/Team'


const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <About/>
      <Feature/>
      <Service/>
      <Review/>
      <Team/>
    </div>
  )
}

export default Home