import BoxText from '@/components/Helper/BoxText'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className=' pb-20 '>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            {/* Image represent */}
            <div>
                <Image src= "/images/about.png" alt='About' width={600} height={600}/>
            </div>

            {/* Text Content */}
            <div>
               <BoxText>About us</BoxText>
               <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 mt-3 leading-[2.5rem] sm:leading-[3rem] '>Everything You Need To Grow Your Business</h1>

               <p className='mt-3 leading-relaxed text-sm sm:text-base text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum cupiditate repellat soluta dolor! Quisquam facere aperiam itaque, optio commodi blanditiis</p>
               <button className='mt-5 text-[#f68967] text-lg font-bold pd-1 border-b-2 border-[#f68967] '>Learn more &#8594;</button>
               <div className='mt-8 border-l-2 border-gray-200'>
                    <div className='ml-6'>
                        <p className='text-gray-700 font-medium text-lg'>&quot;"The many integrations that can be linked really help me see data form other tools I also use"</p>
                        <div className='flex items-center space-x-6 mt-6 '>
                            <Image src="/images/u1.jpg" alt='profile' width={40} height={40}
                            className='rounded-full'
                            />
                            <div className='text-xl'>
                                <p className='font-medium '>Jasica Donia</p>
                                <p className='text-gray-700 text-sm'>Developer @TechFalcon
                                </p>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default About