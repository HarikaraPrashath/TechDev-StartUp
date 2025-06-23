"use client"
import React, { useEffect, useState } from 'react'
import {  FaArrowUp } from 'react-icons/fa6'


const ScrollerTop = () => {
    const[visiable,setVsiable]=useState(false)
//show hide functionality
    useEffect(()=>{
        const toggleVisiable =()=>{
            if(window.scrollY > 300) setVsiable(true)
            else setVsiable(false)    
        }
        window.addEventListener("scroll",toggleVisiable)
        return()=>window.removeEventListener("scroll",toggleVisiable)
    },[])

    // Scroll top function

    const scrollToTop =()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    return (
    <div className='fixed bottom-4 animate-pulse right-4'>
        {visiable && (
            <button onClick={scrollToTop} type='button' className='bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none'>
                <FaArrowUp/>
            </button>
        )}
    </div>
  )
}

export default ScrollerTop
