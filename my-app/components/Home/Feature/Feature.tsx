import Image from "next/image";
import React from "react";
import { GoWorkflow } from "react-icons/go";
import { LuPen } from "react-icons/lu";
import { MdAccessAlarm, MdOutlineTouchApp } from "react-icons/md";

const Feature = () => {
  return (
    <div className="pt-16  pb-16 bg-gray-150 font-bold">
      <div>
        <h1 className="text-center text-2xl text-blue-950 font-bold">
          Key Feature Of The Products
        </h1>
        <p className="mt-3 text-center font-medium text-xl text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%]">
          Our product stands out with its high performance ,delivering
          blazing-fact speeds and stemless multitasking
        </p>
      </div>
      {/* Main Grid */}
      <div className="w-[80%] mx-auto mt-16 grid grid-col-1 xl:grid-cols-2 gap-10 items-center ">
        {/* Inner grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
          {/* 1st Box */}
          <div className="bg-gray-200 p-4 rounded-3xl">
            <div className="flex items-center space-x-3 ">
              {/* Icons */}
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-200 bg-opacity-20">
                <MdOutlineTouchApp className="w-6 h-6 text-orange-400" />
              </div>
              {/* Heading */}
              <h1 className="text-lg font-bold text-gray-700">
                App Integration
              </h1>
            </div>
            {/* Description */}
            <p className="mt-3 mb-3 text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              laborum esse harum quasi maiores voluptas vel aperiam quod eum
              facilis.
            </p>
          </div>
          {/* 2nd Box */}
          <div className="bg-gray-200 p-4 rounded-3xl">
            <div className="flex items-center space-x-3 ">
              {/* Icons */}
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-200 bg-opacity-20">
                <GoWorkflow className="w-6 h-6 text-orange-400" />
              </div>
              {/* Heading */}
              <h1 className="text-lg font-bold text-gray-700">
                Workflow Builder
              </h1>
            </div>
            {/* Description */}
            <p className="mt-3 mb-3 text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              laborum esse harum quasi maiores voluptas vel aperiam quod eum
              facilis.
            </p>
          </div>

          {/* 3rd Box */}
          <div className="bg-gray-200 p-4 rounded-3xl">
            <div className="flex items-center space-x-3 ">
              {/* Icons */}
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-200 bg-opacity-20">
                <MdAccessAlarm className="w-6 h-6 text-orange-400" />
              </div>
              {/* Heading */}
              <h1 className="text-lg font-bold text-gray-700">
                Lifetime Access
              </h1>
            </div>
            {/* Description */}
            <p className="mt-3 mb-3 text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              laborum esse harum quasi maiores voluptas vel aperiam quod eum
              facilis.
            </p>
          </div>

          {/* 4th Box */}
          <div className="bg-gray-200 p-4 rounded-3xl">
            <div className="flex items-center space-x-3 ">
              {/* Icons */}
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-200 bg-opacity-20">
                <LuPen className="w-6 h-6 text-orange-400" />
              </div>
              {/* Heading */}
              <h1 className="text-lg font-bold text-gray-700">
                Problem Solution
              </h1>
            </div>
            {/* Description */}
            <p className="mt-3 mb-3 text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              laborum esse harum quasi maiores voluptas vel aperiam quod eum
              facilis.
            </p>
          </div>
        </div>

        {/* Image Content */}
        <div>
          <Image src="/images/f1.png" alt="Feature" width={700} height={700} />
        </div>
      </div>
    </div>
  );
};

export default Feature;
