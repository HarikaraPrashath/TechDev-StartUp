"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Hero from './Hero/Hero';
import About from './About/About';
import Feature from './Feature/Feature';
import Service from './Service/Service';
import Review from './Review/Review';
import Team from './Team/Team';
import Price from './Price/Price';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom"
    });
  }, []);

  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Feature />
      <Service />
      <Review />
      <Team />
      <Price />
    </div>
  );
};

export default Home;
