"use client"
import { Nav_Link } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GrTechnology } from "react-icons/gr";
import { HiBars3BottomRight } from "react-icons/hi2";

type props ={
  openNav:()=>void;
}

const Navbar = ({openNav}:props) => {
const[navBg,setNavBg] = useState(false)
  useEffect(()=>{
    const handler =()=>{
      if(window.screenY >=90)setNavBg(true)
      if(window.screenY <90)setNavBg(false)
    }

  return ()=>  window.addEventListener('scroll',handler)

  },[])
  return (
    <div className={`transition-all ${navBg?'bg-white shadow:md' : 'fixed'}duration-200 h-[12vh] z-[100] fixed w-full bg-white`}>
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center flex-col">
            <GrTechnology className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-blue-800 font-bold">
            {" "}
            TechFalcon
          </h1>
        </div>
        {/* NavLink */}

        <div className="hidden lg:flex items-center space-x-10">
          {Nav_Link.map((item) => (
            <Link
              className="text-black hover:text-blue-500 font-bold text-lg transition-all duration-200"
              href={item.url}
              key={item.id}
            >
              <p>{item.label}</p>
            </Link>
          ))}
        </div>
         {/* Button */}
      <div className="flex items-center space-x-4">
        <a
          href="#_"
          className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
        >
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg
              className="w-5 h-5 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg
              className="w-5 h-5 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
            Make Schedule
          </span>
        </a>
        {/* burger menu */}
        <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-point text-black lg:hidden" />
      </div>
      </div>
     
    </div>
  );
};

export default Navbar;
