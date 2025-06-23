import Image from "next/image";
import React from "react";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { FaCompass, FaCalendarCheck } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="relative w-full h-[110vh] sm:h-screen bg-[url('/images/bg.png')] bg-cover bg-center flex justify-center flex-col">
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Text Content */}
        <div data-aos="fade-up">
          <p className="text-sm sm:text-base md:text-xl font-bold text-blue-900">
            Make the Smartest Investment
          </p>

          <h1 className="text-2xl md:text-3xl lg:text-4xl mt-6 mb-6 font-bold text-blue-950 leading-[2.5rem]">
            Kickstart, Scale and Thrive Faster with{" "}
            <span className="text-rose-700">TechDev</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            obcaecati aut facilis quas ut excepturi adipisci? Fuga, unde quas
            esse iusto rem praesentium tempore consequatur debitis optio
            molestias cum laboriosam quaerat soluta excepturi quos eius expedita
            mollitia deserunt. Beatae voluptates, atque quis ipsa eveniet
            dolorum ea vero quisquam qui modi.
          </p>

          {/* Ratings */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-10 mt-6">
            {/* Google */}
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <Image
                src="/images/google.png"
                alt="Google"
                width={40}
                height={40}
              />
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl text-gray-700 font-bold">
                  4.5
                </h1>
                <div className="flex items-center">
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <BsStarHalf className="w-4 h-4 text-yellow-500" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base mt-1">
                  Best Rated on Google
                </p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center space-x-2">
              <Image
                src="/images/linkedin.png"
                alt="LinkedIn"
                width={40}
                height={40}
              />
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl text-gray-700 font-bold">
                  4.1
                </h1>
                <div className="flex items-center">
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <BsStarHalf className="w-4 h-4 text-yellow-500" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base mt-1">
                  Best Rated on LinkedIn
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex mt-8 flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              type="button"
              className="flex items-center gap-3 text-white bg-gradient-to-r from-blue-600 to-pink-500 hover:from-pink-600 hover:to-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-semibold rounded-full text-2xl px-6 py-3 shadow-lg transition duration-300"
            >
              <FaCompass className="w-6 h-6" />
              Explore
            </button>

            <button
              type="button"
              className="flex items-center gap-3 text-white bg-gradient-to-r from-blue-600 to-pink-500 hover:from-pink-600 hover:to-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-semibold rounded-full text-2xl px-6 py-3 shadow-lg transition duration-300"
            >
              <FaCalendarCheck className="w-6 h-6" />
              Make Meeting
            </button>
          </div>
        </div>

        {/* Right column (optional image or illustration) */}
        <div data-aos="fade-down" className="mx-auto hidden xl:block">
          <Image src="/images/hero.jpg" alt="image" width={900} height={900} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
