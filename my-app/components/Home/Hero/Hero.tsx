import Image from 'next/image';
import React from 'react';
import { BsStarHalf } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa6';

const Hero = () => {
  return (
    <div 
      className="relative w-full h-[110vh] sm:h-screen bg-[url('/images/bg.png')] bg-cover bg-center flex justify-center flex-col"
    >
     <div className='w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10'>
        {/* Text Content */}
        <div>
            <p className='text-sm sm:text-base md:text-xl font-bold text-blue-900'>Make the Smartest Investment</p>
            <h1 className='text-2xl md:text-3xl lg:text-4xl mt-6 mb-6 font-bold text-blue-950 leading-[2.5rem]'>Kickstart ,Scale and Thrive Faster with{""}
                <span className='text-rose-700'>TechDev</span>
            </h1>
            <p className='text-xs sm:text-sm md:text-base font-medium text-gray-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem obcaecati aut facilis quas ut excepturi adipisci? Fuga, unde quas esse iusto rem praesentium tempore consequatur debitis optio molestias cum laboriosam quaerat soluta excepturi quos eius expedita mollitia deserunt. Beatae voluptates, atque quis ipsa eveniet dolorum ea vero quisquam qui modi.
            </p>
            {/* Rating */}
            <div className='flex sm:flex-row flex-col sm:item-center sm:space-x-10 mt-6'>
                <div className='flex items-center space-x-4'>
                    <Image
                        src={"/images/google.png"}
                        alt='Google'
                        width={40}
                        height={40}
                    />
                </div>
                <div className='flex items-center space-x-2'>
                    <h1 className='text-lg sm:text-xl md:text-2xl text-gray-700 font-bold'>4.5</h1>
                    <div className='flex items-center'>
                        <FaStar className='w-4 h-4 text-yellow-500 '/>
                        <FaStar className='w-4 h-4 text-yellow-500 '/>
                        <FaStar className='w-4 h-4 text-yellow-500 '/>
                        <FaStar className='w-4 h-4 text-yellow-500 '/>
                        <BsStarHalf className='w-4 h-4 text-yellow-500 '/>
                    </div>
                </div>
            </div>
        </div>
        <div></div>
     </div>
    </div>
  );
};

export default Hero;
